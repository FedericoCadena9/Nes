class NavLinks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Categorias del Navbar
    const links = [
      {
        name: "Conocer",
        path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      },
      {
        name: "Momentos",
        path: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      },
      {
        name: "Eventos",
        path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      },
      {
        name: "Cadena de Favores",
        path: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
      },
      {
        name: "Viajes",
        path: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
      },
      {
        name:  "Blog",
        path: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
      }
    ];

    // Mapeo de cada link
    const navLinks = links
      .map(
        (link) =>
          `<a aria-current="page" class="nav-link flex items-center" href="${link.name.replace(/\s/g, "-").toLowerCase()}.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-primary-600 xl:hidden"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="${link.path}" />
              </svg>
            <span class="ml-3 xl:ml-0">${link.name}</span>
          </a>`
      ).join("\n");


    this.innerHTML = `
        <!-- Navbar -->
        <nav class=" xl:flex">
          <div class="xl:flex grid gap-y-8">
          ${navLinks}
          </div>
        </nav>
        `;

    // Link activo
    const navLink = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLink.length; i++) {
      if (navLink[i].href === location.href) {
        navLink[i].classList.add("text-primary-500");
        navLink[i].classList.add("bg-gray-50");
        navLink[i].classList.add("md:bg-white");
      }
    }
  }
}

window.customElements.define("nav-links", NavLinks);
