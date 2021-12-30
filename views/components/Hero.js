class Hero extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
  
      this.innerHTML = `
        <div class="hidden px-6 pt-20 pb-10 bg-white md:px-8 lg:block">
            <div class="relative w-full bg-center bg-cover rounded-lg h-72 2xl:h-96"
                style="background-image: url('./img/Playa\ Sirenas.png');">
                <div class="absolute inset-0 bg-gray-800 rounded-lg bg-opacity-60"></div>
                <div class="absolute m-10 text-white ">
                    <img src="./img/EventoIcon.svg" alt="">
                    <h1 class="text-5xl font-bold">Nuestros eventos</h1>
                    <h2 class="text-3xl font-light">otra manera de conocerse</h2>
                </div>
            </div>
        </div>
        `;
    }
  }
  window.customElements.define("nes-hero", Hero);
  