// Create an array of 5 fruits and:
// Print the 3rd fruit
// Add one more fruit at the end
// Remove the first fruit

let fruits = ["Mango", "Apple", "Banana", "Guava", "Papaya"]
console.log(fruits[2]);

//Add one more fruit at the end
fruits.push("Melon")
console.log(fruits);

// Remove the first fruit
fruits.shift()
console.log(fruits);


//shift() removes the first element and returns it.
// It changes the original array and reduces its length by 1

//slice(1) returns a new array starting from index 1, so the first element is “removed” only in the copy.