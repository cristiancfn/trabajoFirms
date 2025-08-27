import { config } from "../config.js";
import { isInColombia, buildApiUrl } from "../utils/helpers.js";

export const getFireData = async () => {
    const url = config.API_URL;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        const geojson = JSON.parse(json.body);

        // Filtrar solo los puntos dentro de Colombia
        geojson.features = geojson.features.filter(feature => {
            const p = feature.properties || {};
            return isInColombia(p.latitude, p.longitude);
        });

        return geojson;

    } catch (error) {
        console.error('Error cargando datos de incendios:', error);
        throw error; // Re-lanzar el error para que el вызывающий código pueda manejarlo
    }
};
