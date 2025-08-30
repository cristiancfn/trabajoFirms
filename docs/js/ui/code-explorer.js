import { projectStructure } from "../project-structure.js";

const createTree = (nodes, codeViewer) => {
  const ul = document.createElement("ul");

  nodes.forEach((node) => {
    const li = document.createElement("li");
    li.textContent = node.name;

    if (node.type === "folder") {
      li.classList.add("folder");
      const childrenUl = createTree(node.children, codeViewer);
      childrenUl.style.display = "none"; // Initially collapsed
      li.appendChild(childrenUl);

      li.addEventListener("click", (event) => {
        event.stopPropagation();
        const isVisible = childrenUl.style.display === "block";
        childrenUl.style.display = isVisible ? "none" : "block";
      });
    } else {
      li.classList.add("file");
      li.dataset.path = node.path;

      li.addEventListener("click", async (event) => {
        event.stopPropagation();
        try {
          const response = await fetch(node.path);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const text = await response.text();
          codeViewer.textContent = text;
          // eslint-disable-next-line no-undef
          hljs.highlightElement(codeViewer);
        } catch (error) {
          codeViewer.textContent = `Error al cargar el archivo: ${error.message}`;
        }
      });
    }

    ul.appendChild(li);
  });

  return ul;
};

export const initCodeExplorer = () => {
  const fileTreeContainer = document.getElementById("file-tree");
  const codeViewerContainer = document.getElementById("code-viewer");

  if (fileTreeContainer && codeViewerContainer) {
    const codeElement = codeViewerContainer.querySelector("pre code");
    const tree = createTree(projectStructure, codeElement);
    fileTreeContainer.innerHTML = ''; // Limpiar contenido anterior
    fileTreeContainer.appendChild(tree);
  }
};
