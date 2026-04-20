// Use filter() to get only even numbers from: [1,2,3,4,5,6,7,8]

let nums = [1,2,3,4,5,6,7,8]

let evens = nums.filter(function(num){
    return num%2 === 0;
});

console.log(evens);
