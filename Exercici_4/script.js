'use strict';

//* Exercici 1.4: Rest & Spread operators

//* Exercici 1
//* Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];

//* Exercici 2
//* Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...nums) {
	return nums.reduce((acc, curr) => acc + curr, 0);
}

//* Exercici 3
//* Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = { a: 1, b: 2, c: 3 };
const objecte2 = { ...objecte1, b: 20 };

//* Exercici 4
//* Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const arr = [10, 20, 30, 40, 50];
const [primero, segundo, ...resto] = arr;

//* Exercici 5
//* Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

function mostrarTres(a, b, c) {
	console.log(a, b, c);
}
const array = [1, 2, 3];
mostrarTres(...array);

//* Exercici 6
//* Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, w: 4 };
const objFusionados = { ...obj1, ...obj2 };
