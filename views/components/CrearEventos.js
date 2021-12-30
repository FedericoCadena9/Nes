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

        
        <!-- Boton Crear Evento -->
        <div id="btnCrear" class="fixed right-0 z-20 hidden m-8 bottom-14 sm:bottom-0">
            <div class="">
                <div class="">
                    <a href="./crear-evento.html"
                        class="flex items-center justify-center w-16 h-16 transition duration-200 ease-in-out rounded-full cursor-pointer md:w-24 md:h-24 hover:bg-primary-600 focus:bg-primary-600 btnCrear 2xl:h-28 2xl:w-28 xl:h-20 xl:w-20 bg-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    
    `;

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
    }
}
window.customElements.define("crear-eventos", CrearEventos);
