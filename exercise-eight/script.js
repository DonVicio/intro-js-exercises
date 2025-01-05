function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito un número al usuario
 * 2. Hago un loop que recorra desde 0 al número solicitado
 * 3. Por cada bucle, comprobar si el número es par o impar
 * 4. Imprimir el recorrido
 * 5. Repetir ejercicio
 */

const yourNumber = parseFloat(prompt("Introduzca un numerito, por favor", "0")); // paso 1

for (let i = 0; i <= yourNumber; i++) { // paso 2
  if (i % 2 === 0)  { // paso 3
    render(`  
      <p class="result__text">${i} es par</p> 
  `); 
  } else { 
    render(`
      <p class="result__text">${i} es impar</p>
    `);
  } // paso 4
}



document.getElementById("repeat").onclick = function() {location.reload()}; // paso 5

