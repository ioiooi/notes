# Find and delete files

Using `find`, `xargs` and `rm`. Alternatively use `find [whatever] -delete` to achieve the same thing.

## Example 1

Find and remove all files with the ".txt" extension within the current directory and its subdirectories.

```
find . -type f -name "*.txt" -print0 | xargs -0 rm
```

## Example 2

Find files that have been:  
Created in the last hour

```
find . -type f -cmin -60
```

Modified in the last hour

```
find . -type f -mmin -60
```

Accessed in the last hour

```
find . -type f -amin -60
```

For directories `-type d` or skip `type` entirely

## Example 3

Find all folders but skip hidden folders

```
find /path/to/search -type d -not -path '*/\.*'
```
