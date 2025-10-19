function process(name, callback) {
	return callback(name);
}
function printName(name) {
	return `Hi, I'm ${name}`;
}
console.log(process('Marc', printName));