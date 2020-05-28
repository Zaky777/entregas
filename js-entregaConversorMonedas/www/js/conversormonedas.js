"use strict";
const url = "https://api.exchangerate-api.com/v4/latest/EUR";
const fetchPromise = fetch(url);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    const valorDelEuro = data.rates.EUR;
    console.log(`Valor del euro es ${valorDelEuro}`);
    const valorDelYen = data.rates.JPY;
    console.log(`Valor actual del Yen es ${valorDelYen} euros `);
    const valorDelDolar = data.rates.USD;
    console.log(`Valor actual del dólar es ${valorDelDolar} euros`);

    let valorIntroducidoEnEuros = prompt(
      "Introduce la cifra en Euros que quieres convertir"
    );
    let convertidoADolares = valorIntroducidoEnEuros * valorDelDolar;
    let convertidoAYenes = valorDelDolar * valorDelYen;
    alert(
      `${valorIntroducidoEnEuros} euros son ${convertidoADolares} dólares y ${convertidoAYenes} yenes`
    );
  });
