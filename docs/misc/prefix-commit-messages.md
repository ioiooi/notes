# Prefix Git Commit Messages with Branch Information

Edit the `prepare-commit-msg` hook found in each repository `.git/hooks`. Alternatively a [global config or templates can be created](https://medium.com/@nicklee1/prepending-your-git-commit-messages-with-user-story-ids-3bfea00eab5a).

```sh
#!/bin/bash

MESSAGE=$(cat $1)
TICKET=$(git rev-parse --abbrev-ref HEAD | grep -Eo '[a-zA-Z]+-[0-9]+' | head -n 1 | tr "[:lower:]" "[:upper:]")

if [[ -z "$TICKET" ]]; then
  # TICKET is empty
  exit 0
elif [[ "$MESSAGE" == *"$TICKET"* ]]; then
  echo "Ticket found in commit message. Skipping..."
  exit 0
fi

echo "$TICKET: $MESSAGE" > $1
```

The branch is matched against the regex `'[a-zA-Z]+-[0-9]+'` and the commit message is then prefixed by that result `"$TICKET: $MESSAGE"`.

Examples:

Executing `git commit -m "much code, very changes"` would result in the following messages...

| branch name                                         | match     | commit message                     |
| --------------------------------------------------- | --------- | ---------------------------------- |
| omg/refactoring-everything                          | n/a       | much code, very changes            |
| feature/foo/bar/SCHMU-1_lorem-ipsum-larum/dev       | SCHMU-1   | SCHMU-1: much code, very changes   |
| feature/dev/ema/lol-232-consectetur-adipiscing-elit | lol-232   | LOL-232: much code, very changes   |
| feature/SPO-23411                                   | SPO-24311 | SPO-24311: much code, very changes |
| YOLO-42-live-fast-die-young                         | YOLO-42   | YOLO-42: much code, very changes   |
