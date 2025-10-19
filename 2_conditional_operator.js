'use strict';

console.log('Exercise 2');

function canDrive() {
	let age = Math.floor(Math.random() * 40);
	const legalAge = 18;
	return age >= legalAge ? 'You can drive' : "You can't drive";
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

function findMax() {
	let a = Math.floor(Math.random() * 10);
	let b = Math.floor(Math.random() * 10);
	let c = Math.floor(Math.random() * 10);
	return a > b ? (a > c ? a : c) : b > c ? b : c;
}
console.log(`The maximum value is: ${findMax()}`);

function evenOrOdd(numbers) {
	const result = [];
	for (let i = 0; i < numbers.length; i++) {
		const isEven = numbers[i] % 2 === 0;
		result.push(isEven ? 'even' : 'odd');
	}
	return result;
}
console.log(`Numbers are: ${evenOrOdd([1, 2, 5, 8, 13, 21, 34]).join(', ')}`);
