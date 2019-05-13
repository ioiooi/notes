# Using `sed` and `regex` for text case conversion

Replacing lowercase hexcodes with uppercase.

`sed -E 's/#[[:alnum:]]+/\U&/g' foobar.xml`

1. `#` hashtag
2. `[:alnum:]` is a [POSIX bracket expression](https://www.regular-expressions.info/posixbrackets.html) and captures all Alphanumeric characters `[a-zA-Z0-9]`
3. `+` quantifier 1 to many
4. `\U&` match is converted to uppercase - [more info](https://www.regular-expressions.info/replacecase.html)

GNU `sed` uses POSIX.2 BREs. The `-E` option switches to using extended regular expressions instead.
