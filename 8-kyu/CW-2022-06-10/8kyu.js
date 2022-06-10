// Is it even?
let testEven = (n) => n % 2 === 0;

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
let problem = (x) => (typeof x !== "number" ? "Error" : x * 50 + 6);
//Just bear in mind that you can't use any of the following characters: 0123456789*+-/
function unusualFive() {
  return "fiver".length;
}
//sum array
//if array is empty return 0
let sum = (numbers) =>
  numbers.length === 0 ? 0 : numbers.reduce((acc, curr) => acc + curr);
//this works the same
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0); //with initial value
}
//is the string uppercase? all of the element of thestring shouldbe uppercase
String.prototype.isUpperCase = function () {
  // your code here
  return this.toString() === this.toUpperCase();
};
//N-th power
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
let index = (array, n) => (array.length < n + 1 ? -1 : Math.pow(array[n], n));
//son or daughter
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
// chromosomeCheck('XY'), "Congratulations! You're going to have a son."
function chromosomeCheck(sperm) {
  if (sperm.split("").includes("Y")) {
    return "Congratulations! You're going to have a son.";
  } else {
    return "Congratulations! You're going to have a daughter.";
  }
}
//this works the same
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}
//return the multiplier of all elements of thearray
let grow = (x) => x.reduce((acc, curr) => acc * curr, 1);
//find multiplesof numbers
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
  //your code here
  let result = [];
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      result.push(i);
    }
  }
  return result;
}
//another way
function findMultiples(int, limit) {
  return Array(Math.floor(limit / int))
    .fill(1)
    .map((x, i) => int * (i + 1));
}
//If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
let countSheep = function (num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(`${i} sheep...`);
  }
  return arr.join("");
};
