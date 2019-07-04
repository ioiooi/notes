# Find and delete files

Using `find`, `xargs` and `rm`. Alternatively use `find [whatever] -delete` to achieve the same thing.

## Ex 1

`find . -name ".txt" -print0 | xargs -0 rm`
