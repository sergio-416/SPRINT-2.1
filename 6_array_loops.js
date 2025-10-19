'use strict';

console.log('Exercise 6');

function printForEach(arr) {
	arr.forEach(name => console.log(name));
}
printForEach(['Eva', 'Julia', 'Michael']);

function printForOf1(arr) {
	for (const name of arr) {
		console.log(name);
	}
}
printForOf1(['Adam', 'Frances', 'Clara']);

function printFilter(arr) {
	return arr.filter(num => num % 2 === 0);
}
console.log(printFilter([1, 2, 3, 4, 5, 6]));

function printForIn(obj) {
	for (const key in obj) {
		console.log(`${key}: ${obj[key]}`);
	}
}
printForIn({ name: 'Olivia', age: 25, city: 'Barcelona' });

function printForOf2(arr) {
	for (const num of arr) {
		if (num === 5) {
			break;
		}
		console.log(num);
	}
}
printForOf2([1, 2, 3, 4, 5, 6]);

function printForOf3(arr) {
	for (const [index, name] of arr.entries()) {
		console.log(`Index: ${index}, Name: ${name}`);
	}
}
printForOf3(['Angelo', 'Chris', 'Bill']);
