// Challenge: Check if a year is a leap year or not 
// (divisible by 4, but not by 100 unless also by 400).

year = 1900
if (year%4===0 && year%100 !== 0) {
    console.log("It is leap year");
    
} else if (year%400===0) {
    console.log("It is leap year");
    
} else {
    console.log("It is not leap year");
    
}