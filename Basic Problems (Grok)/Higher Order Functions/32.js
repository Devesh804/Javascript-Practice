// ✅ Modified Version (with numbers)
function outer() {
  function inner(num) {
    return num * 2;
  }

  // Call inner inside outer
  const resultInside = inner(5);
  console.log("Inside outer:", resultInside);

  // Return inner function
  return inner;
}


// 🔍 How to use it
const fn = outer();     // Step 1
const resultOutside = fn(10);  // Step 2

console.log("Outside outer:", resultOutside);

// 🎯 Output
// Inside outer: 10
// Outside outer: 20