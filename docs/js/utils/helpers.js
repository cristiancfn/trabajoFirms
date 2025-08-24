export function isInColombia(lat, lon) {
    lat = Number(lat);
    lon = Number(lon);
    return (
        !isNaN(lat) && !isNaN(lon) &&
        lat >= -4.5 && lat <= 13.5 &&
        lon >= -78.0 && lon <= -67.0
    );
}

export function colorByConfidence(c) {
    const v = Number(c);
    if (isNaN(v)) return '#888';
    if (v >= 80) return '#e31a1c';   // alto
    if (v >= 50) return '#fd8d3c';   // medio
    return '#feb24c';                // bajo
}

export function formatAcqTime(t) {
    // FIRMS suele dar HHMM sin dos puntos; a veces llega 122 -> 01:22
    const s = String(Math.round(Number(t) || 0)).padStart(4, '0');
    return `${s.slice(0, 2)}:${s.slice(2)}`;
}

/**
 * Construye la URL base de la API a partir de sus componentes.
 * @param {object} baseUrl - Objeto con dominio y ruta.
 * @param {string} apiKey - La clave de la API.
 * @returns {string} La URL base completa.
 */
export const buildApiUrl = (baseUrl, apiKey) => {
    return `${baseUrl.domain}${baseUrl.path}${apiKey}/`;
};
