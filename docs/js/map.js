import { config } from "./config.js";


// Coordenadas del bounding box de Colombia
const colombiaBounds = [
    [-4.5, -78.0], // Suroeste
    [13.5, -67.0]  // Noreste
];

// Inicializar mapa SOLO Colombia y limitar movimiento y zoom
const map = L.map('map', {
    maxBounds: colombiaBounds, // Limita el área de movimiento
    maxBoundsViscosity: 1.0,  // No deja salir del área
    minZoom: 6,               // Zoom mínimo para Colombia
    maxZoom: 12               // Zoom máximo
}).setView([4.6, -74.1], 6); // Centra y ajusta el zoom

// Agregar capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


const params = {
    "SERVICE": "WFS",
    "REQUEST": "GetFeature",
    "VERSION": "2.0.0",
    "TYPENAME": "ms:fires_modis_24hrs",
    "STARTINDEX": "0",
    "COUNT": "1000",
    "SRSNAME": "urn:ogc:def:crs:EPSG::4326",
    "BBOX": "-4.5,-78.0,13.5,-67.0,urn:ogc:def:crs:EPSG::4326", // Solo Colombia más estricto
    "outputformat": "json"
}

// Función para filtrar puntos dentro de Colombia
function isInColombia(lat, lon) {
    lat = Number(lat);
    lon = Number(lon);
    return (
        !isNaN(lat) && !isNaN(lon) &&
        lat >= -4.5 && lat <= 13.5 &&
        lon >= -78.0 && lon <= -67.0
    );
}

// Función para cargar datos de incendios
async function loadFireData() {
    try {
        const response = await fetch(`${config.API_URL}`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        const geojson = JSON.parse(json.body);

        // Filtrar solo los puntos dentro de Colombia
        geojson.features = geojson.features.filter(f => {
            const p = f.properties || {};
            return isInColombia(p.latitude, p.longitude);
        });

        const firmsLayer = L.geoJSON(geojson, {
            pointToLayer: (feature, latlng) => {
                const p = feature.properties || {};
                return L.circleMarker(latlng, {
                    radius: 6,
                    color: '#333',
                    weight: 1,
                    fillColor: colorByConfidence(p.confidence),
                    fillOpacity: 0.85
                });
            },
            onEachFeature: (feature, layer) => {
                const p = feature.properties || {};
                const date = p.acq_date ?? p.acq_datetime ?? '';
                const time = p.acq_time != null ? formatAcqTime(p.acq_time) : '';
                const html = `
                                <strong>FIRMS MODIS (24h)</strong><br/>
                                <b>Fecha:</b> ${date} ${time}<br/>
                                <b>Brightness:</b> ${p.brightness ?? ''}<br/>
                                <b>Confidence:</b> ${p.confidence ?? ''}<br/>
                                <b>FRP:</b> ${p.frp ?? ''}<br/>
                                <b>Lat/Lon:</b> ${p.latitude?.toFixed?.(5) ?? ''}, ${p.longitude?.toFixed?.(5) ?? ''}
                            `;
                layer.bindPopup(html);
            }
        }).addTo(map);

        // Enfocar a los datos
        const b = firmsLayer.getBounds();
        if (b.isValid()) map.fitBounds(b, { padding: [20, 20] });
        map.fitBounds(colombiaBounds, { padding: [20, 20] });

    } catch (error) {
        console.error('Error cargando datos:', error);
    }
}

function colorByConfidence(c) {
    const v = Number(c);
    if (isNaN(v)) return '#888';
    if (v >= 80) return '#e31a1c';   // alto
    if (v >= 50) return '#fd8d3c';   // medio
    return '#feb24c';                // bajo
}

function formatAcqTime(t) {
    // FIRMS suele dar HHMM sin dos puntos; a veces llega 122 -> 01:22
    const s = String(Math.round(Number(t) || 0)).padStart(4, '0');
    return `${s.slice(0, 2)}:${s.slice(2)}`;
}

// Cargar datos al inicializar
loadFireData();

