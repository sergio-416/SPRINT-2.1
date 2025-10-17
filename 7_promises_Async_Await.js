'use strict';

console.log('Exercise 7');

const promiseHelloWorld = new Promise(resolve => {
	setTimeout(() => {
		resolve('Hello, world');
	}, 2000);
});

promiseHelloWorld.then(message => {
	console.log(message);
});

const inputPromise = input => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (input === 'Hello') {
				resolve('Correct input');
			} else {
				reject('Incorrect input');
			}
		}, 2000);
	});
};
inputPromise('Hello')
	.then(result => console.log(result))
	.catch(error => console.log(error));

const asyncFunction = async () => {
	const message = await promiseHelloWorld;
	console.log(message);
};
asyncFunction();

const asyncFunctionError = async () => {
	try {
		const message = await promiseHelloWorld;
		console.log(message);
	} catch (error) {
		console.error(error);
	}
};
asyncFunctionError();

const promise1 = new Promise(resolve => {
	setTimeout(() => {
		resolve('Promise 1 resolved after 2 seconds');
	}, 2000);
});
const promise2 = new Promise(resolve => {
	setTimeout(() => {
		resolve('Promise 2 resolved after 3 seconds');
	}, 3000);
});
Promise.all([promise1, promise2])
	.then(result => {
		console.log(result);
	})
	.catch(error => {
		console.error(error);
	});
