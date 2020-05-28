"use strict";

const selectorUno = document.getElementById("selector_uno");
const cantidadUno = document.getElementById("cantidad_uno");
const selectorDos = document.getElementById("selector_dos");
const cantidadDos = document.getElementById("cantidad_dos");
const elementoRate = document.getElementById("rate");
const botonInvertir = document.getElementById("botoninvertir");

function calcular() {
  const cantidad_uno = selectorUno.value;
  const cantidad_dos = selectorDos.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${cantidad_uno}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[cantidad_dos];

      elementoRate.innerText = `1 ${cantidad_uno} = ${rate} ${cantidad_dos}`;

      cantidadDos.value = (cantidadUno.value * rate).toFixed(3);
    });
}

selectorUno.addEventListener("change", calcular);
cantidadUno.addEventListener("input", calcular);
selectorDos.addEventListener("change", calcular);
cantidadDos.addEventListener("input", calcular);

botoninvertir.addEventListener("click", () => {
  const temp = selectorUno.value;
  selectorUno.value = selectorDos.value;
  selectorDos.value = temp;
  calcular();
});

calcular();
