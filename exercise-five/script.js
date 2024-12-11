function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito al usario el color del semáforo y lo guardo en una variable
 * 2. Compruebo que el valor es un string 'red' o 'rojo' e imprimo la orden de parar.
 * 3. Compruebo que el valor es un string 'green' o 'verde' e imprimo la orden de seguir.
 * 4. Compruebo que el valor es un string 'amber' o 'ambar' e imprimo la orden de parar.
 * 5. Compruebo que el valor es un string 'flashing amber' o 'ambar intermitente' e imprimo la orden de seguir con precaución.
 * 6. Si no es un valor válido, imprimir mensaje de error
 * 7. Repetir ejercicio
 */

const trafficLight = prompt("Introduzca el color del semáforo, por favor"); // paso 1

if (trafficLight.toLowerCase() === 'red' || trafficLight.toLowerCase() === 'rojo')  { // paso 2
    render(`  
      <div class="red light"></div>
      <p class="result__text">PARE!</p>
      <button id="repeat" type="submit">Repetir!</button>
  `); 
}else if (trafficLight === 'green' || trafficLight === 'verde')  { // paso 3
  render(`  
    <div class="green light"></div>
    <p class="result__text">GO GO GO!</p>
    <button id="repeat" type="submit">Repetir!</button>
`);  
}else if (trafficLight === 'amber' || trafficLight === 'ambar')  { // paso 4
  render(`  
    <div class="amber light"></div>
    <p class="result__text">STOP!</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
}else if (trafficLight === 'flashing amber' || trafficLight === 'ambar intermitente')  { // paso 5
  render(`  
    <div class="flashing-amber light"></div>
    <p class="result__text">GO pero con cuidado...</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
} else {
  // no es un valor válido: paso 6
  render(`
    <p class="result__text">Eso no era una luz de semáforo!</p>
    <button id="repeat" type="submit">Repetir!</button>
  `);
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 7

