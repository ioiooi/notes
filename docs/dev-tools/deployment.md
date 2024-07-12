# Deployment

[GitHub hook](https://developer.github.com/webhooks/)

https://github.com/adnanh/webhook

1. Server config. SSH key. New User.
2. Server with a `git bare` repo and `post-receive` hook
    * `post-receive` hook does magic. starts the build process etc...
3. On the Client add the Server as a second remote or create a alias.

[Git push deployment](https://gist.github.com/thomasfr/9691385)