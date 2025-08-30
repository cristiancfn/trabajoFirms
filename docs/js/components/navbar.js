const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#explicacion", text: "Explicación del Proyecto" },
    { href: "#servicio", text: "Conexión al Servicio Web" },
    { href: "#codigo-fuente", text: "Código Fuente" },
    { href: "#acerca", text: "Acerca de" }
];

const renderLinks = (links) => {
    return links.map(link => `
        <li class="nav-item">
            <a class="nav-link" href="${link.href}">${link.text}</a>
        </li>
    `).join('');
};

export const renderNavbar = (container) => {
    container.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'fixed-top');
    
    container.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="https://img.icons8.com/color/48/000000/fire-element.png" alt="GeoFire Logo" style="height: 40px;" class="d-inline-block align-text-top me-2">
                <span class="fw-bold">GeoFire</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${renderLinks(navLinks)}
                </ul>
            </div>
        </div>
    `;

    const links = container.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = e.target.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                targetElement.classList.add('highlight');
                targetElement.addEventListener('animationend', () => {
                    targetElement.classList.remove('highlight');
                }, { once: true }); 
            }
        });
    });
};
