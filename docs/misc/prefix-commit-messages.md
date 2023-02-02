# Prefix Git Commit Messages with Branch Information

Works for branches like

- `feature/JIRA-123`
- `feature/JIRA-123_hello-world`
- `JIRA-123`
- `feature/lol/JIRA-123`

Does not work for branches like

- `feature/JIRA-123_hello-world/dev`

The last slash `/` has to be followed by the ticket number and the ticket number has to stand alone or followed by a underscore `_`.

```sh
#!/bin/bash

MESSAGE=$(cat $1)
TICKET=$(git rev-parse --abbrev-ref HEAD | rev | cut -d/ -f1 | rev | grep -Eo '[^_]+' | head -1 | tr "[:lower:]" "[:upper:]")

if [[ "$MESSAGE" == *"$TICKET"* ]]; then
  echo "Ticket found in commit message. Skipping..."
  exit 0
elif [[ "$TICKET" == *"HEAD"* ]]; then
  echo "Dont add HEAD to the commit!! Skipping..."
  exit 0
fi

echo "$TICKET: $MESSAGE" > $1
```
