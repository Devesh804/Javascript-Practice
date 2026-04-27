// Create a function createMultiplier(n) that returns a new function. The new function should multiply any number by n.
// Example: const double = createMultiplier(2); double(5) → 10

function createmultiplier(n) {
    return function(x) {
        return x*n;
    };
}

const double = createmultiplier(2);
console.log(double(5));

const triple = createmultiplier(3);
console.log(triple(5));
