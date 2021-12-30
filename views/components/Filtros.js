class Filtros extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    
    const paths = [
        "Eventos en tu ciudad",
        "Mis Eventos",
        "Adultos"
    ];

    // Botones
    const Buttons = `
        <!-- Eventos en tu ciudad -->
        <a href="eventos.html"
            class="category-button">
            ${paths[0]}
        </a>
        <!-- Boton Mis Eventos -->
        <a href="${paths[1].replace(/\s/g, "-").toLowerCase()}.html"
            class="category-button">
            ${paths[1]}
        </a>
        <!-- Boton Adultos -->
        <a href="${paths[2].replace(/\s/g, "-").toLowerCase()}.html"
            class="category-button">    
            ${paths[2]}
            <img src="./img/AdultosIcon.svg" alt="" class="inline-block w-3.5 h-3.5 -mt-1 ml-1">
        </a>
    `;

    // Restablecer Filtros
    // let btnRestablecer = document.getElementById('btnRestablecer');

    // btnRestablecer.addEventListener('click', () => {
    //     document.getElementById('inpDonde').innerHTML = "";
    //     document.getElementById('inpCuando').innerHTML = "";
    //     document.getElementById('selClasificacion').innerHTML = "";
    //     document.getElementById('selTipo').innerHTML = "";
    // });


    this.innerHTML = `
      <!-- Descubrir ubicacion -->
      <div class="px-6 pt-20 bg-white border-b border-gray-200 lg:pt-0 lg:px-8">
          <p class="text-base font-medium text-secondary-500 md:text-4xl md:font-semibold md:inline-block">Descubre
              eventos en |</p>
          <div class="flex items-center justify-between max-w-lg cursor-pointer md:inline-block">
              <div class="md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </div>
  
              <div class="inline-block ">
                  <!-- Parrafo donde poner ubicación -->
                  <input type="text" value="San Lucas, Mazatlán Sinaloa"
                      class="w-56 px-3 text-3xl font-semibold cursor-pointer md:inline-block md:w-96 md:text-4xl text-primary-500">
              </div>
        </div>
        
        <!-- Categorias -->
        <div class="pb-5 pt-7" x-data="{ openFilter: false }" x-cloak>
            <div class="relative">
                <div class="absolute bottom-0 right-0 inline-block">
                    <!-- Boton Filtro -->
                    <button @click="openFilter = !openFilter"
                        class="p-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-300 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-secondary-500"
                            viewBox="0 0 54.064 49.121">
                            <g id="Filter" transform="translate(-240 -452.491)">
                                <path id="Trazado_6730" data-name="Trazado 6730" class="cls-1"
                                    d="M584.812,189.727H565.346a2.317,2.317,0,1,1,0-4.634h19.466a2.317,2.317,0,1,1,0,4.634Z"
                                    transform="translate(-322.939 304.758)" />
                                <path id="Trazado_6731" data-name="Trazado 6731" class="cls-1"
                                    d="M593.921,180.034H574.458a2.317,2.317,0,0,1,0-4.634h19.463a2.317,2.317,0,0,1,0,4.634Z"
                                    transform="translate(-303.901 284.506)" />
                                <path id="Trazado_6732" data-name="Trazado 6732" class="cls-1"
                                    d="M572.617,177.634a4.931,4.931,0,1,0,4.983,4.934A4.964,4.964,0,0,0,572.617,177.634Zm0,14.5a9.565,9.565,0,1,1,9.617-9.562A9.6,9.6,0,0,1,572.617,192.129Z"
                                    transform="translate(-323 279.491)" />
                                <path id="Trazado_6733" data-name="Trazado 6733" class="cls-1"
                                    d="M583.894,187.342a4.931,4.931,0,1,0,4.98,4.931A4.964,4.964,0,0,0,583.894,187.342Zm0,14.5a9.565,9.565,0,1,1,9.614-9.565A9.6,9.6,0,0,1,583.894,201.837Z"
                                    transform="translate(-299.445 299.775)" />
                            </g>
                        </svg>
                    </button>
                </div>

                <div class="max-w-md py-3 mr-16 space-x-5 overflow-x-auto break-words md:max-w-full whitespace-nowrap">
                    <!-- Botones -->
                    ${Buttons}
                </div>
            </div>

            <!-- Todos los filtros -->
            <div class="pt-5 my-5 border-t border-gray-200 " :class="{'' : openFilter, 'hidden' : !openFilter}">
                <p class="py-2 font-medium">
                    Filtrar eventos
                </p>

                <div>
                    <div class="grid gap-4 mt-4 md:grid-cols-4">

                        <!-- Input Donde -->
                        <div>
                            <div class="opacity-50">
                                <div class="flex items-center py-3">
                                    <p class="font-medium text-gray-600">¿Dónde?</p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 mx-2 fill-current text-primary-500" width="12.371"
                                        height="24.743" viewBox="0 0 12.371 24.743">
                                        <path id="path" class="cls-1"
                                            d="M80.9,592.6H93.271l-4.949,9.9h4.949l-8.66,14.846V606.208H80.9Z"
                                            transform="translate(-80.9 -592.6)" />
                                    </svg>
                                </div>
                                <div class="relative w-full">
                                    <div class="absolute flex items-center h-full ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input id="inpDonde" disabled type="text" placeholder="Buscar por ciudad, provincia o país"
                                        class="w-full px-8 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0">
                                </div>
                            </div>
                            <div class="py-3">
                                <p class="text-xs text-gray-800">Hazte <a href="#"
                                        class="font-semibold text-primary-500">NES+ PRO</a> para ver eventos en otras
                                    ciudades.</p>
                            </div>
                        </div>

                        <!-- Input Cuando -->
                        <div>
                            <div class="flex items-center py-3">
                                <p class="font-medium text-gray-600">¿Cuándo?</p>
                            </div>
                            <div class="relative w-full">
                                <div class="absolute flex items-center h-full ml-2">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="03/03/21" id="demo-1" class="w-full px-8 py-3 text-sm bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"/>
                            </div>
                        </div>

                        <!-- Select Clasificación -->
                        <div>
                            <div class="flex items-center py-3">
                                <p class="font-medium text-gray-600">Clasificación</p>
                            </div>
                            <div class="relative">
                                <div class="relative">
                                    <div class="w-full mb-3">
                                        <select id="selClasificacion"
                                            class="w-full px-8 py-3 text-sm bg-gray-100 border-transparent rounded-md appearance-none form-select focus:border-gray-500 focus:bg-white focus:ring-2 ring-blue-600"
                                            aria-label="Default select example">
                                            <option disabled selected value> -- Selecciona una opción -- </option>
                                            <option value="1">Vida urbana</option>
                                            <option value="2">Cultural</option>
                                            <option value="3">Deportes</option>
                                            <option value="3">Social</option>
                                            <option value="3">Música</option>
                                            <option value="3">Cumpleaños</option>
                                            <option value="3">Otros</option>
                                            <option value="3">Adultos</option>
                                        </select>
                                    </div>
                                    <div class="absolute top-0 right-0 px-3 py-2 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Select Tipo Evento -->
                        <div>
                            <div class="flex items-center py-3">
                                <p class="font-medium text-gray-600">Tipo de Evento</p>
                            </div>
                            <div class="relative">
                                <div class="relative">
                                    <div class="w-full mb-3">
                                        <select  id="selTipo"
                                            class="w-full px-8 py-3 text-sm bg-gray-100 border-transparent rounded-md appearance-none form-select focus:border-gray-500 focus:bg-white focus:ring-2 ring-blue-600"
                                            aria-label="Default select example">
                                            <option disabled selected value> -- Selecciona una opción -- </option>
                                            <option value="1">Presencial</option>
                                            <option value="2">En linea</option>
                                            <option value="3">Sin especificar</option>
                                        </select>
                                    </div>
                                    <div class="absolute top-0 right-0 px-3 py-2 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-400"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Botones -->
                <div class="items-center justify-end mt-2 space-y-5 md:flex md:space-x-5 md:space-y-0">
                    <button id="btnRestablecer"
                        class="w-full px-4 py-2 text-sm font-medium border-2 rounded-md md:w-auto border-secondary-500 hover:bg-secondary-500 text-secondary-500 hover:text-white">
                        Restablecer filtros
                    </button>
                    <button id="btnAplicar" @click="openFilter = !openFilter"
                        class="w-full px-4 py-2 text-sm font-medium text-white rounded-md md:w-auto bg-primary-500 hover:bg-primary-600">
                        Aplicar
                    </button>
                </div>
            </div>
        </div>
        `;

        // Boton Activo
        const eventLink = document.querySelectorAll(".category-button");
        for (let i = 0; i < eventLink.length; i++) {
        if (eventLink[i].href === location.href) {
            eventLink[i].classList.add("text-primary-500");
            eventLink[i].classList.add("bg-primary-100");
        }
        }
  }
}
window.customElements.define("nes-filtros", Filtros);
