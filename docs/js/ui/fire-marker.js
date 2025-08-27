import { colorByConfidence, formatAcqTime } from '../utils/helpers.js';

const createPopupContent = (properties) => {
    const {
        acq_date = '',
        acq_time = '',
        brightness = '',
        confidence = '',
        frp = '',
        latitude = '',
        longitude = ''
    } = properties;

    const time = acq_time ? formatAcqTime(acq_time) : '';
    const lat = typeof latitude === 'number' ? latitude.toFixed(5) : '';
    const lon = typeof longitude === 'number' ? longitude.toFixed(5) : '';

    return `
        <strong>FIRMS MODIS (24h)</strong><br/>
        <b>Fecha:</b> ${acq_date} ${time}<br/>
        <b>Brightness:</b> ${brightness}<br/>
        <b>Confidence:</b> ${confidence}<br/>
        <b>FRP:</b> ${frp}<br/>
        <b>Lat/Lon:</b> ${lat}, ${lon}
    `;
};

export const createFireMarker = (feature, latlng) => {
    const properties = feature.properties || {};
    const marker = L.circleMarker(latlng, {
        radius: 6,
        color: '#333',
        weight: 1,
        fillColor: colorByConfidence(properties.confidence),
        fillOpacity: 0.85
    });

    const popupContent = createPopupContent(properties);
    marker.bindPopup(popupContent);

    return marker;
};

export const addFireMarkersToMap = (geojson, map) => {
    const firmsLayer = L.geoJSON(geojson, {
        pointToLayer: createFireMarker
    }).addTo(map);

    return firmsLayer;
};
