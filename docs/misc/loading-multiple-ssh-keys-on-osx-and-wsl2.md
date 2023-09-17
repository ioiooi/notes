# Loading multiple ssh-keys on OSX and WSL2

## OSX

Loading more than one key. For example `id_github` and `id_gitlab`.

SSH config

```
Host *.github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_github

Host *.gitlab.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_gitlab
```

Edit your `~/.bashrc`, `~/.zshrc` or whatever rc file that corresponds to your shell of choice and add the following to the bottom of your file.

```sh
# start ssh-agent if not present
ssh-add &>/dev/null || eval `ssh-agent` &>/dev/null
# ssh-agent has started
[ $? -eq 0 ] && {
	ssh-add ~/.ssh/id_github &>/dev/null
	ssh-add ~/.ssh/id_gitlab &>/dev/null
}
```

## WSL2

https://esc.sh/blog/ssh-agent-windows10-wsl2/

Install `keychain`

```
sudo apt-get install keychain
```

Edit your `~/.bashrc`, `~/.zshrc` or whatever rc file that corresponds to your shell of choice and add the following to the bottom of your file.

```sh
# For Loading the SSH key
/usr/bin/keychain -q --nogui $HOME/.ssh/id_rsa
source $HOME/.keychain/$HOST-sh
```
