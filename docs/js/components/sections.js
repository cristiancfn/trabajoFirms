const sectionsData = [
  {
    id: "inicio",
    title: "Bienvenido a GeoFire",
    content: `
      <p><strong>GeoFire</strong> es una aplicación web interactiva que te permite visualizar los incendios forestales detectados en Colombia utilizando datos del sistema FIRMS de la NASA.</p>
      
      <p>Esta herramienta combina tecnología web moderna con datos satelitales para mostrar de forma visual y accesible la información sobre incendios forestales en el territorio colombiano.</p>
      
      <h3>¿Qué puedes hacer con GeoFire?</h3>
      <ul>
        <li><strong>Visualizar incendios:</strong> Ve los puntos de incendios detectados por satélites MODIS mostrados como marcadores en el mapa</li>
        <li><strong>Explorar el mapa:</strong> Navega por el territorio colombiano usando los controles de zoom y desplazamiento</li>
        <li><strong>Ver información detallada:</strong> Haz clic en cualquier marcador para ver datos específicos como fecha, nivel de confianza, coordenadas y mediciones</li>
        <li><strong>Identificar por color:</strong> Los marcadores están coloreados según el nivel de confianza (rojo: alto, naranja: medio, amarillo: bajo)</li>
      </ul>
      
      <p>Los datos provienen del sistema <strong>Fire Information for Resource Management System (FIRMS)</strong> de la NASA, que utiliza sensores satelitales para detectar anomalías térmicas asociadas con incendios forestales.</p>
    `,
  },
  {
    id: "explicacion",
    title: "Explicación del Proyecto",
    content: `
      <p>GeoFire es una aplicación web desarrollada con tecnologías modernas que integra múltiples fuentes de datos y herramientas de visualización geoespacial para crear una experiencia completa de monitoreo de incendios.</p>
      
      <h3>Arquitectura Técnica</h3>
      <p>El proyecto utiliza una arquitectura frontend que combina:</p>
      <ul>
        <li><strong>JavaScript ES6 modular:</strong> Código organizado en módulos con funciones específicas para cada componente</li>
        <li><strong>Leaflet.js:</strong> Biblioteca de mapas interactivos que maneja la visualización geográfica y controles de navegación</li>
        <li><strong>API REST:</strong> Conexión a una API intermediaria que obtiene datos del servicio FIRMS de la NASA</li>
        <li><strong>Bootstrap:</strong> Framework CSS para el diseño responsivo y componentes de interfaz</li>
        <li><strong>Filtrado geoespacial:</strong> Algoritmo que verifica coordenadas para mostrar solo incendios dentro de Colombia</li>
      </ul>
      
      <h3>Arquitectura de Backend</h3>
      <p>Para asegurar la seguridad y eficiencia del sistema, se implementó una arquitectura serverless en AWS que actúa como intermediario entre la aplicación frontend y los servicios FIRMS de la NASA:</p>
      <ul>
        <li><strong>AWS Lambda:</strong> Función serverless que maneja las solicitudes y procesa los datos de FIRMS</li>
        <li><strong>API Gateway:</strong> Expone un endpoint REST seguro para que el frontend acceda a los datos</li>
        <li><strong>AWS Secrets Manager:</strong> Almacena de forma segura la API Key de FIRMS, evitando hardcodearla en el código</li>
        <li><strong>DynamoDB:</strong> Sistema de cache que mejora el rendimiento y reduce las llamadas innecesarias a la API de la NASA</li>
        <li><strong>Procesamiento automático:</strong> El backend filtra y formatea automáticamente los datos antes de enviarlos al frontend</li>
      </ul>
      <p>Esta arquitectura garantiza que las credenciales sensibles estén protegidas, mejora el rendimiento mediante cache, y proporciona una interfaz estable para el frontend independientemente de cambios en la API de FIRMS.</p>
      
      <h3>Funcionalidades Implementadas</h3>
      <ul>
        <li><strong>Carga de datos FIRMS:</strong> La aplicación obtiene datos de incendios desde una API que conecta con los servicios de la NASA</li>
        <li><strong>Filtrado geográfico:</strong> Automáticamente filtra los datos para mostrar solo incendios dentro de las coordenadas de Colombia</li>
        <li><strong>Marcadores interactivos:</strong> Cada punto de incendio se muestra como un círculo coloreado según su nivel de confianza</li>
        <li><strong>Popups informativos:</strong> Al hacer clic en cualquier marcador se despliega información detallada: fecha, hora, brightness, confianza, FRP y coordenadas</li>
        <li><strong>Mapa interactivo:</strong> Utiliza Leaflet para permitir navegación, zoom y exploración del territorio</li>
      </ul>
      
      <h3>Fuente de Datos</h3>
      <p>Los datos provienen del <strong>Fire Information for Resource Management System (FIRMS)</strong>, que es una plataforma de la NASA que proporciona datos de incendios activos derivados de observaciones satelitales MODIS y VIIRS.</p>
      
      <p>El sistema detecta anomalías térmicas que indican la presencia de fuego activo, proporcionando coordenadas geográficas precisas, fechas y niveles de confianza para cada detección.</p>
    `,
  },
  {
    id: "servicio",
    title: "Conexión al Servicio Web",
    content: `
            <p>La aplicación consulta el servicio FIRMS de la NASA a través de un backend intermediario desplegado en AWS, que maneja de forma segura las credenciales y filtra los datos para mostrar únicamente los incendios registrados dentro de Colombia.</p>

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
    content: `
      <h3>Propósito Académico</h3>
      <p>GeoFire nace como un proyecto educativo enfocado en la aplicación práctica de tecnologías de información geográfica (GIS) y el desarrollo de aplicaciones web interactivas. Este proyecto demuestra cómo integrar datos científicos en tiempo real con herramientas de visualización modernas.</p>
      
      <h3>Objetivos del Proyecto</h3>
      <ul>
        <li><strong>Aprendizaje práctico:</strong> Aplicar conceptos de programación web, APIs REST y visualización de datos</li>
        <li><strong>Conciencia ambiental:</strong> Facilitar el acceso a información sobre incendios forestales en Colombia</li>
        <li><strong>Innovación tecnológica:</strong> Demostrar el potencial de las tecnologías web para el monitoreo ambiental</li>
        <li><strong>Accesibilidad de datos:</strong> Hacer que la información científica sea comprensible y accesible al público general</li>
      </ul>
      
      <h3>Relevancia e Impacto</h3>
      <p>Los incendios forestales representan uno de los principales desafíos ambientales en Colombia, afectando la biodiversidad, la calidad del aire y las comunidades locales. GeoFire contribuye a:</p>
      <ul>
        <li>Democratizar el acceso a información satelital especializada</li>
        <li>Promover la educación ambiental a través de la tecnología</li>
        <li>Demostrar aplicaciones prácticas de la ciencia de datos geoespaciales</li>
        <li>Inspirar el desarrollo de herramientas similares para otros fenómenos ambientales</li>
      </ul>
      
      <h3>Tecnologías Implementadas</h3>
      <p>Este proyecto utiliza JavaScript ES6+ con módulos, Leaflet.js para la visualización de mapas, Bootstrap para el diseño responsivo, y una API REST como intermediario para los datos FIRMS de la NASA. El código está organizado de forma modular con servicios específicos para el manejo de datos geoespaciales y la renderización de la interfaz.</p>
      
      <div class="note">
        <p><strong>Nota:</strong> Este es un proyecto con fines educativos y de demostración. Para aplicaciones críticas de monitoreo de incendios, se recomienda utilizar sistemas oficiales de las autoridades ambientales competentes.</p>
      </div>
    `,
  },
  {
    id: "codigo-fuente",
    title: "Código Fuente del Proyecto",
    content: `
      <p>Explora la estructura de archivos y el código fuente del proyecto directamente desde aquí.</p>
      <div class="code-explorer-container">
        <div id="file-tree" class="file-tree"></div>
        <div id="code-viewer" class="code-viewer">
          <pre><code>Selecciona un archivo del árbol para ver su contenido. </code></pre>
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
