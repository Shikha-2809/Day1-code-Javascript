function myFunction() {
    console.log("Hello !");
    console.log("I am learning javascript");
}
myFunction();

// Function-> 2 No., sum
function sum (x, y){
    console.log(x+y)
} 
//Arrow Functions
// sum function
function sum(a, b){
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a +b);
}; 
// multipliction function
function mul(a, b){
    return a + b;
}
const arrowmul = (a, b) => {
    console.log(a * b);
}; 

// for each loop in arrays
let arr = [1, 2, 3, 4, 5,];
arr.forEach(function printval(val){
    console.log(val);
});

// Map
let nums = [23, 45, 97];
nums.map((val) => {
    console.log(val);
});

// Filter
let arr1 = [1, 2, 3, 4, 5, 6, 7,];
let evenArr = arr1.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);
