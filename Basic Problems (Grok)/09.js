// Create an object with your details (name, age, city) and 
// print each property using dot notation and bracket notation.


let obj1 = {
    name: "Devesh",
    age: 20,
    city: "Mumbai"
};

// Method 1: using dot notation
console.log(obj1.name, obj1.age, obj1.city);

//Method 2: using bracket notation
console.log(obj1["name"]);
console.log(obj1["age"]);
console.log(obj1["city"]);



// 1. What is an Object?
// An object is a collection of key-value pairs.
// Think of it like a real-world profile:

// name → "DevCore"
// age  → 20
// city → "Delhi"

// 2. Two ways to access object properties:
// A. Dot Notation (Most Common)
// JavaScriptstudent.name
// student.age

// Easy to read and write
// Used when the key (property name) is a valid variable name (no spaces, doesn't start with number)

// B. Bracket Notation
// JavaScriptstudent["name"]
// student["age"]

// Used when:
// Property name has spaces (e.g. "full name")
// Property name starts with a number
// You want to access property dynamically (using a variable)