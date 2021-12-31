class Navbar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="fixed z-40 min-w-full" x-cloak x-data="{ openMenu: false }">
      <div class="relative bg-white">
          <div class="px-6 mx-auto lg:px-8">
              <div class="flex items-center justify-between py-5 border-gray-100 md:py-3 lg:justify-start lg:space-x-10">
  
                  <div>
                      <!-- Hamburger Menu Responsive -->
                      <div class="inline-block xl:hidden">
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
                          <a href="index.html">
                              <img class="w-auto h-7" src="./img/NesLogo.svg" alt="Nes Logo">
                          </a>
                      </div>
  
                      <!-- Nes Logo Responsive -->
                      <div class="inline-block sm:hidden">
                          <a href="index.html">
                              <img class="w-auto h-6 mx-3" src="./img/NesLogoResponsive.svg" alt="Nes Logo Responsive">
                          </a>
                      </div>
  
                  </div>
  
                  <!-- Navbar -->
                  <nav class="hidden xl:flex">
                      <div class="relative">
                          <nav-links></nav-links>
                  </nav>
  
                  <div class="flex items-center justify-end lg:flex-1 lg:w-0">

                      <!-- Header Widgets -->
                      <div class="flex">

                        <div class="hidden md:flex">
                            <circle-links></circle-links>
                        </div>

                        <!-- Mensajes -->
                        <a href="./chat.html" class="circle-link ml-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 fill-current"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                                    clip-rule="evenodd" />
                            </svg>
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

                              <!-- Foto y Nombre -->
                              <div href="#" class="block px-4 py-2 text-sm text-gray-700">
                                  <img class="inline-block object-cover w-10 h-10 rounded-full"
                                      src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                      alt="">
                                  <span id="username" class="inline-block px-3 font-semibold">
                                      Mi Usuario
                                  </span>
                              </div>
  
                              <!-- Tu perfil -->
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
                            
                              <!-- Panel de administración -->
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

                              <!--Cerrar sesión -->
                              <a href="index.html" class="block px-4 py-2 text-sm text-gray-700">
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
              x-show="openMenu" x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95"
              x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
              x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95">
              <div class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div class="px-5 pt-5 pb-6">
                      <div class="flex items-center justify-between">
  
                          <!-- Nes Logo -->
                          <div>
                              <img class="w-auto h-6" src="./img/NesLogo.svg" alt="Nes Logo">
                          </div>
  
                          <!-- Cerrar Menu -->
                          <div class="-mr-2">
                              <button type="button" @click="openMenu = ! openMenu"
                                  class="inline-flex items-center justify-center p-2 bg-white rounded-md text-secondary-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                  <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                      stroke="currentColor" aria-hidden="true">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                              </button>
                          </div>
                      </div>

                      <!-- Navbar -->
                      <div class="mt-6">
                            <nav-links></nav-links>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
  
  <!-- Header Widgets Responsive-->
  <div class="fixed bottom-0 z-40 w-screen px-4 bg-white sm:hidden md:px-8">
  
      <div class=" my-2">
        <circle-links></circle-links>
      </div>
  </div>
          `;
    }
  }
  
  window.customElements.define("nes-navbar", Navbar);
  