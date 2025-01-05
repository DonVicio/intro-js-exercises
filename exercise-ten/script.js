function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito un número al usuario
 * 2. Compruebo que es un número
 * 3. Si no es un número, aviso al usuario
 * 4. Si es un número, imprimo el inverso
 * 5. Repetir ejercicio
 */

const yourNumber = parseFloat(prompt("Introduzca un numerito, por favor", "0")); // paso 1

if (isNaN(yourNumber)) { // paso 2
  render(`
    <span class="result__text red">Eso no era número!</span> 
`); // paso 3
} else { 
  const reverseNumber = parseFloat(yourNumber.toString().split('').reverse().join('')) * Math.sign(yourNumber);
  render(`
    <span class="result__text">Tu número ${yourNumber} invertido es: </span><span class="result__text red">${reverseNumber}</span> 
  `); // paso 4
} 

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 5

