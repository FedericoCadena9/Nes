class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <!-- Header -->
      <div class="fixed z-50 min-w-full" x-cloak x-data="{ openMenu: false }">
          <div class="relative bg-white">
              <div class="px-6 mx-auto lg:px-8">
                  <div
                      class="flex items-center justify-between py-5 border-gray-100 md:py-3 lg:justify-start lg:space-x-10">
      
                      <div>
                          <!-- Hamburger Menu Responsive -->
                          <div class="inline-block lg:hidden">
                              <button @click="openMenu = ! openMenu"
                                  class="inline-flex items-center justify-center p-2 bg-white rounded-md text-secondary-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                                  aria-expanded="false">
      
                                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M4 6h16M4 12h16M4 18h16" />
                                  </svg>
                              </button>
                          </div>
      
                          <!-- Nes Logo -->
                          <div class="hidden mx-4 md:inline-block lg:mx-0">
                              <a href="#">
                                  <img class="w-auto h-7" src="./svg/NesLogo.svg" alt="Nes Logo">
                              </a>
                          </div>
      
                          <!-- Nes Logo Responsive -->
                          <div class="inline-block sm:hidden">
                              <a href="#">
                                  <img class="w-auto h-6 mx-3" src="./svg/NesLogoResponsive.svg" alt="Nes Logo Responsive">
                              </a>
                          </div>
      
                      </div>
      
      
                      
      
      
      
      
                      <!-- Navbar -->
                      <nav class="hidden lg:flex">
                          <div class="relative">
                              <!-- Pagina Conocer -->
                              <a href="#" class="px-2 text-base text-secondary-400 font-regular hover:text-primary-500">
                                  Conocer
                              </a>
                              <!-- Pagina Momentos -->
                              <a href="#" class="px-2 text-base text-secondary-400 font-regular hover:text-primary-500">
                                  Momentos
                              </a>
                              <!-- Pagina Eventos -->
                              <a href="#" class="px-2 text-base text-primary-500 font-regular hover:text-primary-500">
                                  Eventos
                              </a>
                              <!-- Pagina Cadena de Favores -->
                              <a href="#" class="px-2 text-base text-secondary-400 font-regular hover:text-primary-500">
                                  Cadena de favores
                              </a>
                              <!-- Pagina Viajes -->
                              <a href="#" class="px-2 text-base text-secondary-400 font-regular hover:text-primary-500">
                                  Viajes
                              </a>
                              <!-- Pagina Blog -->
                              <a href="#" class="px-2 text-base text-secondary-400 font-regular hover:text-primary-500">
                                  Blog
                              </a>
                      </nav>
      
      
      
      
                      <div class="flex items-center justify-end lg:flex-1 lg:w-0">
                          <!-- Header Widgets -->
                          <div class="flex md:mr-5">
                              <!-- Like -->
                              <a href="#"
                                  class="items-center justify-center hidden w-10 h-10 mx-2 bg-gray-100 rounded-full md:flex">
                                  <svg class="w-5 h-5 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                      width="24" height="24" viewBox="0 0 24 24">
                                      <path
                                          d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z">
                                      </path>
                                  </svg>
                              </a>
                              <!-- Favoritos -->
                              <a href="#"
                                  class="items-center justify-center hidden w-10 h-10 mx-2 bg-gray-100 rounded-full md:flex">
                                  <svg class="w-5 h-5 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                      width="24" height="24" viewBox="0 0 24 24">
                                      <path
                                          d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                      </path>
                                  </svg>
                              </a>
                              <!-- Notificaciones -->
                              <div class="md:relative" hidden x-data="{ openNot: false }" x-cloak>
                                  <div>
                                      <button @click="openNot = !openNot"
                                          class="flex items-center justify-center w-10 h-10 mx-2 bg-gray-100 rounded-full">
                                          <svg class="w-5 h-5 text-gray-600 fill-current"
                                              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                              viewBox="0 0 24 24">
                                              <path
                                                  d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z">
                                              </path>
                                          </svg>
                                      </button>
                                  </div>
      
                                  <div x-show.transition="openNot" @click.away="openNot = false"
                                      class="absolute right-0 z-20 mt-2 overflow-hidden bg-white rounded-md shadow-lg w-80"
                                      x-transition:enter="duration-200 ease-out"
                                      x-transition:enter-start="opacity-0 scale-95"
                                      x-transition:enter-end="opacity-100 scale-100"
                                      x-transition:leave="duration-100 ease-in"
                                      x-transition:leave-start="opacity-100 scale-100"
                                      x-transition:leave-end="opacity-0 scale-95">
      
      
                                      <div>
                                          <p class="px-3 py-2 text-lg font-semibold text-gray-600">Notificaciones</p>
                                          
                                          <a href="#" class="flex flex-shrink-0 w-full p-3 py-5 border-b bg-blue-50 hover:bg-gray-100">
                                              <div tabindex="0" aria-label="group icon" role="img" class="flex items-center justify-center flex-shrink-0 w-8 h-8 border border-gray-200 rounded-full focus:outline-none">
                                                  <img class="object-cover w-8 h-8 rounded-full"
                                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                  alt="avatar">
                                                  
                                              </div>
                                              <div class="w-full pl-3">
                                                  <div class="flex items-center justify-between w-full">
                                                      <p class="text-sm text-gray-600">
                                                          <span class="font-bold" href="#">Sarah Maqueda</span> le gusta tu comentario de <span
                                                              class="font-bold " href="#">Encuentro relajante</span>
                                                      </p>
                                                  </div>
                                                  <p tabindex="0" class="pt-1 text-xs leading-3 text-gray-500 focus:outline-none">Hace 2 horas</p>
                                              </div>
                                          </a>
      
                                          <a href="#" class="flex flex-shrink-0 w-full p-3 py-5 bg-white border-b hover:bg-gray-100">
                                              <div tabindex="0" aria-label="group icon" role="img" class="flex items-center justify-center flex-shrink-0 w-8 h-8 border border-gray-200 rounded-full focus:outline-none">
                                                  <img class="object-cover w-8 h-8 rounded-full"
                                                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                                  alt="avatar">
                                                  
                                              </div>
                                              <div class="w-full pl-3">
                                                  <div class="flex items-center justify-between w-full">
                                                      <p class="text-sm text-gray-600">
                                                          <span class="font-bold" href="#">Henry Simbaña Cruz</span> te ha enviado una solicitud de amistad. ¡Mira su perfil!
                                                      </p>
                                                  </div>
                                                  <p tabindex="0" class="pt-1 text-xs leading-3 text-gray-500 focus:outline-none">Hace 45 min</p>
                                              </div>
                                          </a>
      
                                          <a href="#" class="flex flex-shrink-0 w-full p-3 py-5 bg-white border-b hover:bg-gray-100">
                                              <div tabindex="0" aria-label="group icon" role="img" class="flex items-center justify-center flex-shrink-0 w-8 h-8 border border-gray-200 rounded-full focus:outline-none">
                                                  <img class="object-cover w-8 h-8 rounded-full"
                                                  src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                                  alt="avatar">
                                                  
                                              </div>
                                              <div class="w-full pl-3">
                                                  <div class="flex items-center justify-between w-full">
                                                      <p class="text-sm text-gray-600">
                                                          <span class="font-bold" href="#">Maria Perez</span> comentó en
                                                          <span class="font-bold" href="#">Deportes</span>
                                                          
                                                      </p>
                                                  </div>
                                                  <p tabindex="0" class="pt-1 text-xs leading-3 text-gray-500 focus:outline-none">Hace 1 hora</p>
                                              </div>
                                          </a>
                                          
                                          <a href="#" class="flex flex-shrink-0 w-full p-3 py-5 bg-white border-b hover:bg-gray-100">
                                              <div tabindex="0" aria-label="group icon" role="img" class="flex items-center justify-center flex-shrink-0 w-8 h-8 border border-gray-200 rounded-full focus:outline-none">
                                                  <img class="object-cover w-8 h-8 rounded-full"
                                                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                                                  alt="avatar">
                                                  
                                              </div>
                                              <div class="w-full pl-3">
                                                  <div class="flex items-center justify-between w-full">
                                                      <p class="text-sm text-gray-600">
                                                          <span class="font-bold" href="#">Abigail Contreras</span> comentó en
                                                          <span class="font-bold " href="#">Encuentro relajante</span>
                                                      </p>
                                                  </div>
                                                  <p tabindex="0" class="pt-1 text-xs leading-3 text-gray-500 focus:outline-none">Hace 2 horas</p>
                                              </div>
                                          </a>
                                      </div>
                                      <a href="#" class="block py-2 text-sm font-semibold text-center text-white bg-secondary-500 hover:bg-gray-800">Ver todas las notificaciones</a>
      
                                  </div>
                              </div>
      
                              <!-- Mensajes -->
                              <a href="./chat.html"
                                  class="flex items-center justify-center w-10 h-10 mx-2 bg-gray-100 rounded-full">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
                                  </svg>
                              </a>
      
                              <!-- Nes Pro -->
                              <a href="#" class="items-center hidden md:flex">
                                  <div
                                      class="items-center justify-center w-10 h-10 mx-2 text-gray-600 transition duration-300 ease-in-out bg-gray-100 rounded-full md:flex jello-horizontal hover:text-primary-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current " width="12.371"
                                          height="24.743" viewBox="0 0 12.371 24.743">
                                          <path id="path" class="cls-1"
                                              d="M80.9,592.6H93.271l-4.949,9.9h4.949l-8.66,14.846V606.208H80.9Z"
                                              transform="translate(-80.9 -592.6)" />
                                      </svg>
                                  </div>
                                  <div>
                                      <p class="text-xs font-medium leading-3 text-gray-600">Hazte <span
                                              class="block text-xs font-bold uppercase text-primary-500">Nes+ Pro</span>
                                      </p>
                                  </div>
                              </a>
                          </div>
      
      
      
                          <!-- Avatar -->
      
                          <div class="relative ml-3" x-data="{ openDrop: false }" x-cloak>
                              <div>
                                  <button @click="openDrop = !openDrop"
                                      class="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-500 focus:ring-white">
                                      <img class="object-cover w-8 h-8 rounded-full md:w-10 md:h-10"
                                          src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                          alt="">
                                  </button>
                              </div>
      
                              <div x-show.transition="openDrop" @click.away="openDrop = false"
                                  class="absolute right-0 w-64 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-primary-500 ring-opacity-5 focus:outline-none"
                                  x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95"
                                  x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
                                  x-transition:leave-start="opacity-100 scale-100"
                                  x-transition:leave-end="opacity-0 scale-95">
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">
                                      <img class="inline-block object-cover w-10 h-10 rounded-full"
                                          src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                          alt="">
                                      <span class="inline-block px-3 font-semibold">
                                          Mi Usuario
                                      </span>
                                  </a>
      
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <span class="inline-block px-3 ">
                                          Perfil
                                      </span>
                                  </a>
      
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      </svg>
                                      <span class="inline-block px-3 ">
                                          Panel de Administración
                                      </span>
                                  </a>
      
                                  <a href="#" class="block px-4 py-2 text-sm text-gray-700">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 h-5" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                      </svg>
                                      <span class="inline-block px-3 ">
                                          Cerrar Sesión
                                      </span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      
              <!-- Menu Responsive -->
              <div @click.away=" openMenu = false" @keydown.escape.window="openMenu = false"
                  class="absolute top-0 z-50 w-screen px-2 mt-3 origin-top-left transform -translate-x-1/2 left-1/2"
                  x-show="openMenu" x-transition:enter="duration-200 ease-out"
                  x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100"
                  x-transition:leave="duration-100 ease-in" x-transition:leave-start="opacity-100 scale-100"
                  x-transition:leave-end="opacity-0 scale-95">
                  <div class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                      <div class="px-5 pt-5 pb-6">
                          <div class="flex items-center justify-between">
      
                              <!-- Nes Logo -->
                              <div>
                                  <img class="w-auto h-6" src="./svg/NesLogo.svg" alt="Nes Logo">
                              </div>
      
                              <!-- Cerrar Menu -->
                              <div class="-mr-2">
                                  <button type="button" @click="openMenu = ! openMenu"
                                      class="inline-flex items-center justify-center p-2 bg-white rounded-md text-secondary-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                  </button>
                              </div>
                          </div>
      
                          <!-- Contenido -->
                          <div class="mt-6">
                              <nav class="grid gap-y-8">
      
                                  <!-- Pagina Conocer -->
                                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          class="flex-shrink-0 w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                      </svg>
                                      <span class="ml-3 text-base font-medium text-secondary-400">
                                          Conocer
                                      </span>
                                  </a>
      
                                  <!-- Pagina Momentos -->
                                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          class="flex-shrink-0 w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <span class="ml-3 text-base font-medium text-secondary-400">
                                          Momentos
                                      </span>
                                  </a>
      
                                  <!-- Pagina Eventos -->
                                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          class="flex-shrink-0 w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                      <span class="ml-3 text-base font-medium text-secondary-400">
                                          Eventos
                                      </span>
                                  </a>
      
                                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          class="flex-shrink-0 w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                      </svg>
                                      <span class="ml-3 text-base font-medium text-secondary-400">
                                          Cadena de Favores
                                      </span>
                                  </a>
      
                                  <!-- Pagina Viajes -->
                                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          class="flex-shrink-0 w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                      </svg>
                                      <span class="ml-3 text-base font-medium text-secondary-400">
                                          Viajes
                                      </span>
                                  </a>
      
                                  <!-- Pagina Blog -->
                                  <a href="#" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                                      <svg xmlns="http://www.w3.org/2000/svg"
                                          class="flex-shrink-0 w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                      </svg>
                                      <span class="ml-3 text-base font-medium text-secondary-400">
                                          Blog
                                      </span>
                                  </a>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        `;
    }
  }
  
  customElements.define("header", Header);  