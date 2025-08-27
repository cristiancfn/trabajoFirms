import { initMap, fitBounds } from './core/map-manager.js';
import { getFireData } from './services/firms-service.js';
import { addFireMarkersToMap } from './ui/fire-marker.js';
import { createLayout } from './components/layout.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderSections } from './components/sections.js';

const renderUI = () => {
    const root = document.getElementById('root');
    if (!root) {
        console.error("El elemento raíz ('root') no fue encontrado.");
        return;
    }

    createLayout(root);

    renderNavbar(document.getElementById('navbar'));
    renderSections(document.getElementById('sections-container'));
    renderFooter(document.getElementById('footer'));
};

const loadMapAndData = async () => {
    const map = initMap('map');
    try {
        const fireData = await getFireData();
        const fireLayer = addFireMarkersToMap(fireData, map);
        fitBounds(fireLayer);
    } catch (error) {
        console.error("No se pudieron cargar los datos de incendios.", error);
    }
};

const main = () => {
    renderUI();
    loadMapAndData();
};

document.addEventListener('DOMContentLoaded', main);
