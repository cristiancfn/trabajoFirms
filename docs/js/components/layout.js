export const createLayout = (rootElement) => {
    rootElement.innerHTML = `
        <header class="navbar" id="navbar"></header>
        <main id="app-container">
            <div id="map"></div>
            <div id="sections-container"></div>
        </main>
        <footer class="footer" id="footer"></footer>
    `;
};
