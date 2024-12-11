function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito al usario una nota
 * 2. Compruebo si el valor es menor a 5 e imprimo SUSPENSO.
 * 3. Compruebo si el valor es mayor/igual a 5 y menor a 7 e imprimo APROBADO.
 * 4. Compruebo si el valor es mayor/igual a 7 y menor a 9 e imprimo NOTABLE.
 * 5. Compruebo si el valor es mayor/igual a 9 y menor a 10 e imprimo SOBRESALIENTE.
 * 6. Compruebo si el valor es igual a 10 e imprimo MATRÍCULA DE HONOR.
 * 7. Si no es un valor válido, imprimir mensaje de error.
 * 8. Repetir ejercicio
 */

const calification = parseFloat(prompt("Introduzca su nota!", "0")); // paso 1

if (!isNaN(calification) && calification < 5)  { // paso 2
    render(`  
      <p class="result__text">Su nota es: <span class="number">${calification}%</span></p>
      <p class="result__text">SUSPENSO!</p>
      <button id="repeat" type="submit">Repetir!</button>
  `); 
}else if (!isNaN(calification) && calification >= 5 && calification < 7)  { // paso 3
  render(`  
    <p class="result__text">Su nota es: <span class="number">${calification}</span></p>
    <p class="result__text">APROBADO!</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
} else if (!isNaN(calification) && calification >= 7 && calification < 9)  { // paso 4
  render(`  
    <p class="result__text">Su nota es: <span class="number">${calification}</span></p>
    <p class="result__text">NOTABLE!</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
}else if (!isNaN(calification) && calification >= 9 && calification < 10)  { // paso 5
  render(`  
    <p class="result__text">Su nota es: <span class="number">${calification}</span></p>
    <p class="result__text">SOBRESALIENTE!</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
}else if (!isNaN(calification) && calification === 10)  { // paso 511
  render(`  
    <p class="result__text">Su nota es: <span class="number">${calification}</span></p>
    <p class="result__text">MATRÍCULA DE HONOR!</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
}else if (!isNaN(calification) && calification > 10)  { // paso 5
  render(`  
    <p class="result__text">No se puede tener más de un 10, tramposo!</p>
    <button id="repeat" type="submit">Repetir!</button>
`); 
} else {
  // no es un valor válido: paso 6
  render(`
    <p class="result__text">Por favor, introduce un valor entre 0 y 10</p>
    <button id="repeat" type="submit">Repetir!</button>
  `);
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 7

