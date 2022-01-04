// Link Navbar activo
const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  if (navLink[i].href === location.href) {
    navLink[i].classList.add("text-primary-500");
    navLink[i].classList.add("bg-gray-50");
    navLink[i].classList.add("md:bg-white");
  }
}

// Boton Filtros Activo
const eventLink = document.querySelectorAll(".category-button");
for (let i = 0; i < eventLink.length; i++) {
    if (eventLink[i].href === location.href) {
        eventLink[i].classList.add("text-primary-500");
        eventLink[i].classList.add("bg-primary-100");
    }
}

//Función para agregar Boton de Crear Evento
window.addEventListener('scroll', () => {
  let anima = document.getElementById('cardBody');
  let btnCrear = document.getElementById('btnCrear');
  let position = anima.getBoundingClientRect().top;
  let sizeScreen = window.innerHeight / 3.5;

  if(position < sizeScreen)
  {
      btnCrear.classList.remove('hidden');
      btnCrear.classList.remove('scale-in-center-reverse');
      btnCrear.classList.add('scale-in-center');
  }
  else
  {
      btnCrear.classList.add('scale-in-center-reverse');
  }
})

// Switch para determinar que opciones del Card se van a imprimir
let card = document.querySelector(".card").id;
let options = document.getElementById("options");

switch (card) {
  case "c-1":
    options.innerHTML = `
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

    case "c-2":
      options.innerHTML = `
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
      </div>`;
    break;

    case "c-3":
      options.innerHTML = `
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

                    <a href="./editar-evento-pendiente.html" class="flex items-center px-4 py-2 text-sm cursor-pointer">
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
      </div>`;
    break;

    case "c-4":
      options.innerHTML = `
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
      </div>`;
    break;

  default:
    options.innerHTML = ``;
    break;
}

// Funcion para repetir card de Eventos (Unicamente para rellenar el sitio)
let body = document.querySelector(".body");
let cardComponent = document.querySelector(".card");
for (let i = 0; i < 11; i++) {
  // Componente de Card de Evento
  let divClone = cardComponent.cloneNode(true);
  body.appendChild(divClone);
}

// Datepicker Filtros Cuando
$(function () {
  $('input[name="datetimes"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format("YYYY"), 10),
  });
});

