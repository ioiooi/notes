# Environment Variables

## Development vs Production

You want verbose logging, source maps, uncompressed files when you’re developing the application, but a leaner set of logs and gzip compression when it's in production.
This configuration can be achieved by using `NODE_ENV` environment variable.

**Setting the environment variable in UNIX systems:**

```bash
NODE_ENV=production node app
```

**In Windows:**
(Windows adds trailing whitespace if you leave a gap between 'production' and '&&')

```bash
set NODE_ENV=production&& node app
```

The `NODE_ENV` variable is just a widely used convention, you can use whatever you want and how many you want.

For example you could define `DEBUG=1 node app` and use that environment variable within your code like so:

```js
if (process.env.DEBUG) {
  // special debugging
}
```

## Passwords and API Keys

Not the best solution!
Create a file `.env` and add it to the `.gitignore` so you don't accidently push your access credentials to a public git repository.

[`source`](https://ss64.com/bash/source.html) the variables into your local environment or use a package that does it for you.
