function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito un porcentaje al usario y lo guardo en una variable
 * 2. Compruebo que el valor dado es numérico y menor que 100
 *    A Si es número y menor que 65, pinto el valor proporcionado por el usuario y 90km/h
 *    B Si es número y mayor o igual que 65, pinto el valor proporcionado por el usuario y 70km/h
 *    C Si no es número, o no es menor igual a 100, pido amablemente repetición
 * 3. Repetir ejercicio
 */

const pollution = parseFloat(prompt("Introduzca la contaminación en porcentaje", "0")); // paso 1

if (!isNaN(pollution) && pollution <=100 && pollution < 65)  { // paso 2
    // es número: paso 2A
    render(`  
      <p class="result__text">La contaminación de hoy es: <span class="number">${pollution}%</span></p>
      <p class="result__text">La velocidad máxima permitida es <span class="number">90km/h</span></p>
      <button id="repeat" type="submit">Repetir!</button>
  `); 
}else if (!isNaN(pollution) && pollution <= 100 && pollution >= 65) {
  // es número: paso 2B
  render(`  
    <p class="result__text">La contaminación de hoy es: <span class="number">${pollution}%</span></p>
    <p class="result__text">La velocidad máxima permitida es <span class="number">70km/h</span></p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
} else {
  // no es número: paso 2C
  render(`
    <p class="result__text">Eso no era un porcentaje... por favor repite.</p>
    <button id="repeat" type="submit">Repetir!</button>
  `);
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 4

