// Write a higher-order function calculator(operation) 
// that returns another function:


// If operation = "add", it returns a function 
// that adds two numbers
// If "multiply", it returns a function that multiplies


function calculator(operation) {
    if (operation === "add") {
        return function(a, b) {
            return a + b;
        };
    }
    else if (operation === "multiply") {
        return function(a,b) {
            return a*b;
        };
    }
    else {
        return function() {
            return "Invalid operator"
        };
    }
} 

const add = calculator("add");
console.log(add(2, 3));  


const multiply = calculator("multiply");
console.log(multiply(4, 5));