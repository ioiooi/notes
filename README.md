# Notes powered by VitePress

<https://ioiooi.github.io/notes/>

## Dev

```sh
yarn docs:dev
```

VitePress will start a hot-reloading development server at <http://localhost:5173>.

## Build and Test Locally

Run this command to build the docs:

```sh
yarn docs:build
```

Test the build with:

```sh
yarn docs:preview
```

## 🚀 Github Pages Deployment 🚀

Just copy/paste the official documentation

<https://vitepress.dev/guide/deploy#github-pages>

Commit on the `main` branch starts a GitHub Action which automatically deploys the app.

### :warning: GitHub Pages Repository Settings :warning:

Go to the repository settings -> Code and automation > Pages

In the GitHub Pages Settings change the "Build and deployment" Source to "GitHub Actions" or else the deployment will fail. (See [link](https://github.com/vuejs/vitepress/issues/3293))

```log
Error: Creating Pages deployment failed
Error: HttpError: Invalid deployment branch and no branch protection rules set in the environment. Deployments are only allowed from gh-pages
```
