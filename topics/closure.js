// Example 1

let name = 'Kabeer';

function func1() {
	let message = 'Hi';
	console.log(message + ' ' + name);
}

func1();

// Example 2

function func2() {
	let message = 'Hi';

	function sayHi() {
		console.log(message);
	}

	sayHi();
}

func2();

// Example 3

function func3() {
	let message = 'Hi';

	function sayHi() {
		console.log(message);
	}

	return sayHi;
}
let hi = func3();
hi(); // still can access the message variable

// Example 4

function greeting(message) {
	return function (name) {
		return message + ' ' + name;
	};
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('Kabeer')); // Hi John
console.log(sayHello('John')); // Hello John
