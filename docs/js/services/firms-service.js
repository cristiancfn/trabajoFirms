import { config } from "../config.js";
import { firmsApiParams } from "../utils/constants.js";
import { isInColombia, buildApiUrl } from "../utils/helpers.js";

const getFullApiUrl = () => {
    const { baseUrl, apiKey } = config.firmsApiService;
    const firmsBaseUrl = buildApiUrl(baseUrl, apiKey);
    const params = new URLSearchParams(firmsApiParams).toString();
    return `${firmsBaseUrl}?${params}`;
};

export const getFireData = async () => {
    const url = getFullApiUrl();
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const geojson = await response.json();

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
