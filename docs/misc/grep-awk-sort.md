# Filter and sort grep matches

Searching for pattern in all folders and files of the current directory and sorting the result from highest to lowest number of occurences.

```sh
grep -Erc '[fF]oobar' . | awk -v FS=":" -v OFS="\t" '$2>0 { print $2, $1 }' | sort -hr
```

## First part: `grep`

https://man7.org/linux/man-pages/man1/grep.1.html

- `E` - Use extended regular expressions (ERE) instead of basic ones (BRE)
- `r` - Read all files under each directory, recursively
- `c` - Suppress normal output; instead print a count of matching lines for each input file.

**Example output:**

> ./docs/index.md:3  
> ./docs/misc/unix-time.md:2  
> ./docs/misc/deployment.md:0  
> ./docs/misc/ssh-add-startup.md:0  
> ./docs/misc/editorconfig-naming-convention.md:7  
> ./docs/misc/find-delete-files.md:1

## Second part: `awk`

https://man7.org/linux/man-pages/man1/awk.1p.html

`awk` is going to filter out files with 0 matches and change the structure of the output from `<file>:<matches>` to `<matches>tab<file>`.

- `-v FS=":"` - This is creating a variable called `FS` and assigning the value `:` to it.
- `-v OFS="\t"` - This is creating a variable called `OFS` and assigning the value `\t` to it.
- `'$2>0 { print $2, $1 }'` - Print every line where the 2nd column `$2` is greater than 0. First print the 2nd column and then the 1st column.

**Example output:**

> 3 ./docs/index.md  
> 2 ./docs/misc/unix-time.md  
> 7 ./docs/misc/editorconfig-naming-convention.md  
> 1 ./docs/misc/find-delete-files.md

### More Info and Alternatives

> -v var=val  
> --assign var=val  
> Assign the value val to the variable var, before execution of the program begins. Such variable values are available to the **BEGIN** block of an AWK program.

The following `awk` commands produce the same result.

```sh
awk 'BEGIN{FS=":"; OFS="\t"} $2>0 { print $2, $1 }'
awk -F: '$2>0 { print $2 "\t" $1 }'
```

## Third part: `sort`

https://man7.org/linux/man-pages/man1/sort.1.html

Default behavior of `sort` command is to sort by the first column/field/key whatever you wanna call it. The default field separator is a blank space. The whole command seems to work either way ¯\\\_(ツ)\_/¯

- `h` - Human readable
- `r` - Default is ascending, this option reverses the order so the output is sorted in descending order.

## Final Result

So the command `grep | awk | sort` produces a result that looks something like this:

> 7 ./docs/misc/editorconfig-naming-convention.md  
> 3 ./docs/index.md  
> 2 ./docs/misc/unix-time.md  
> 1 ./docs/misc/find-delete-files.md
