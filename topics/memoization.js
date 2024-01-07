// Approach 1: Memoization using closure and cache object

function fibonacciWithClosure(n) {
	const cache = {};

	function fib(n) {
		if (n <= 1) {
			return n;
		}

		if (cache[n]) {
			return cache[n];
		}

		const result = fib(n - 1) + fib(n - 2);
		cache[n] = result;

		return result;
	}

	return fib(n);
}

// Approach 2: Memoization using higher-order function

function memoize(func) {
	const cache = {};

	return function (...args) {
		const key = JSON.stringify(args);

		if (cache[key]) {
			return cache[key];
		}

		const result = func.apply(this, args);
		cache[key] = result;

		return result;
	};
}

const fibonacciWithHigherOrder = memoize(function (n) {
	if (n <= 1) {
		return n;
	}

	return fibonacciWithHigherOrder(n - 1) + fibonacciWithHigherOrder(n - 2);
});

// Usage
console.log(fibonacciWithClosure(5)); // Example using closure and cache object
console.log(fibonacciWithHigherOrder(5)); // Example using higher-order function
