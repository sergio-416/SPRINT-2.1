'use strict';

//* Exercici 1.5: Array transformations

//* Exercici 1
//* Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const numeros1 = [1, 2, 3, 4];
const cuadrados = numeros1.map(num => num * num);

//* Exercici 2
//* Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const numeros2 = [1, 2, 3, 4];
const pares = numeros2.filter(num => num % 2 === 0);

//* Exercici 3
//* Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const numeros3 = [1, 10, 8, 11];
const mayorQueDiez = numeros3.find(num => num > 10);

//* Exercici 4
//* Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const numeros4 = [13, 7, 8, 21];
const sumaTotal = numeros4.reduce((acumulador, num) => acumulador + num, 0);

//* Exercici 5
//* Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
//*- Filtra els nombres majors o iguals a 10.
//*- Multiplica cada nombre filtrat per 2.
//*- Calcula la suma dels nombres filtrats i multiplicats per 2.
//*- La funció ha de retornar el resultat de la suma.

const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultado = array
	.filter(num => num >= 10)
	.map(num => num * 2)
	.reduce((acumulador, num) => acumulador + num, 0);

//* Exercici 6
//* Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const numeros6 = [11, 12, 13, 14];
const todosMayoresQueDiez = numeros6.every(num => num > 10);
const algunosMayoresQueDiez = numeros6.some(num => num > 10);
