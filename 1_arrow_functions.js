'use strict';

console.log('Exercise 1');

const sum1 = () => {
	let num1 = Math.floor(Math.random() * 10);
	let num2 = Math.floor(Math.random() * 10);
	return num1 + num2;
};
console.log(`The sum is: ${sum1()}`);

const randomNumber = () => {
	return Math.floor(Math.random() * 100);
};
console.log(`Random number: ${randomNumber()}`);

class Person {
	constructor(name) {
		this.name = name;
	}
	greet = () => {
		console.log(`Hello, ${this.name}`);
	};
}
const person = new Person('Alice');
person.greet();

const printNumbers = () => {
	const numbers = [1, 2, 3, 4, 5];
	const results = [];
	for (let i = 0; i < numbers.length; i++) {
		results.push(numbers[i]);
	}
	return results;
};
console.log(printNumbers());

const printDelayedMessage = () =>
	setTimeout(() => console.log('Three seconds have passed!'), 3000);
printDelayedMessage();
