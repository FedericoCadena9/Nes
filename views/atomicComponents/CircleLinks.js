class CircleLinks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    
    // Inicio de Botones Circulares
        const paths = [
            {
                name: 'Likes',
                path: "M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z",
            },
            {
                name: 'Favoritos',
                path: "M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z",
            }
        ];
    
        const CircleLink = paths
            .map(
            (path) =>
                `
                <a href="#">
                    <span class="circle-link">
                        <svg class="w-5 h-5 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24">
                            <path
                                d="${path.path}">
                            </path>
                        </svg>
                    </span>
                    <p class="flex items-center justify-center font-medium text-gray-600 text-xtin sm:hidden">${path.name}</p>
                </a>
                `
            )
            .join("\n");
    // Fin de Botones Circulares

    // Inicio de Notificaciones
    const notification = [
        {
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            name: 'Sarah Maqueda',
            action: 'le gusta tu comentario de',
            who: 'Encuentro relajante',
            time: '2 horas'
        },
        {
            img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            name: 'Henry Simbaña Cruz',
            action: 'te ha enviado una solicitud de amistad, !Mira su perfil!',
            who: '',
            time: '45 min'
        },
        {
            img: 'https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            name: 'Maria Perez',
            action: 'comentó en',
            who: 'Deportes',
            time: '1 hora'
        },
        {
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            name: 'Abigail Contreras',
            action: 'comentó en',
            who: 'Encuentro relajante',
            time: '2 horas'
        },
        {
            img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80',
            name: 'Sarah Maqueda',
            action: 'le gusta tu comentario de',
            who: 'Ir al teatro',
            time: '5 horas'
        }

    ]

    const Notifications = notification
            .map(
            (not) =>
                `
                <a href="#"
                    class="flex flex-shrink-0 w-full p-3 py-5 border-b hover:bg-gray-100 active:bg-blue-50">
                    <div tabindex="0" aria-label="group icon" role="img"
                        class="flex items-center justify-center flex-shrink-0 w-8 h-8 border border-gray-200 rounded-full focus:outline-none">
                        <img class="object-cover w-8 h-8 rounded-full"
                            src=${not.img}
                            alt="Profile image Notification">
            
                    </div>
                    <div class="w-full pl-3">
                        <div class="flex items-center justify-between w-full">
                            <p class="text-sm text-gray-600">
                                <span class="font-bold">${not.name}&nbsp</span>${not.action} <span class="font-bold ">${not.who}</span>
                            </p>
                        </div>
                        <p tabindex="0"
                            class="pt-1 text-xs leading-3 text-gray-500 focus:outline-none">Hace ${not.time}</p>
                    </div>
                </a>
                `
            )
            .join("\n");
    // Fin de Notificaciones

    this.innerHTML = `

        <style>
            /* Animación Nes Pro */
            .jello-horizontal:hover {
                -webkit-animation: jello-horizontal 0.9s both;
                animation: jello-horizontal 0.9s both;
            }
            @-webkit-keyframes jello-horizontal {
            0% {
                -webkit-transform: scale3d(1, 1, 1);
                        transform: scale3d(1, 1, 1);
            }
            30% {
                -webkit-transform: scale3d(1.25, 0.75, 1);
                        transform: scale3d(1.25, 0.75, 1);
            }
            40% {
                -webkit-transform: scale3d(0.75, 1.25, 1);
                        transform: scale3d(0.75, 1.25, 1);
            }
            50% {
                -webkit-transform: scale3d(1.15, 0.85, 1);
                        transform: scale3d(1.15, 0.85, 1);
            }
            65% {
                -webkit-transform: scale3d(0.95, 1.05, 1);
                        transform: scale3d(0.95, 1.05, 1);
            }
            75% {
                -webkit-transform: scale3d(1.05, 0.95, 1);
                        transform: scale3d(1.05, 0.95, 1);
            }
            100% {
                -webkit-transform: scale3d(1, 1, 1);
                        transform: scale3d(1, 1, 1);
            }
            }
            @keyframes jello-horizontal {
            0% {
                -webkit-transform: scale3d(1, 1, 1);
                        transform: scale3d(1, 1, 1);
            }
            30% {
                -webkit-transform: scale3d(1.25, 0.75, 1);
                        transform: scale3d(1.25, 0.75, 1);
            }
            40% {
                -webkit-transform: scale3d(0.75, 1.25, 1);
                        transform: scale3d(0.75, 1.25, 1);
            }
            50% {
                -webkit-transform: scale3d(1.15, 0.85, 1);
                        transform: scale3d(1.15, 0.85, 1);
            }
            65% {
                -webkit-transform: scale3d(0.95, 1.05, 1);
                        transform: scale3d(0.95, 1.05, 1);
            }
            75% {
                -webkit-transform: scale3d(1.05, 0.95, 1);
                        transform: scale3d(1.05, 0.95, 1);
            }
            100% {
                -webkit-transform: scale3d(1, 1, 1);
                        transform: scale3d(1, 1, 1);
            }
            }

        </style>
        <div class="flex items-center justify-between">
            ${CircleLink}

            <!-- Notificaciones -->
            <div class="flex order-last md:order-none md:relative md:inline-block"  x-data="{ openNot: false }" x-cloak>
                <div>
                    <button @click="openNot = !openNot" class="mx-auto">
                        <span class="circle-link">
                            <svg class="w-5 h-5 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path
                                    d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z">
                                </path>
                            </svg>
                        </span>
                        <p class="flex items-center justify-center font-medium text-gray-600 text-xtin sm:hidden">Notificaciones</p>
                    </button>
                </div>
        
                <div x-show.transition="openNot" @click.away="openNot = false"
                    class="absolute right-0 z-50 mt-2 overflow-hidden p-4  w-80 bottom-16 md:-bottom-31rem h-auto"
                    x-transition:enter="duration-200 ease-out" x-transition:enter-start="opacity-0 scale-95"
                    x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in"
                    x-transition:leave-start="opacity-100 scale-100"
                    x-transition:leave-end="opacity-0 scale-95">
        
        
                    <div class="bg-white rounded-md shadow-lg">
                        <p class="px-3 py-2 text-lg font-semibold text-gray-600">Notificaciones</p>
        
                        <div class="overflow-y-auto h-96">
                            ${Notifications}
                        </div>
                        <a href="#"
                            class="block rounded-b-lg py-2 text-sm font-semibold text-center text-white bg-secondary-500 hover:bg-gray-800">Ver
                            todas las notificaciones
                        </a>
                    </div>
                    
        
                </div>
            </div>

            <!-- Nes PRO -->
            <a href="#" class="md:items-center md:flex">
                <span class="circle-link jello-horizontal hover:text-primary-500 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current " width="12.371"
                        height="24.743" viewBox="0 0 12.371 24.743">
                        <path
                            d="M80.9,592.6H93.271l-4.949,9.9h4.949l-8.66,14.846V606.208H80.9Z"
                            transform="translate(-80.9 -592.6)" />
                    </svg>
                </span>
                <p class="text-xs font-medium leading-3 text-gray-600 hidden md:inline">Hazte <span
                    class="block text-xs font-bold uppercase text-primary-500">Nes+ Pro</span>
                </p>
                <p class="flex justify-center font-medium text-xtin text-primary-500 sm:hidden">PRO</p>
            </a>
        </div>
        `;
    }
}

window.customElements.define("circle-links", CircleLinks);
