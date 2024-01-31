export default {
  title: "VitePress",
  description: "Just playing around.",
  base: "/notes/",
  themeConfig: {
    sidebar: [
      {
        text: "Miscellaneous",
        items: [
          {
            text: "Node.js Environment Variables",
            link: "/misc/nodejs-environment-variables",
          },
          { text: "Unix Time", link: "/misc/unix-time" },
          { text: "Promises", link: "/misc/promisify-callback-functions" },
          { text: "Database", link: "/misc/fundamental-database-concepts" },
          { text: "Find and delete files", link: "/misc/find-and-delete-files" },
          { text: "Deployment", link: "/misc/deployment" },
          {
            text: "Case conversion with `sed`",
            link: "/misc/string-to-upper-sed-regex",
          },
          {
            text: "EditorConfig Naming Conventions",
            link: "/misc/editorconfig-naming-convention",
          },
          {
            text: "Prefix Commit Messages",
            link: "/misc/prefix-git-commit-messages-hook",
          },
          {
            text: "Loading multiple ssh-keys at startup",
            link: "/misc/loading-multiple-ssh-keys-on-osx-and-wsl2",
          },
          {
            text: "Search, Count, and Sort File Matches using Regular Expression",
            link: "/misc/search-count-sort-files-using-regex",
          },
          {
            text: "Generate TOC for MD structures",
            link: "/misc/generate-toc-script",
          },
          {
            text: "WoW Macros",
            link: "/misc/wow-macros",
          },
          {
            text: "WoW Macros - Hunter",
            link: "/misc/wow-macros-hunter",
          },
        ],
      },
      {
        text: "Android",
        items: [{ text: "ArrayAdapter", link: "/android/arrayadapter" }],
      },
      {
        text: "Books",
        items: [
          { text: "Node.js in Action", link: "/books/nodejs-in-action" },
          {
            text: "Secrets of the JavaScript Ninja",
            link: "/books/secrets-of-the-javascript-ninja",
          },
        ],
      },
    ],
  },
};
