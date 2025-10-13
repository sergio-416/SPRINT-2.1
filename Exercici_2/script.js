'use strict';

//* Exercici 1.2: Operador ternari

//* Exercici 1
//* Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

function potConduir(edad) {
	return edad >= 18 ? 'Pots conduir' : 'No pots conduir';
}

//* Exercici 2
//* Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';

//* Exercici 3
//* Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

numero > 0 ? 'positivo' : numero < 0 ? 'negativo' : 'cero';

//* Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function trobarMaxim(a, b, c) {
	return a > b ? (a > c ? a : c) : b > c ? b : c;
}

//* Exercici 4
//* Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parOImpar(numeros) {
	let resultats = [];

	for (let i = 0; i < numeros.length; i++) {
		resultats.push(numeros[i] % 2 === 0 ? 'parell' : 'imparell');
	}

	return resultats;
}
