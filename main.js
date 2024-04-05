// ejercio1
// crearUsuario(callback)
// Crear una funcióm crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.

// const confirmarCreacion = () => alert('Usuario creado!') // callback

// crearUsuario(callback)

// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!

// const confirmarCreacion = (nombre) =>
//   alert(`Usario Creado! Bienvenido  ${nombre}`);

// const crearUsuario = (callback) => {
//   let nombre = prompt("Ingrese el nombre usuario");
//   callback(nombre);
// };

// crearUsuario(confirmarCreacion);

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio2
// validarUsuario(validador)
// Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La funci´ón validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// que no tenga espacios
// que tenga más de X caracteres
// que no tenga números
// que tenga mayúsculas
// validarUsuario(tieneMayusculas)

// Por favor, ingrese su nombre
// ada
// Usuario incorrecto, intentelo nuevamente

// const validarUsuario = (callback) => {
//   let nombre = prompt("Ingrese su nombre");
//   callback(nombre);
// };

// const validador = (string) => {
//   let validaciones = /^(?=\S+$)(?=.{6,})(?![\d]+$)(?=.*[A-Z])/;
//   if (validaciones.test(string)) {
//     alert("Usuario correcto");
//   } else {
//     alert("Usuario incorrecto intente nuevamente");
//     validarUsuario(validador);
//   }
// };
// validarUsuario(validador);

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio3
// map(array, callback)
// Crear una función map que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// obtenga el resultado
// lo pushee a un nuevo array
// devuelva el array final con el resultado de cada una de las llamadas al callback.
// Ejemplo:

// const numeros = [1, 2, 3]
// const duplicar = (x) => x * 2
// map(numeros, duplicar) // [2, 4, 6]

// const numeros = [1, 2, 3];

// const duplicar = (x) => x * 2;

// const map = (array, callback) => {
//   let resultado = [];
//   for (let i = 0; i < numeros.length; i++) {
//     resultado.push(callback(array[i]));
//   }
//   return resultado;
// };
// console.log(map(numeros, duplicar));

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio4
// filter(array, callback)
// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".
// Ejemplo:

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]

// const numeros = [10, 2, 3, 40, 33, 50];

// const multiploDe10 = (x) => x % 10 === 0;

// const filter = (array, callback) => {
// let nuevoArray = [];
// for (elemento of array) {
// if(callback(elemento)){
// nuevoArray.push(elemento);
// }
// }
// return nuevoArray;
// };
// console.log(filter(numeros, multiploDe10));

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejecicio5
// every(array, callback)
// Crear una función every que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si todas las llamadas al callback devolvieron true
// Ejemplo:

// const numeros = [10, 2, 3, 40, 33, 50];
// const multiploDe10 = (x) => x % 10 === 0;
// const esPositivo = (x) => x >= 0;

// const every = (array, callback) => {
//   for (elemento of array) {
//     if (!callback(elemento)) {
//       return false
//     }
//   }
//   return true;
// };

// console.log(every(numeros, multiploDe10)); //false
// console.log(every(numeros, esPositivo)); // true

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio6
// some(array, callback)
// Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si al menos una de las llamadas al callback devolvió true
// Ejemplo:

// const numeros = [10, 2, 3, 40, 33, 50];
// const multiploDe10 = (x) => x % 10 === 0;
// const esPositivo = (x) => x >= 0;

// const some = (array, callback) => {
//   for (elemento of array) {
//     if (callback(elemento)) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(some(numeros, multiploDe10)); // true
// console.log(some(numeros, esPositivo)); // true

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio7

// find(array, callback)
// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined

// const numeros = [8, 2, 3, 40, 33, 50];
// const multiploDe10 = (x) => x % 10 === 0;

// const find = (array, callback) => {
//   for (elemento of array) {
//     if (callback(elemento)) {
//       return true;
//     }
//   }
//   return undefined;
// };

// console.log(find(numeros, multiploDe10)); // 40

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio8
// findIndex(array, callback)
// Crear una función findIndex que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined
// const numeros = [8, 2, 3, 40, 33, 50];
// const multiploDe10 = (x) => x % 10 === 0;

// const findIndex = (array, callback) => {
//   for (let i=0;i<array.length;i++) {
//     if (callback(array[i])) {
//       return i;
//     }
//   }
//   return undefined;
// };

// console.log(findIndex(numeros, multiploDe10)); // 3

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio9
// dropWhile(array, callback)
// Crear una función dropWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos a partir del primer callback que devolvió false
// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

// const numeros = [40, 33, 50, 8, 2, 3, 20];
// const multiploDe10 = (x) => x % 10 === 0;

// const dropWhile = (array, callback) => {
//   let nuevoArray = [];
//   for (elemento of array) {
//     if (!callback(elemento)) {
//        nuevoArray.push(elemento);
//     }

//   }
//   return nuevoArray;
// };

// console.log(dropWhile(numeros, multiploDe10)); // [8, 2, 3, 20]

// ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤

// ejercicio10
// takeWhile(array, callback)
// Crear una función takeWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos hasta el primer callback que devolvió false
// (Inverso del dropWhile)

const numeros = [40, 50, 33, 8, 2, 3, 20];
const multiploDe10 = (x) => x % 10 === 0;

const takeWhile = (array, callback) => {
  let nuevoArray = [];
  for (elemento of array) {
    if (callback(elemento)) {
      nuevoArray.push(elemento);
    }
  }
  return nuevoArray;
};

console.log(takeWhile(numeros, multiploDe10)); // [40, 50]
