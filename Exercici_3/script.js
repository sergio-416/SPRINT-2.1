'use strict';

//* Exercici 1.3: Callbacks

//* Exercici 1
//* Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function processar(name, callback) {
	callback(name);
}

//* Exercici 2
//* Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

function calculadora(num1, num2, callback) {
	callback(num1, num2);
}

calculadora(5, 10, function (a, b) {
	console.log('La suma és:', a + b);
});

//* Exercici 3
//* Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

function esperarISaludar(name, callback) {
	setTimeout(function () {
		callback(name);
	}, 2000);
}

//* Exercici 4
//* Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

function processarElements(arr, callback) {
	arr.forEach(callback);
}

//* Exercici 5
//* Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

function processarCadena(str, callback) {
	const upperStr = str.toUpperCase();
	callback(upperStr);
}
