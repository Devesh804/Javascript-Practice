// Given: let numbers = [10, 20, 30, 40, 50];
// Print the length
// Add 60 at the end
// Remove the last element
// Add 5 at the beginning
// Remove the first element

let numbers = [10, 20, 30, 40, 50];

//Print the length
console.log(numbers.length);

// Add 60 at the end
numbers.push(60)
console.log(numbers);

// Remove the last element
numbers.pop()
console.log(numbers);

// Add 5 at the beginning
numbers.unshift(5)
console.log(numbers);

// Remove the first element
numbers.shift()
console.log(numbers);