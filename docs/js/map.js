import { config } from "./config.js";


// Inicializar mapa
const map = L.map('map').setView([4.6, -74.1], 5);

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
    "BBOX": "-4.5,-82.0,13.6,-66.8,urn:ogc:def:crs:EPSG::4326",
    "outputformat": "json"
}
const URL = `${config.API_URL}${config.API_KEY}/?${new URLSearchParams(params).toString()}`;

// Función para cargar datos de incendios
async function loadFireData() {
    try {
        const response = await fetch(`${URL}`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const geojson = await response.json();

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