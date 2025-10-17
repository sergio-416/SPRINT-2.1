'use strict';

console.log('Exercise 2');

let age = Math.floor(Math.random() * 40);
function canDrive(age) {
	return age >= 18 ? 'You can drive' : "You can't drive";
}
console.log(canDrive(age));

let num3 = Math.floor(Math.random() * 100);
let num4 = Math.floor(Math.random() * 100);
console.log(num3 > num4 ? 'num3 is greater' : 'num4 is greater');

let number = Math.floor(Math.random() * 21) - 10;
console.log(
	`The number is ${number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero'}`
);

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
