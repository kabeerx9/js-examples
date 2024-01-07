// Call , Bind and Apply in JavaScript (Explicit Binding)

// Call

var obj = { name: 'kabeer' };

function sayHello(age) {
	return 'Call : Hello ' + this.name + ' is ' + age;
}
console.log(sayHello.call(obj, 24));

// What is apply ?

// same as call , only different , it takes array as argument

var obj2 = { name: 'kabeer' };

function sayHello2(age) {
	return 'Apply : Hello ' + this.name + ' is ' + age;
}
console.log(sayHello2.apply(obj2, [24]));

// What is bind ?

// bind is same as call , only difference is it returns a function , we can also pass arguments to bind function , and it will return a function with those arguments

var obj3 = { name: 'kabeer' };

function sayHello3(age) {
	return 'Bind : Hello ' + this.name + ' is ' + age;
}
var binded = sayHello3.bind(obj3);
console.log(binded(24));
console.log(sayHello3.bind(obj3)(55));

// OUTPUT BASED QUESTIONS

const person = {
	name: 'kabeer',
};

function sayHi(age) {
	return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));

// QUESTION 2 :

const age = 23;

var person2 = {
	name: 'kabeer',
	age: 20,
	getAge: function () {
		return this.age;
	},
};

var person3 = { age: 30 };
const res = person2.getAge.call(person3);
console.log(res);
// the output is 30 , because we are calling getAge function on person3 object , so this.age will be 30

// QUESTION :
// Append an array to another array in JavaScript

const array = [1, 2, 3];
const elements = [4, 5, 6];

array.push.apply(array, elements);
console.log('Appended array', array);
// so what we are doing here is , we are pushing elements array into array array , so we are using apply method to do that

// QUESTION :
// Find min/max value in an array

const numbers = [5, 6, 2, 3, 7];

console.log('max value is ', Math.min.apply(null, numbers));
console.log('min value is ', Math.max.apply(null, numbers));

// EXTRA
// a fuction bound using the bind keyword can not be rebound to a different context

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// so call , bind , apply will not work on arrow functions

// CALL POLYFILL IMPLEMENTATION :

let car1 = {
	color: 'red',
	company: 'bmw',
};

function purchaseCar(currency, price) {
	console.log(
		`I have purchased ${this.color} ${this.company} car for ${currency} ${price}`
	);
}

Function.prototype.myCall = function (context = {}, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}
	console.log('This is ', this);
	context.fn = this;
	context.fn(...args);
};

purchaseCar.myCall(car1, 'USD', 10000);

// APPLY POLYFILL IMPLEMENTATION :

Function.prototype.myApply = function (context = {}, args = []) {
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}
	context.fn = this;
	context.fn(...args);
};

purchaseCar.myApply(car1, ['USD', 10000]);

// BIND POLYFILL IMPLEMENTATION :
// IMPORTANT

Function.prototype.myBind = function (context = {}, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('Error');
	}

	context.fn = this;
	return function (...newArgs) {
		return context.fn(...args, ...newArgs);
	};
};

const bindedFunc = purchaseCar.myBind(car1);
console.log(bindedFunc);
console.log(bindedFunc('USD', 10000));
