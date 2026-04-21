// Write a function greet(name) that says 
// "Hello, [name]!" (use default parameter if name is not given).

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
} 
console.log(greet("Dev"));