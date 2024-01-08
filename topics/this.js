'use strict';
// this in global space

console.log(this); // global object

// this inside a function

function x() {
	console.log(this);
}

// x();

// this keyword works differently in strict mode and non-strict mode

// this substitution(non strict mode) -> if the value of this is undefined or null this will be replaced with global object

// so value of this inside a function is undefined but in non-strict mode it will be replaced with global object

// this inside object's method

const student = {
	name: 'kabeer',
	printName: function () {
		console.log(this);
	},
};

student.printName(); // value of this will be the object itself

// call apply bind methods (sharing methods)

const student2 = {
	name: 'Luffy',
	show: 'One Piece',
};

// to share the method printName with student2 , we can use
// call apply bind methods

student.printName.call(student2); // value of this will be student2

// arrow functions don't have their own this keyword , they use the this keyword of their parent scope (lexical scope)

const arrowFunc = () => {
	console.log(this);
};

arrowFunc(); // value of this will be global object

// another example

const student3 = {
	name: 'Zoro',
	show: 'One Piece',
	printName: () => {
		console.log(this);
	},
};

student3.printName(); // value of this will be global object

// another example

const student4 = {
	name: 'Sanji',
	show: 'One Piece',
	printName: function () {
		// enclosing lexical context
		const innerFunc = () => {
			console.log(this);
		};
		innerFunc();
	},
};

student4.printName(); // value of this will be student4

// this inside dom elements -> reference to the HTML element that fired the event
