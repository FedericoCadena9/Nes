
// Funcion para pintar el progreso del Range Distancia
document.getElementById("distancia").oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #F92E4B 0%, #F92E4B " +
    value +
    "%, #f3f4f6 " +
    value +
    "%, #f3f4f6 100%)";

    let distancia = document.querySelector(".textDistancia");
    let inputDistancia = document.getElementById("distancia");
    distancia.textContent = `${inputDistancia.value * 1}`;
};

//Inicio de Slider Range Edad
let minEdad = document.getElementById("minEdad");
let maxEdad = document.getElementById("maxEdad");
let range = document.querySelector(".slider > .range");
let textMinEdad = document.querySelector(".textMinEdad");
let textMaxEdad = document.querySelector(".textMaxEdad");

function setMinValue() {
  let edad = minEdad,
    min = parseInt(edad.min),
    max = parseInt(edad.max);

  edad.value = Math.min(parseInt(edad.value), parseInt(maxEdad.value) - 5);
  textMinEdad.textContent = `${edad.value * 1}`;

  let percent = ((edad.value - min) / (max - min)) * 100;

  range.style.left = percent + "%";
}

setMinValue();

function setMaxValue() {
  let edad = maxEdad,
    min = parseInt(edad.min),
    max = parseInt(edad.max);

  edad.value = Math.max(parseInt(edad.value), parseInt(minEdad.value) + 5);
  textMaxEdad.textContent = ` -  ${edad.value * 1}`;

  let percent = ((edad.value - min) / (max - min)) * 100;

  range.style.right = 100 - percent + "%";
}

setMaxValue();

minEdad.addEventListener("input", setMinValue);
maxEdad.addEventListener("input", setMaxValue);
//Final de Slider Range Edad
