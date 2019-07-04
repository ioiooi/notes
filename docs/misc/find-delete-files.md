# Find and delete files

Using `find`, `xargs` and `rm`. Alternatively use `find [whatever] -delete` to achieve the same thing.

## Ex 1

`find . -name ".txt" -print0 | xargs -0 rm`

## Ex 2

Find files that have been:  
Created in the last hour  
`find . -type f -cmin -60`

Modified in the last hour  
`find . -type f -mmin -60`

Accessed in the last hour  
`find . -type f -amin -60`

For directories `-type d` or skip `type` entirely
