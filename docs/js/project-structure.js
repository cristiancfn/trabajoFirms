export const projectStructure = [
  {
    name: "docs",
    type: "folder",
    children: [
      {
        name: "css",
        type: "folder",
        children: [{ name: "styles.css", type: "file", path: "css/styles.css" }],
      },
      {
        name: "js",
        type: "folder",
        children: [
          { name: "app.js", type: "file", path: "js/app.js" },
          {
            name: "components",
            type: "folder",
            children: [
              {
                name: "footer.js",
                type: "file",
                path: "js/components/footer.js",
              },
              {
                name: "layout.js",
                type: "file",
                path: "js/components/layout.js",
              },
              {
                name: "navbar.js",
                type: "file",
                path: "js/components/navbar.js",
              },
              {
                name: "sections.js",
                type: "file",
                path: "js/components/sections.js",
              },
            ],
          },
          { name: "config.js", type: "file", path: "js/config.js" },
          {
            name: "core",
            type: "folder",
            children: [
              {
                name: "map-manager.js",
                type: "file",
                path: "js/core/map-manager.js",
              },
            ],
          },
          {
            name: "services",
            type: "folder",
            children: [
              {
                name: "firms-service.js",
                type: "file",
                path: "js/services/firms-service.js",
              },
            ],
          },
          {
            name: "ui",
            type: "folder",
            children: [
              {
                name: "fire-marker.js",
                type: "file",
                path: "js/ui/fire-marker.js",
              },
            ],
          },
          {
            name: "utils",
            type: "folder",
            children: [
              {
                name: "constants.js",
                type: "file",
                path: "js/utils/constants.js",
              },
              { name: "helpers.js", type: "file", path: "js/utils/helpers.js" },
            ],
          },
        ],
      },
      { name: "index.html", type: "file", path: "index.html" },
    ],
  },
  { name: "README.md", type: "file", path: "../README.md" },
];
