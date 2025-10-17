'use strict';

console.log('Exercise 6');

const arr14 = ['Eva', 'Julia', 'Michael'];
arr14.forEach(name => console.log(name));

const arr15 = ['Adam', 'Frances', 'Clara'];
for (const name of arr15) {
	console.log(name);
}

const arr16 = [1, 2, 3, 4, 5, 6];
const evenNumbers = arr16.filter(num => num % 2 === 0);

const obj6 = { name: 'Olivia', age: 25, city: 'Barcelona' };
for (const key in obj6) {
	console.log(`${key}: ${obj6[key]}`);
}

const arr17 = [1, 2, 3, 4, 5, 6];
for (const num of arr17) {
	if (num === 5) {
		break;
	}
	console.log(num);
}

const arr18 = ['Angelo', 'Chris', 'Bill'];
for (const [index, name] of arr18.entries()) {
	console.log(`Index: ${index}, Name: ${name}`);
}
