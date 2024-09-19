// * CONCEPTOS BASICOS DE JAVASCRIPT

// * Variables
var name = "Juan";
let lastname = "Perez";

lastname = "Gomez";
// * Constantes
const PI = 3.1416;
const fullname = "Juan Perez";

//console.log(name, lastname, PI, fullname);

// * Tipos de datos

// Primitivas
let string = "Hola mundo";
let number = 100;
let boolean = false;
let nullValue = null;
//let undefinedValue= undefined;

//Metodos de los tipos de datos
//console.log(string.toUpperCase());
//console.log(number.toFixed(2));
//console.log(null);

// Tipado dinámico
let newVariable = "Hola";
newVariable = 100;
//console.log(newVariable);
newVariable = true;
//console.log(newVariable);

// Funciones
function suma(a, b) {
  return a + b;
}

const arrowSuma = (a, b) => {
  return a + b;
};

// Arrays

const array = [1, 2, 3, 4, 5];
//console.log(array[3]);

const object = {
  name: "Juan",
  age: 30,
  isStudent: false,
  grades: [8, 9, 10],
  observation: {
    message: "Good job",
    success: {
      status: true,
    },
  },
};

// Condicionales

if (number < 200) {
  console.log("Es menos a 200");
} else {
  console.log("Es mayor a 200");
}
//console.log(arrowSuma(5, 10));
