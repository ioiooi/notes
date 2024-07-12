export default {
  title: "VitePress",
  description: "Just playing around.",
  base: "/notes/",
  themeConfig: {
    sidebar: [
      {
        text: "Android",
        items: [{ text: "ArrayAdapter", link: "/android/arrayadapter.md" }],
      },
      {
        text: "Books",
        items: [
          { text: "Node.js in Action", link: "/books/nodejs-in-action.md" },
          {
            text: "Secrets of the JavaScript Ninja",
            link: "/books/secrets-of-the-javascript-ninja.md",
          },
        ],
      },
      {
        text: "CLI and Scripting",
        items: [
          {
            text: "Case conversion via `sed`",
            link: "/cli-scripting/case-conversion-sed-regex.md",
          },
          {
            text: "Find and delete files",
            link: "/cli-scripting/find-and-delete-files.md",
          },
          {
            text: "Generate TOC for MD structures",
            link: "/cli-scripting/generate-toc-script.md",
          },
          {
            text: "Search, Count, and Sort File Matches using Regular Expression",
            link: "/cli-scripting/search-count-sort-files-using-regex.md",
          },
        ],
      },
      {
        text: "Dev Tools",
        items: [
          { text: "Deployment", link: "/dev-tools/deployment.md" },
          {
            text: "EditorConfig naming convention",
            link: "/dev-tools/editorconfig-naming-convention.md",
          },
          {
            text: "Loading multiple ssh-keys on OSX and WSL2",
            link: "/dev-tools/loading-multiple-ssh-keys-on-osx-and-wsl2.md",
          },
          {
            text: "Prefix Git Commit Messages Hook",
            link: "/dev-tools/prefix-git-commit-messages-hook.md",
          },
        ],
      },
      {
        text: "Gaming",
        items: [
          { text: "WoW Macros - Hunter", link: "/gaming/wow-macros-hunter.md" },
          { text: "WoW Macros", link: "/gaming/wow-macros.md" },
        ],
      },
      {
        text: "Programming",
        items: [
          {
            text: "Fundamental Database Concepts",
            link: "/programming/fundamental-database-concepts.md",
          },
          { text: "Unix Time", link: "/programming/unix-time.md" },
          {
            text: "JavaScript",
            items: [
              {
                text: "Node.js Environment Variables",
                link: "/programming/javascript/nodejs-environment-variables.md",
              },
              {
                text: "Promisify callback functions",
                link: "/programming/javascript/promisify-callback-functions.md",
              },
            ],
          },
        ],
      },
    ],
  },
};
