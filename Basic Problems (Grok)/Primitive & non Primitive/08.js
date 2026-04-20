// Explain with example why:
// let a = 5; let b = a; b = 10; → a remains 5
// But let arr1 = [1,2]; let arr2 = arr1; arr2.push(3); → arr1 also becomes [1,2,3]

let a = 5;
let b = a;     // b gets a copy of the value 5
b = 10;        // b is changed to 10

console.log(a); // Output: 5  ← a is NOT affected


// Why?

// Primitive values are stored by value (a copy is made).
// When you do let b = a, JavaScript creates a new copy of 5 and gives it to b.
// Changing b does not affect a.

// Think of it like giving someone a photocopy of your document. If they write on their copy, your original remains the same.



let arr1 = [1, 2];
let arr2 = arr1;     // arr2 does NOT get a copy
arr2.push(3);

console.log(arr1);   // Output: [1, 2, 3]  ← arr1 also changed!

// Why?

// Arrays and Objects are stored by reference (not by value).
// When you do let arr2 = arr1, JavaScript does not copy the array.
// Instead, arr2 points to the same array in memory that arr1 is pointing to.
// So both arr1 and arr2 are pointing to the exact same box in memory.
// When you do arr2.push(3), you are modifying that shared box, so arr1 also sees the change.

// Think of it like giving someone the original key to your house. If they add furniture, you will also see it when you go home.