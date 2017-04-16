'use strict';

const compose = (...fs) => fs.reduceRight((comp, f) => (...args) => f(comp(...args)));

const naturals = function *() {
    for (let i = 1;; i++) {
        yield i;
    }
};

const filter = pred => function *(source) {
    for (const value of source) {
        if (pred(value)) {
            yield value;
        }
    }
};

const skip = n => function *(source) {
    for (let i = 0; i < n; i++) {
        source.next();
    }
    yield* source;
}

const take = n => function *(source) {
    let i = 0;

    for (const value of source) {
        if (i++ >= n) {
            break;
        }
        
        yield value;
    }
};

const takeWhile = pred => function *(source) {
    for (const value of source) {
        if (!pred(value)) {
            break;
        }
        
        yield value;
    }
}

const erath = function *() {
    const filters = [];
    const numGen = compose(skip(1), naturals)();

    for (const value of numGen) {
        if (filters.some(f => f(value))) {
            continue;
        }
        yield value;
        filters.push(x => x % value === 0);
    }
};

// All primes below 100
console.log(...compose(takeWhile(x => x < 100), erath)());
// First 10 primes
console.log(...compose(take(10), erath)());
