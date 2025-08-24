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
    if (!map) return;

    const finalBounds = L.latLngBounds(colombiaBounds);

    if (layer) {
        const layerBounds = layer.getBounds();
        if (layerBounds.isValid()) {
            finalBounds.extend(layerBounds);
        }
    }

    map.fitBounds(finalBounds, { padding: [20, 20] });
};
