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
            text: "Environment Variables",
            link: "/misc/environment-variables",
          },
          { text: "Unix Time", link: "/misc/unix-time" },
          { text: "Promises", link: "/misc/promises" },
          { text: "Database", link: "/misc/database" },
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
            link: "/misc/prefix-commit-messages",
          },
          {
            text: "Add ssh-key at startup",
            link: "/misc/ssh-add-startup",
          },
          {
            text: "Filter and sort grep matches by files",
            link: "/misc/grep-awk-sort",
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
