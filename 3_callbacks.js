'use strict';

console.log('Exercise 3');

function process(name, callback) {
	return callback(name);
}
function printName(name) {
	return `Hi, I'm ${name}`;
}
console.log(process('Marc', printName));

function calc(a, b, callback) {
	return callback(a, b);
}
const result = calc(
	Math.floor(Math.random() * 10),
	Math.floor(Math.random() * 10),
	function (x, y) {
		return x + y;
	}
);
console.log('The sum is:', result);

function waitAndGreet(name, callback) {
	setTimeout(function () {
		callback(name);
	}, 2000);
}
waitAndGreet('Monica', name => {
	console.log(`Hello, ${name}`);
});

function processElements(arr, callback) {
	arr.forEach(callback);
}
processElements(['Ana', 'Bea', 'Joel'], function (element) {
	console.log(`Hello ${element}`);
});

function processChain(str, callback) {
	const upperStr = str.toUpperCase();
	callback(upperStr);
}
processChain('hello world', function (element) {
	console.log(element);
});
