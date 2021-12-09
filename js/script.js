//Botones
const btnMenuOpen = document.querySelector("#btnMenuOpen"); //Boton Abrir menu responsive
const btnMenuClose = document.querySelector("#btnMenuClose"); //Boton Cerrar menu responive

//Funcion Abrir
const menu = document.querySelector('.menu');
btnMenuOpen.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

//Funcion Cerrar
btnMenuClose.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

// Funcion para repetir card de Eventos (Unicamente para rellenar el sitio)
let body = document.querySelector('.body');    
let x = "";
for (let i = 0; i < 12; i++) {
    // Componente de Card de Evento
    x = x + `
    <div class="p-6 m-6 bg-white rounded-lg shadow-md ">
                <img src="https://source.unsplash.com/300x300/?random" alt="" class="object-cover object-center w-full rounded-lg h-72">
                <div class="mt-6 mb-2">
                    <span class="block text-2xl font-bold text-secondary-500">Encuentro relajante</span>
                </div>
                <div class="grid grid-cols-2 space-y-3">
                    <div class="col-span-2">
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="px-3 text-gray-500">Parque Central, España</span>
                        </p>
                    </div>
                    <div class="col-span-2">
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="px-3 text-gray-500">15/10/2021</span>
                            </p>
                        </div>
                        <div class="inline-block">
                            <p class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="inline-block px-3 text-gray-500">14:00 p.m</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="px-3 text-gray-500">30</span>
                        </p>
                    </div>
                </div>
            </div>
    `
    
}

body.innerHTML = x;
