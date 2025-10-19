'use strict';

console.log('Exercise 5');

function squared(arr) {
	return arr.map(num => num * num);
}
console.log(squared([1, 2, 3, 4]));

function evens(arr) {
	return arr.filter(num => num % 2 === 0);
}
console.log(evens([1, 2, 3, 4]));

function biggerThanTen(arr) {
	return arr.find(num => num > 10);
}
console.log(biggerThanTen([1, 10, 8, 11]));

function sum3(arr) {
	return arr.reduce((accumulator, num) => accumulator + num, 0);
}
console.log(sum3([13, 7, 8, 21]));

function multipleMethods(arr) {
	return arr
		.filter(num => num >= 10)
		.map(num => num * 2)
		.reduce((accumulator, num) => accumulator + num, 0);
}
console.log(multipleMethods([1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]));

function checkBiggerThanTen(arr) {
	const allBigger = arr.every(num => num > 10);
	const someBigger = arr.some(num => num > 10);
	return { allBigger, someBigger };
}
console.log(checkBiggerThanTen([11, 12, 13, 14]));
