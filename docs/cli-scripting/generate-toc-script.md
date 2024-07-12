# Generate a Table of Contents (TOC) file

This Bash script generates a Table of Contents (TOC) for Markdown files in a directory and its subdirectories. The script works as follows:

1. It defines a variable `TOC_FILE` to specify the name of the output TOC file, which is set to "toc.md."

2. Two functions are defined:
   - `generate_entry()`: This function takes a Markdown file as an argument and generates a TOC entry for that file in the format `[filename](path/to/filename.md)`.
   - `generate_folder_subheadline()`: This function takes a folder path and a level as arguments and generates subheadline entries for folders in the TOC.
3. The script starts by creating a new "toc.md" file with the Table of Contents headline.

4. It uses the `find` command to locate all non-hidden directories in the current directory and its subdirectories. It sorts them alphabetically.

5. For each found folder, it calculates its depth (level) in the directory tree and skips the root directory.

6. It then generates a subheadline entry for the folder and appends it to the TOC file.

7. Next, it uses `find` again to locate all Markdown files within the current folder (up to a maximum depth of 1) and generates TOC entries for each Markdown file, appending them to the TOC file.

8. The script repeats these steps for all directories and Markdown files in the directory tree.

9. Finally, it outputs messages indicating the progress and updates the TOC file with the Table of Contents entries.

```sh
#!/bin/bash

# Define the output TOC file
TOC_FILE="toc.md"

# Function to generate a TOC entry for an MD file
generate_entry() {
  local file="$1"
  local link="[$(basename "$file" .md)]($file)"
  echo "- $link"
}

# Function to generate subheadlines for folders
generate_folder_subheadline() {
  local folder="$1"
  local level="$2"
  local folder_name=$(basename "$folder")
  local headline="#"

  for ((i = 1; i <= level; i++)); do
    headline="$headline#"
  done

  echo "$headline $folder_name"
}

# Create a new TOC file with the Table of Contents headline
echo "# Table of Contents" > "$TOC_FILE"
echo "Added Table of Contents headline to $TOC_FILE"

# Find all directories (excluding hidden ones) and generate alphabetically sorted folder structure
find . -type d -not -path '*/.*' | sort | while read -r folder; do
  level=$(awk -F/ '{print NF-1}' <<< "$folder")

  if [ "$level" -eq 0 ]; then
    continue  # Skip the root directory
  fi

  # Generate and append folder subheadline
  folder_subheadline=$(generate_folder_subheadline "$folder" "$level")
  echo "$folder_subheadline" >> "$TOC_FILE"
  echo "Added headline $folder_subheadline for folder $folder"

  # Find .md files under this folder and generate TOC entries
  find "$folder" -maxdepth 1 -type f -name "*.md" | sort | while read -r file; do
    entry=$(generate_entry "$file")
    echo "$entry" >> "$TOC_FILE"
    echo "Added entry for: $file"
  done
done

echo "Table of Contents updated in $TOC_FILE"
```
