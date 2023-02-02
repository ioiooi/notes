# Prefix Git Commit Messages with Branch Information

This script works for branches like

- `feature/JIRA-123`
- `feature/JIRA-123_hello-world`
- `JIRA-123`
- `feature/lol/JIRA-123`

It wont work for branches like

- `feature/JIRA-123_hello-world/dev`

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
