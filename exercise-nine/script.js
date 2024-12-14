function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito un número al usuario
 * 2. Hago un loop que recorra desde 1 al número solicitado
 * 3. Por cada bucle, comprobar si el número es múltiplo de 3 o de 5
 * 4. Imprimir el recorrido
 * 5. Repetir ejercicio
 */

const yourNumber = parseFloat(prompt("Introduzca un numerito, por favor", "0")); // paso 1

for (i = 1; i <= yourNumber; i++) { // paso 2
  if (i % 5 === 0 && i % 3 === 0) { // paso 3
    render(`
      <span class="result__text red">FizzBuzz</span> 
  `); 
  } else if (i % 5 === 0) { // paso 3
    render(`
      <span class="result__text">Buzz</span> 
    `);
  } else if (i % 3 === 0) { // paso 3
    render(`
      <span class="result__text">Fizz</span> 
    `);
  } // paso 4
}



document.getElementById("repeat").onclick = function() {location.reload()}; // paso 5

