# generator-examples
Some examples of generator usings.

## Lazy Sieve of Eratosthenes
https://github.com/lukesolo/generator-examples/blob/master/lib/eratosthenes.js

In this implementation you don't have to specify the size of an array.
Next prime is being generated lazily, so you can work with primes sequence in more flexible way.

For example:
```javascript
// All primes greater than 50 and below 100
console.log(...compose(takeWhile(x => x < 100), filter(x => x > 50), erath)());
// 53 59 61 67 71 73 79 83 89 97

// First 10 primes
console.log(...compose(take(10), erath)());
// 2 3 5 7 11 13 17 19 23 29
```
