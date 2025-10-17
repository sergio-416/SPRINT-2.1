'use strict';

console.log('Exercise 1');

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
const sum1 = (a, b) => {
	return a + b;
};
console.log(`The sum is: ${sum1(num1, num2)}`);

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

const arr1 = [1, 2, 3, 4, 5];
const printNumbers = numbers => {
	for (let i = 0; i < numbers.length; i++) {
		console.log(`Number: ${numbers[i]}`);
	}
};
printNumbers(arr1);

const printDelayedMessage = () =>
	setTimeout(() => console.log('Three seconds have passed!'), 3000);
printDelayedMessage();
