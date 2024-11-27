
/**
 * 1. Solicito un número (peso) al usario y lo guardo en una variable
 * 2. Solicito un número (altura) al usario y lo guardo en otra variable
 * 3. Si ambos valores son números: Calculo el IMC y lo guardo en otra variable.
 * 4. Compruebo el rango del IMC e imprimo el resultado:
 *    A Por debajo de 18,5: Por debajo de lo saludable
 *    B Entre 18.5 y 24.9: Saludable
 *    C Entre 25 y 29.9: Sobrepeso
 *    D Entre 30 y 34.9: Obesidad I
 *    E Entre 35 y 39.9: Obesidad II
 *    F Por encima de 40: Obesidad III
 *  6. Repetir!
 */

function renderIMC(html) {
  const imcBox = document.getElementById("imc");
  imcBox.innerHTML += html;
}

const weight = prompt("Introduzca su peso en kilogramos", "0"); // paso 1
const height = prompt("Introduzca su altura en centímetros", "0"); // paso 2
const imcCalc = (weight) / ((height / 100) * (height / 100)); // paso 3

if (imcCalc < 18.5)  { // paso 4
  renderIMC(`
    <p class="result__text">Tu IMC: <span class="number">${imcCalc}</span></p>
    <p class="result__text">Estás por debajo de lo saludable.</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
} else if (imcCalc >= 18.5 && imcCalc < 25) {
renderIMC(`
    <p class="result__text">Tu IMC: <span class="number">${imcCalc}</span></p>
    <p class="result__text">Estás sano.</p>
    <button id="repeat" type="submit">Repetir!</button>
`);
} else if (imcCalc >= 25 && imcCalc < 30) {
  renderIMC(`
      <p class="result__text">Tu IMC: <span class="number">${imcCalc}</span> </p>
      <p class="result__text"> Tienes sobrepeso.</p>
      <button id="repeat" type="submit">Repetir!</button>
  `);
} else if (imcCalc >= 30 && imcCalc < 35) {
  renderIMC(`
      <p class="result__text">Tu IMC: <span class="number">${imcCalc}</span></p>
      <p class="result__text">Tienes Obesidad I.</p>
      <button id="repeat" type="submit">Repetir!</button>
  `);
} else if (imcCalc >= 35 && imcCalc < 40) {
  renderIMC(`
      <p class="result__text">Tu IMC: <span class="number">${imcCalc}</span></p>
      <p class="result__text">Tienes Obesidad II.</p>
      <button id="repeat" type="submit">Repetir!</button>
  `);
} else {
  renderIMC(`
    <p class="result__text">Tu IMC: <span class="number">${imcCalc}</span></p>
    <p class="result__text">Tienes Obesidad III</p>
    <button id="repeat" type="submit">Repetir!</button>
  `);
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 6



