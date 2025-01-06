function render(html) {
  const resultBox = document.getElementById("EXERCISE_RESULT");
  resultBox.innerHTML += html;
}

/**
 * 1. Solicito un número de DNI al usuario
 * 2. Compruebo que el formato es correcto a través de una expresión regular
 * 3. Si es un formato válido, me quedo solo con el número.
 * 4. Calculo la letra asociada al número proporcionado.
 * 5. Recojo la letra proporcionada por el usuario.
 * 6. Compruebo si la letra proporcionada y la letra calculada coinciden.
 * 7. Si coinciden, informo al usuario.
 * 8. Si no coinciden, informo del error al usuario.
 * 9. Si el formato de DNI no es válido, imprimo un aviso.
 * 10. Repetir ejercicio
 */

const yourDNI = prompt("Introduzca un DNI válido, por favor", "0"); // paso 1
const DNInumber = yourDNI.toString().toUpperCase();

function validDNI(value) {
  const regEx = /^\d{8}[A-Za-z]$/;
  return regEx.test(value);
} // paso 2

const justNumbers = parseInt(yourDNI); // paso 3

function providedLetter(value) {
  let DNILetters = "TRWAGMYFPDXBNJZSQVHLCKET";
  let calculatedLetter = value % (DNILetters.length - 1);
  return DNILetters[calculatedLetter];
} 

const rightLetter = providedLetter(justNumbers); // paso 4

const justLetter = DNInumber[DNInumber.length - 1]; // paso 5

if (validDNI(yourDNI)) {
  render(`
    <p class="result__text">
        Has introducido: <span class="dni">${DNInumber}</span>
    </p>
  `);
  if(justLetter === rightLetter){ // paso 6
    render(`
      <p class="result__text">
          Parece que su número es correcto!
      </p>
    `);
  } // paso 7
  else{
    render(`
      <p class="result__text red">
          Parece que su letra está equivocada (a lo mejor con la ${rightLetter}...)
      </p>
    `);
  }  // paso 8
}
else {
  render(`
    <p class="result__text red">
        No has introducido un formato de DNI válido.
    </p>
  `);
} // paso 9

document.getElementById("repeat").onclick = function() {location.reload()}; // paso 10

