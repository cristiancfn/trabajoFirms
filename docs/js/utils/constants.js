export const colombiaBounds = [
    [-4.5, -78.0], // Suroeste
    [13.5, -67.0]  // Noreste
];

export const mapConfig = {
    maxBounds: colombiaBounds,
    maxBoundsViscosity: 1.0,
    minZoom: 6,
    maxZoom: 12,
    center: [4.6, -74.1],
    zoom: 6
};

export const tileLayerConfig = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: {
        attribution: '© OpenStreetMap contributors'
    }
};

export const firmsApiParams = {
    "SERVICE": "WFS",
    "REQUEST": "GetFeature",
    "VERSION": "2.0.0",
    "TYPENAME": "ms:fires_modis_24hrs",
    "STARTINDEX": "0",
    "COUNT": "1000",
    "SRSNAME": "urn:ogc:def:crs:EPSG::4326",
    "BBOX": "-4.5,-78.0,13.5,-67.0,urn:ogc:def:crs:EPSG::4326",
    "outputformat": "json"
};
