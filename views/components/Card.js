class Card extends HTMLElement {
  constructor() {
    super();
    this.type;
  }

  static get observedAttributes() {
    return ["type"];
  }

  attributeChangedCallback(typeAtr, oldValue, newValue) {

    this.type = newValue;
    switch (this.type) {
        case "1":
            this.type = `
            <div class="mt-4 border-t border-gray-300">
                <div class="items-center md:flex md:justify-between pt-4">
                    <div
                        class="flex items-center w-full px-2 py-1 my-4 mr-3 text-xs font-medium text-green-500 rounded-md md:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Asisto a este evento</span>
                    </div>
    
                    <button
                        class="flex items-center justify-center w-full px-3 py-2 mr-3 text-xs font-medium text-white transition duration-200 ease-in-out rounded-md md:w-auto bg-secondary-500 hover:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>No asistiré</span>
                    </button>
                </div>
            </div>
            `;
        break;

        case "2":
            this.type = `
            <div class="mt-4 border-t border-gray-300">
                <div class="items-center md:flex md:justify-between pt-4">
                    <div
                        class="flex items-center w-full px-2 py-1 my-4 mr-3 text-xs font-medium text-red-500 rounded-md md:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span>Propietario del evento</span>
                    </div>

                    <div class="relative" x-data="{ openOpc: false }" x-cloak>
                        <div>
                            <button @click="openOpc = !openOpc"
                                class="flex items-center justify-center w-full px-3 py-3 mr-3 text-xs font-medium text-white transition duration-200 ease-in-out rounded-md md:w-auto bg-secondary-500 hover:bg-gray-900">

                                <span> Opciones</span>
                            </button>
                        </div>

                        <div x-show.transition="openOpc" @click.away="openOpc = false"
                            class="absolute w-64 py-1 mt-2 bg-white rounded-md shadow-lg bottom-12 right-3 ring-1 ring-primary-500 ring-opacity-5 focus:outline-none"
                            x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95"
                            x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
                            x-transition:leave-start="opacity-100 scale-100"
                            x-transition:leave-end="opacity-0 scale-95">

                            <a href="./editar-evento.html" class="flex items-center px-4 py-2 text-sm cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-8 h-8 p-2 text-white rounded-full bg-secondary-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <span class="inline-block px-3 ">
                                    Editar Evento
                                </span>
                            </a>

                            <a href="#" class="flex items-center px-4 py-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-8 h-8 p-2 text-white bg-red-500 rounded-full" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <span class="inline-block px-3 ">
                                    Cancelar Evento
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        break;

        case "3":
            this.type = `
            <div class="mt-4 border-t border-gray-300">
                <div class="items-center md:flex md:justify-between pt-4">
                    <div
                        class="flex items-center w-full px-2 py-1 my-4 mr-3 text-xs font-medium text-gray-500 rounded-md md:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span>Pendiente de publicar</span>
                    </div>

                    <div class="relative" x-data="{ openOpc: false }" x-cloak>
                        <div>
                            <button @click="openOpc = !openOpc"
                                class="flex items-center justify-center w-full px-3 py-3 mr-3 text-xs font-medium text-white transition duration-200 ease-in-out rounded-md md:w-auto bg-secondary-500 hover:bg-gray-900">

                                <span> Opciones</span>
                            </button>
                        </div>

                        <div x-show.transition="openOpc" @click.away="openOpc = false" 
                            class="absolute w-64 py-1 mt-2 bg-white rounded-md shadow-lg bottom-12 right-3 ring-1 ring-primary-500 ring-opacity-5 focus:outline-none"
                            x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95"
                            x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
                            x-transition:leave-start="opacity-100 scale-100"
                            x-transition:leave-end="opacity-0 scale-95">

                            <a href="./editar-evento.html" class="flex items-center px-4 py-2 text-sm cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-8 h-8 p-2 text-white rounded-full bg-secondary-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <span class="inline-block px-3 ">
                                    Continuar
                                </span>
                            </a>

                            <a href="#" class="flex items-center px-4 py-2 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-8 h-8 p-2 text-white bg-red-500 rounded-full" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <span class="inline-block px-3 ">
                                    Cancelar Evento
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        break;

        case "4":
            this.type = `
            <div class="mt-4 border-t border-gray-300">
                <div class="items-center md:flex md:justify-between pt-4">
                    <div
                        class="flex items-center w-full px-2 py-1 my-4 mr-3 text-xs font-medium text-red-500 rounded-md md:w-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Evento cancelado</span>
                    </div>
                </div>
            </div>
        `;
        break;
    
        default:
            this.type = ``;
        break;
    }
  }

  connectedCallback() {

    this.innerHTML = `
      <!-- Componente para copiar -->
        <div>
            <a href="./ver-evento.html">
                <div class="p-6 mt-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out hover:-translate-y-4" id="card">
                <img src="https://source.unsplash.com/300x300/?random" alt=""
                    class="object-cover object-center w-full rounded-lg h-72">
                <div class="mt-6 mb-2">
                    <span class="block text-2xl font-bold text-secondary-500">Encuentro relajante</span>
                </div>
                <div class="grid grid-cols-2 space-y-3">
                    <div class="col-span-2">
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="px-3 text-secondary-400">Parque Central, España</span>
                        </p>
                    </div>
                    <div class="col-span-2">
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="px-3 text-secondary-400">15/10/2021</span>
                            </p>
                        </div>
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="inline-block px-3 text-secondary-400">14:00 p.m</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span class="inline-block px-3 text-secondary-400">30</span>
                            </p>
                        </div>
                        <div class="inline-block">
                            <p class="flex items-center ml-14">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                                <span class="inline-block px-3 text-secondary-400">Presencial</span>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
            ${this.type}
        </div>
        `;

        // Funcion para repetir card de Eventos (Unicamente para rellenar el sitio)
    let body = document.querySelector(".body");
    let card = document.getElementById('card');
    for (let i = 0; i < 11; i++) {
    // Componente de Card de Evento
    let divClone = card.cloneNode(true);
    body.appendChild(divClone);
    }
  }
}
window.customElements.define("event-card", Card);
