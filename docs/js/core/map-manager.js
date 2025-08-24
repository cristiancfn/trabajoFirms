import { mapConfig, tileLayerConfig, colombiaBounds } from '../utils/constants.js';

let map = null;

export const initMap = (mapId) => {
    if (map) return map;

    map = L.map(mapId, {
        maxBounds: mapConfig.maxBounds,
        maxBoundsViscosity: mapConfig.maxBoundsViscosity,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom
    }).setView(mapConfig.center, mapConfig.zoom);

    L.tileLayer(tileLayerConfig.url, tileLayerConfig.options).addTo(map);

    return map;
};

export const getMap = () => {
    if (!map) {
        throw new Error('El mapa no ha sido inicializado. Llama a initMap primero.');
    }
    return map;
};

export const fitBounds = (layer) => {
    if (!map || !layer) return;

    const bounds = layer.getBounds();
    if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
    } else {
        // Si no hay marcadores, simplemente ajusta a Colombia
        map.fitBounds(colombiaBounds, { padding: [20, 20] });
    }
};
