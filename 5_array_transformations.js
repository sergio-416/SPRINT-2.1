'use strict';

console.log('Exercise 5');

const arr8 = [1, 2, 3, 4];
const squared = arr8.map(num => num * num);
console.log(squared);

const arr9 = [1, 2, 3, 4];
const even = arr9.filter(num => num % 2 === 0);
console.log(even);

const arr10 = [1, 10, 8, 11];
const biggerThanTen = arr10.find(num => num > 10);
console.log(biggerThanTen);

const arr11 = [13, 7, 8, 21];
const totalSum = arr11.reduce((accumulator, num) => accumulator + num, 0);

const arr12 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const finalResult = arr12
	.filter(num => num >= 10)
	.map(num => num * 2)
	.reduce((accumulator, num) => accumulator + num, 0);
console.log(finalResult);

const arr13 = [11, 12, 13, 14];
const allBigger = arr13.every(num => num > 10);
const someBigger = arr13.some(num => num > 10);
console.log(allBigger, someBigger);
