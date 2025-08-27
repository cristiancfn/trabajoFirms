const sectionsData = [
    {
        id: "inicio",
        title: "Bienvenido a GeoFire",
        content: "Visualiza incendios activos en Colombia usando datos FIRMS de la NASA."
    },
    {
        id: "explicacion",
        title: "Explicación del Proyecto",
        content: "Este proyecto muestra en un mapa los incendios detectados en Colombia, usando Leaflet y datos del servicio FIRMS."
    },
    {
        id: "servicio",
        title: "Conexión al Servicio Web",
        content: "La aplicación consulta el servicio FIRMS de la NASA mediante una API pública y filtra los datos para mostrar solo los incendios dentro de Colombia."
    },
    {
        id: "acerca",
        title: "Acerca de",
        content: "GeoFire es una tarea académica para visualizar datos geoespaciales en tiempo real."
    }
];

const createSectionHTML = (section) => {
    return `
        <section id="${section.id}" class="content-section">
            <h2>${section.title}</h2>
            <p>${section.content}</p>
        </section>
    `;
};

export const renderSections = (container) => {
    const allSectionsHTML = sectionsData.map(createSectionHTML).join('');
    container.innerHTML = allSectionsHTML;
};
