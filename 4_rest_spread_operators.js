'use strict';

console.log('Exercise 4');

function restOperatorArr1() {
	const arr3 = [1, 2, 3];
	const arr4 = [4, 5, 6];
	const arr5 = [...arr3, ...arr4];
	return arr5;
}
console.log(restOperatorArr1());

let num7 = Math.floor(Math.random() * 10);
let num8 = Math.floor(Math.random() * 10);
let num9 = Math.floor(Math.random() * 10);
function sum2(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(`The sum is: ${sum2(num7, num8, num9, 100)}`);

function restOperatorObj() {
	const obj1 = { a: 1, b: 2, c: 3 };
	const obj2 = { ...obj1, b: 20 };
	return obj2;
}
console.log(restOperatorObj());

function restOperatorArr2() {
	const arr6 = ['ten', 20, true, 40, { name: 'Tom' }, 60];
	const [first, second, ...rest] = arr6;
	return { first, second, rest };
}
console.log(restOperatorArr2());

function threeValues(a, b, c) {
	return { a, b, c };
}
const arr7 = [10, 'twenty', { number: 30 }];
console.log(threeValues(...arr7));

const obj3 = { x: 1, y: 2 };
const obj4 = { z: 3, w: 4 };
const obj5 = { ...obj3, ...obj4 };
console.log(obj5);
