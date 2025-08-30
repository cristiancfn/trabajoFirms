const sectionsData = [
  {
    id: "inicio",
    title: "Bienvenido a GeoFire",
    content:
      "Visualiza incendios activos en Colombia usando datos FIRMS de la NASA.",
  },
  {
    id: "explicacion",
    title: "Explicación del Proyecto",
    content:
      "Este proyecto muestra en un mapa los incendios detectados en Colombia, usando Leaflet y datos del servicio FIRMS.",
  },
  {
    id: "servicio",
    title: "Conexión al Servicio Web",
    content: `
            <p> La aplicación consulta el servicio FIRMS de la NASA mediante una API pública y filtra los datos para mostrar únicamente los incendios registrados dentro de Colombia.</p>

            <ol>
                <li>
                    <h3>Solicitud de llave de acceso</h3>
                    <p>Para conectarse al servicio, primero se debe ingresar a la página 
                        <a href="https://firms.modaps.eosdis.nasa.gov/api/map_key/" target="_blank" >FIRMS API KEY</a>
                         y solicitar una nueva llave (API Key), la cual será enviada al correo electrónico registrado.
                    </p>
                </li>

                <li>
                    <h3>Selección del servicio WFS</h3>
                    <p>Con la llave obtenida, se utiliza la opción <i>Web Feature Service (WFS)</i>, 
                    donde se encuentran diferentes locaciones del mundo. 
                    Para este caso se selecciona <b>“South America”</b>, que contiene los sistemas administrados por la plataforma de la NASA.
                    </p>
                </li>

                <li>
                    <h3>Obtención de la URL del servicio</h3>
                    <p>Dentro de <b>“Modis 24 hrs”</b> se encuentra la URL del servicio junto con los parámetros que recibe.</p>
                    <code>https://firms.modaps.eosdis.nasa.gov/mapserver/wfs/South_America/YourMapKey/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=ms:fires_modis_24hrs&STARTINDEX=0&COUNT=1000&SRSNAME=urn:ogc:def:crs:EPSG::4326&BBOX=-90,-180,90,180,urn:ogc:def:crs:EPSG::4326&outputformat=csv</code><br>
                </li>

                <li>
                    <h3>Configuración en el programa</h3>
                    <p>En la aplicación se creó una función para almacenar la API_URL y el API_KEY. 
                    Luego se configuraron los parámetros requeridos por el servicio y finalmente se ejecutó la llamada al Web Service para obtener las locaciones de incendios.
                    </p>
                    <p><b>Parámetros utilizados:</b></p>
                    <ul>
                        <li>SERVICE: WFS</li>
                        <li>REQUEST: GetFeature</li>
                        <li>VERSION: 2.0.0</li>
                        <li>TYPENAME: ms:fires_modis_24hrs</li>
                        <li>STARTINDEX: 0</li>
                        <li>COUNT: 1000</li>
                        <li>SRSNAME: urn:ogc:def:crs:EPSG::4326</li>
                        <li>BBOX: -4.5,-82.0,13.6,-66.8,urn:ogc:def:crs:EPSG::4326</li>
                        <li>outputformat: json</li>
                    </ul><br>
                </li>

                <li>
                    <h3>Ajuste del área geográfica (BBOX)</h3>
                    <p>En el parámetro <code>BBOX</code> se configuró el bounding box correspondiente al área de Colombia, 
                    de forma que los datos obtenidos se limitan únicamente a este territorio.
                    </p>
                </li>

            </ol>
        `,
  },
  {
    id: "acerca",
    title: "Acerca de",
    content:
      "GeoFire es una tarea académica para visualizar datos geoespaciales en tiempo real.",
  },
  {
    id: "codigo-fuente",
    title: "Código Fuente",
    content: `
      <p>Explora la estructura de archivos y el código fuente del proyecto directamente desde aquí.</p>
      <div class="code-explorer-container">
        <div id="file-tree" class="file-tree"></div>
        <div id="code-viewer" class="code-viewer">
          <pre><code>Selecciona un archivo del árbol para ver su contenido.</code></pre>
        </div>
      </div>
    `,
  },
];

const createSectionHTML = (section) => {
  return `
        <section id="${section.id}" class="content-section">
            <h2>${section.title}</h2>
            ${section.content}
        </section>
    `;
};

export const renderSections = (container) => {
  const allSectionsHTML = sectionsData.map(createSectionHTML).join("");
  container.innerHTML = allSectionsHTML;
};
