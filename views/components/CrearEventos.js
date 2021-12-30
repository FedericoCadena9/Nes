class CrearEventos extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

        <style>
            /* Boton Crear sombra */
            .btnCrear
            {
                -webkit-box-shadow: 0px 1px 17px -2px #E02944; 
                box-shadow: 0px 1px 17px -2px #E02944;
            }
            
            /* Boton Crear animación */
            .btnCrear:active {
                animation: press 0.2s 1 linear;
            }

            /* Animación Boton Crear */
            @keyframes press {
                0% {
                transform: scale(1);
                }
                50% {
                transform: scale(0.70);
                }
                to {
                transform: scale(1);
                }
            } 
            
            /* Animacion Boton crear Scroll */
            .scale-in-center {
                -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
            
            .scale-in-center-reverse {
                -webkit-animation: scale-in-center-reverse 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
                animation: scale-in-center-reverse 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            }
            
            
            /* Animacion Boton crear Scroll */
             @-webkit-keyframes scale-in-center {
              0% {
                -webkit-transform: scale(0);
                        transform: scale(0);
                opacity: 1;
              }
              100% {
                -webkit-transform: scale(1);
                        transform: scale(1);
                opacity: 1;
              }
            }
            @keyframes scale-in-center {
              0% {
                -webkit-transform: scale(0);
                        transform: scale(0);
                opacity: 1;
              }
              100% {
                -webkit-transform: scale(1);
                        transform: scale(1);
                opacity: 1;
              }
            }
            
            @-webkit-keyframes scale-in-center-reverse {
              0% {
                -webkit-transform: scale(0);
                        transform: scale(0);
                opacity: 1;
              }
              100% {
                -webkit-transform: scale(1);
                        transform: scale(1);
                opacity: 1;
              }
            }
            @keyframes scale-in-center-reverse {
              0% {
                -webkit-transform: scale(0);
                        transform: scale(0);
                opacity: 1;
              }
              100% {
                -webkit-transform: scale(1);
                        transform: scale(1);
                opacity: 1;
              }
            }
        </style>

        <div x-data="{ sidemenu: false }" x-cloak @keydown.window.escape="sidemenu = false"
        :class="{'overflow-y-hidden': sidemenu, '': !sidemenu}">
        <div @click="sidemenu = false"
            class="fixed inset-0 z-30 transition-opacity duration-300 ease-linear bg-gray-600 opacity-0 pointer-events-none"
            :class="{'opacity-75 pointer-events-auto': sidemenu, 'opacity-0 pointer-events-none': !sidemenu}"></div>

        <div class="fixed inset-y-0 left-0 z-30 flex flex-col w-full pt-20 duration-300 ease-in-out transform -translate-x-full bg-white md:w-3/4 xl:w-1/2"
            :class="{'translate-x-0': sidemenu, '-translate-x-full': !sidemenu}">

            <!-- Botón Atras -->
            <div>
                <button @click="sidemenu = !sidemenu"
                    class="flex items-center px-6 text-gray-500 transition duration-200 ease-in-out hover:text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    <span class="px-2">Atrás</span>
                </button>
            </div>

            <div class="px-6 py-3 ">
                <p class="text-4xl font-semibold text-secondary-500">Crear Evento</p>
                <p class="text-gray-500">En pocos pasos podrás crear tu evento y conocer un montón de nuevos amigos.</p>
            </div>

            <div class="flex-1 h-0 px-6 py-2 overflow-y-auto">
                <ul class="space-y-5">

                    <!-- Titulo -->
                    <li>
                        <div class="flex flex-col">
                            <p class="text-xl font-semibold text-gray-700">Titulo del Evento</p>
                            <input type="text" name="Titulo" placeholder="Titulo del evento" id="title"
                                class="px-4 py-2 my-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400" />
                        </div>
                    </li>

                    <li>
                        <!-- Tipo Evento -->
                        <div class="inline-block w-full">
                            <p class="block mb-1 text-xl font-semibold text-gray-700">Tipo de evento</p>
                            <div class="relative">
                                <div class="relative">
                                    <div class="w-full mb-3">
                                        <select  id="type"
                                            class="w-full bg-gray-100 px-4 py-2 my-2 font-medium text-gray-700  border border-gray-300  focus:outline-none  focus:ring-primary-400 border-transparent rounded-md appearance-none form-select focus:border-gray-500 focus:bg-white focus:ring-2"
                                            >
                                            <option disabled selected value> -- Selecciona una opción -- </option>
                                            <option value="1">Presencial</option>
                                            <option value="2">En linea</option>
                                            <option value="3">Sin especificar</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <!-- Clasificación Evento -->

                        <div class="inline-block w-full">
                            <p class="block mb-1 text-xl font-semibold text-gray-700">Clasificación del evento</p>
                            <div class="relative">
                                <div class="relative">
                                    <div class="w-full mb-3">
                                        <select id="clasification"
                                            class="w-full bg-gray-100 px-4 py-2 my-2 font-medium text-gray-700  border border-gray-300  focus:outline-none  focus:ring-primary-400 border-transparent rounded-md appearance-none form-select focus:border-gray-500 focus:bg-white focus:ring-2"
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
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Input para subir foto de portada -->
                    <li>
                        <p class="text-xl font-semibold text-gray-700">Subir nueva foto de portada</p>

                        <div class="my-5 grid place-items-center">
                            <div class="relative md:w-96 w-full h-96 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center">
                                <div id="preview-crop-image" class="h-auto w-full absolute"></div>
                                <div class="absolute" id="divContainer">
                                    <div class="flex flex-col items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span class="block text-gray-400 font-normal">Adjunta tu imagen aquí</span> <span class="block text-gray-400 font-normal">o</span> <span class="block text-blue-500 font-normal cursor-pointer">Busca en tus archivos</span>
                                    </div>
                                </div>
                                <input type="file" id="image" accept="image/png, image/jpeg" class="h-full w-full opacity-0 hover:cursor-pointer" name="">
                            </div>

                            <div class="flex items-center justify-center">
                                <div class="mt-3 text-center pb-3 hidden" id="btnCrop"> 
                                    <button id="btnUpload" class="btn bg-secondary-500 hover:bg-secondary-400 text-white">Recortar imagen</button> 
                                </div>
                                <div class="mt-3 text-center pb-3 hidden" id="btnBorrar"> 
                                    <button id="btnDelete" class="btn text-white bg-primary-500 hover:bg-primary-600">Borrar</button> 
                                </div>
                            </div>

                            <div class="hidden" id="divHid">
                                <div class="relative flex justify-center items-center">
                                    <div class="w-full">
                                        <div class="p-3">
                                            <div >
                                                <div id="uploadImg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Imagenes carrusel -->
                    <li>
                        <p class="text-lg font-semibold text-gray-700">O elige una de las que tenemos para ti</p>
                        <div x-data="{swiper: null}" x-init="swiper = new Swiper($refs.container, {
                                loop: true,
                                slidesPerView: 2,
                                spaceBetween: 0,
                                
                                })" class="relative flex flex-row ">
                            <div class="absolute inset-y-0 left-0 z-10 flex items-center">
                                <button @click="swiper.slidePrev()"
                                    class="flex items-center justify-center w-10 h-10 -ml-2 bg-white rounded-full shadow lg:-ml-4 focus:outline-none">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 chevron-left">
                                        <path fill-rule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>

                            <div class="swiper-container" x-ref="container">
                                <div class="swiper-wrapper">

                                    <div class="p-4 cursor-pointer swiper-slide">
                                        <div class="flex flex-col overflow-hidden rounded shadow">
                                            <div class="flex-shrink-0">
                                                <img class="object-cover w-full h-48"
                                                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-4 cursor-pointer swiper-slide">
                                        <div class="flex flex-col overflow-hidden rounded shadow">
                                            <div class="flex-shrink-0">
                                                <img class="object-cover w-full h-48"
                                                    src="https://images.unsplash.com/photo-1598951092651-653c21f5d0b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-4 cursor-pointer swiper-slide">
                                        <div class="flex flex-col overflow-hidden rounded shadow">
                                            <div class="flex-shrink-0">
                                                <img class="object-cover w-full h-48"
                                                    src="https://images.unsplash.com/photo-1598946423291-ce029c687a42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="absolute inset-y-0 right-0 z-10 flex items-center">
                                <button @click="swiper.slideNext()"
                                    class="flex items-center justify-center w-10 h-10 -mr-2 bg-white rounded-full shadow lg:-mr-4 focus:outline-none">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 chevron-right">
                                        <path fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>
                    <!-- Fecha -->
                    <div class="flex flex-col">
                            <p class="text-xl font-semibold text-gray-700">Fecha</p>
                            <input placeholder="03/03/21 - 06/06/21" type="text" id="demo-2" class="px-4 py-2 my-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400" />
                        </div>
                    </li>

                    <li>
                        <div class="items-center justify-between md:flex">

                        <!-- Hora -->
                        <div class="md:inline-block md:w-1/2">
                            <div class="py-2">
                                <div class="inline-block w-full ">
                                    <label for="datepicker"
                                        class="block mb-1 text-xl font-semibold text-gray-700">Hora</label>
                                    <div class="relative w-full">
                                        <input
                                            class="min-w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                            id="time" name="datetime[time]" type="time" value="12:00:00"
                                            data-value="2021-03-14T12:00Z"
                                            x-data="{date: new Date($el.dataset.value)}"
                                            :value="date.toLocaleTimeString('sv-en')">
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div class="md:inline-block md:w-1/2 md:ml-3">
                                <div class="py-2">
                                    <div class="inline-block w-full ">
                                        <label for="datepicker"
                                            class="block mb-1 text-xl font-semibold text-gray-700">&nbsp;</label>
                                        <div class="relative w-full">
                                            <input
                                                class="min-w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                                id="time" name="datetime[time]" type="time" value="12:00:00"
                                                data-value="2021-03-14T12:00Z"
                                                x-data="{date: new Date($el.dataset.value)}"
                                                :value="date.toLocaleTimeString('sv-en')">
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </li>

                    <!-- Lugar del evento -->
                    <li>
                        <div class="flex flex-col">
                            <p class="text-xl font-semibold text-gray-700">Lugar del evento </p>
                            <input type="text" name="Lugar" placeholder="Lugar del evento"
                                class="px-4 py-2 my-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400" />
                        </div>
                    </li>

                    <li>
                        <!-- Usuarios -->
                        <div>
                            <div class="">
                                <div class="inline-block w-full ">
                                    <label class="block mb-1 text-xl font-semibold text-gray-700">Usuarios</label>
                                    <div class="relative w-full">
                                        <input
                                            class="w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                            name="Usuarios" type="number" placeholder="30">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <!-- Descripcion del evento -->
                    <li>
                        <div class="flex flex-col">
                            <p class="text-xl font-semibold text-gray-700">Describe tu Evento</p>
                            <textarea name="Descripcion" type="text"
                                placeholder="Añade información importante de tu evento..."
                                class="px-4 py-2 my-2 font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                cols="30" rows="5"></textarea>

                        </div>
                    </li>
                </ul>

                <!-- Botones -->
                <div class="space-y-4 py-7 md:flex md:space-x-4 md:space-y-0">
                    <button type="button"
                        class="w-full px-8 py-3 font-semibold transition duration-200 ease-in-out border rounded border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white">Guardar</button>
                    <button type="button"
                        class="w-full px-8 py-3 font-semibold text-gray-100 transition duration-200 ease-in-out rounded bg-primary-500 hover:bg-primary-600">Crear
                        Evento</button>
                </div>
            </div>


        </div>


        <!-- Boton Crear Evento -->
        <div id="btnCrear" class="fixed right-0 z-20 hidden m-8 bottom-14 sm:bottom-0">
            <div class="">
                <div class="">
                    <button @click="sidemenu = !sidemenu"
                        class="flex items-center justify-center w-16 h-16 transition duration-200 ease-in-out rounded-full cursor-pointer md:w-24 md:h-24 hover:bg-primary-600 focus:bg-primary-600 btnCrear 2xl:h-28 2xl:w-28 xl:h-20 xl:w-20 bg-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    
    `;
    }
}
window.customElements.define("crear-eventos", CrearEventos);
