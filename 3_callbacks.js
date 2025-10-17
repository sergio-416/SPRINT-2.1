'use strict';

console.log('Exercise 3');

function process(name, callback) {
	callback(name);
}
function printName(name) {
	console.log(`Hi, I'm ${name}`);
}
process('Marc', printName);

let num5 = Math.floor(Math.random() * 10);
let num6 = Math.floor(Math.random() * 10);
function calc(a, b, callback) {
	callback(a, b);
}
calc(num5, num6, function (x, y) {
	console.log('The sum is:', x + y);
});

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
