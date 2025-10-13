'use strict';

//* Exercici 1.7: Promises & Async/Await

//* Exercici 1
//* Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promesaHolaMon = new Promise(resolve => {
	setTimeout(() => {
		resolve('Hola, món');
	}, 2000);
});

//* Exercici 2
//* Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

promesaHolaMon.then(missatge => {
	console.log(missatge);
});

//* Exercici 3
//* Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const promesaInput = input => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (input === 'Hola') {
				resolve('Input correcte');
			} else {
				reject('Input incorrecte');
			}
		}, 2000);
	});
};

//* Exercici 4
//* Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

const funcioAsincrona = async () => {
	try {
		const missatge = await promesaHolaMon;
		console.log(missatge);
	} catch (error) {
		console.error(error);
	}
};

//* Exercici 5
//* Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

const funcioAsincronaAmbError = async input => {
	try {
		const resultat = await promesaInput(input);
		console.log(resultat);
	} catch (error) {
		console.error(error);
	}
};

//* Exercici 6
//* Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promesa1 = new Promise(resolve => {
	setTimeout(() => {
		resolve('Promesa 1 resolta després de 2 segons');
	}, 2000);
});

const promesa2 = new Promise(resolve => {
	setTimeout(() => {
		resolve('Promesa 2 resolta després de 3 segons');
	}, 3000);
});

Promise.all([promesa1, promesa2])
	.then(resultats => {
		console.log(resultats);
	})
	.catch(error => {
		console.error(error);
	});
