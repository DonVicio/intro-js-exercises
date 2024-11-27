function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito un número al usario y lo guardo en una variable
 * 2. Opero con el número dado y lo guardo en otra variable
 * 3. Compruebo que el valor dado es numérico
 *    A Si es número, pinto el valor proporcionado por el usuario y el resultado operado
 *    B Si no es número, pido amablemente repetición
 * 4. Repetir ejercicio
 */

const firstValue = +prompt("Introduzca unos graditos Celsius, que yo se los convierto", "0"); // paso 1
const secondValue = (firstValue * 9 / 5) + 32; // paso 2

if (Number(firstValue) % 1 === 0)  { // paso 3
    // es número: paso 3A
    render(`
      <style>
          .result__text {
             color: #333;
             font-size: 24px;
          }
          .result__text span.celsius{
             color: red;
          }
          .result__text span.farenheit{
             color: red;
          }
      </style>
  
      <p class="result__text">
          Tus graditos Celsius: <span class="celsius">${firstValue}ºC</span> 
      </p>
      <p class="result__text">
          Han resultado ser: <span class="farenheit">${secondValue}ºF</span> grados Farenheit 
      </p>
      <button id="repeat" type="submit">Repetir!</button>
  `); 
} else {
  // no es número: paso 3B
  render(`
    <p class="result__text">Eso no eran graditos, por favor repite.</p>
    <button id="repeat" type="submit">Repetir!</button>
  `);
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 4

