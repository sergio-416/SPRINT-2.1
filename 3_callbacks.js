'use strict';

console.log('Exercise 3');

function process(name, callback) {
	return callback(name);
}
function printName(name) {
	return `Hi, I'm ${name}`;
}
console.log(process('Marc', printName));

let num5 = Math.floor(Math.random() * 10);
let num6 = Math.floor(Math.random() * 10);
function calc(a, b, callback) {
	return callback(a, b);
}
const result = calc(num5, num6, function (x, y) {
	return x + y;
});
console.log('The sum is:', result);

function waitAndGreet(name, callback) {
	setTimeout(function () {
		callback(name);
	}, 2000);
}
waitAndGreet('Monica', name => {
	console.log(`Hello, ${name}`);
});

const arr2 = ['Ana', 'Bea', 'Joel'];
function processElements(arr, callback) {
	arr.forEach(callback);
}
processElements(arr2, function (element) {
	console.log(`Hello ${element}`);
});

let str1 = 'hello world';
function processChain(str, callback) {
	const upperStr = str.toUpperCase();
	callback(upperStr);
}
processChain(str1, function (element) {
	console.log(element);
});
