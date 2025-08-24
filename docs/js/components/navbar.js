const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#explicacion", text: "Explicación del Proyecto" },
    { href: "#servicio", text: "Conexión al Servicio Web" },
    { href: "#acerca", text: "Acerca de" }
];

const renderLinks = (links) => {
    return links.map(link => `
        <li><a href="${link.href}">${link.text}</a></li>
    `).join('');
};

export const renderNavbar = (container) => {
    container.innerHTML = `
        <div class="navbar-brand">
            <img src="https://img.icons8.com/color/48/000000/fire-element.png" alt="GeoFire Logo" class="navbar-logo">
            <span class="navbar-title">GeoFire</span>
        </div>
        <ul class="nav-links">
            ${renderLinks(navLinks)}
        </ul>
    `;
};
