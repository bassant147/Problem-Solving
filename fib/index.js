// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*
function fib(n) {
  if(n < 2) return n;

  return fib(n-1) + fib(n-2);
}
*/

function memoize(fn) {
  const cache = {};
  return function() {

  }
}

function slowFib(n) {
  if(n < 2) return n;

  return fib(n-2) + fib(n-1);
}

const fib = memoize(slowFib);
/*

//////////////////////////////////////
// --- Iterative Solution

function fib(n) {

  const result = [0, 1];

  for(i = 2; i <= n; i++) {
    let add = result[i-2] + result[i-1];
    result.push(add);
  }
  return result[n];
}
*/


module.exports = fib;
