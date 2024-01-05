// concept of memoization in js relies on two concepts
// 1. closure
// 2. higher order functions

function fibonacci(n, cache = {}) {
	if (n <= 1) {
		return n;
	}

	if (cache[n]) {
		return cache[n];
	}

	const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
	cache[n] = result;

	return result;
}

// now using a higher order function

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

const fibonacciMemoized = memoize(fibonacci);
