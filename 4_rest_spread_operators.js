'use strict';

console.log('Exercise 4');

function restOperatorArr1() {
	const arr1 = [1, 2, 3];
	const arr2 = [4, 5, 6];
	const arr3 = [...arr1, ...arr2];
	return arr3;
}
console.log(restOperatorArr1());

function sum2(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(
	`The sum is: ${sum2(
		Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10),
		100
	)}`
);

function restOperatorObj1() {
	const obj1 = { a: 1, b: 2, c: 3 };
	const obj2 = { ...obj1, b: 20 };
	return obj2;
}
console.log(restOperatorObj1());

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

function restOperatorObj2() {
	const obj1 = { x: 1, y: 2 };
	const obj2 = { z: 3, w: 4 };
	const obj3 = { ...obj1, ...obj2 };
	return obj3;
}
console.log(restOperatorObj2());
