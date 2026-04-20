// Increment and Decrement:JavaScript

let num = 10;
console.log(num++);
console.log(++num);
console.log(num--);
console.log(--num);

// Output:
// 10
// 12
// 12
// 10


// Step-by-step Explanation (with current value of num after each line):
// Start: num = 10

// console.log(num++) → Postfix Increment
// First, it prints the current value of num → 10
// Then, it increments num by 1
// Now num becomes 11

// console.log(++num) → Prefix Increment
// First, it increments num by 1 → num becomes 12
// Then, it prints the new value → 12

// console.log(num--) → Postfix Decrement
// First, it prints the current value of num → 12
// Then, it decrements num by 1
// Now num becomes 11

// console.log(--num) → Prefix Decrement
// First, it decrements num by 1 → num becomes 10
// Then, it prints the new value → 10