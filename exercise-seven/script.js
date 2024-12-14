function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito al usario la URL
 * 2. Compruebo si el string contiene github.com
 * 3. Imprimir si es o no es subdominio github
 * 4. Repetir ejercicio
 */

const yourURL = prompt("Introduzca su dominio!"); // paso 1

if (yourURL.toLowerCase().includes("github.com"))  { // paso 2 + 3
    render(`  
      <p class="result__text">Su dominio pertenece a GitHub!</p>
      <button id="repeat" type="submit">Repetir!</button>
  `); 
} else { 
  render(`
    <p class="result__text">Eso no parecía un dominio de GitHub...</p>
    <button id="repeat" type="submit">Repetir!</button>
  `);
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 7

