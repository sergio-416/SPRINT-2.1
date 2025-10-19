'use strict';

console.log('Exercise 2');

function canDrive() {
	let age = Math.floor(Math.random() * 40);
	return age >= 18 ? 'You can drive' : "You can't drive";
}
console.log(canDrive());

function compareNumbers() {
	let num1 = Math.floor(Math.random() * 100);
	let num2 = Math.floor(Math.random() * 100);
	return num1 > num2 ? `${num1} is greater` : `${num2} is greater`;
}
console.log(compareNumbers());

function checkNumber() {
	let number = Math.floor(Math.random() * 21) - 10;
	return `The number is ${
		number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero'
	}`;
}
console.log(checkNumber());

let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
function findMax(a, b, c) {
	return a > b ? (a > c ? a : c) : b > c ? b : c;
}
console.log(`The maximum value is: ${findMax(a, b, c)}`);

function evenOrOdd(numbers) {
	let results = [];
	for (let i = 0; i < numbers.length; i++) {
		results.push(numbers[i] % 2 === 0 ? 'even' : 'odd');
	}
	return results;
}
console.log(`The even/odd results are: ${evenOrOdd([a, b, c]).join(', ')}`);
