// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]
function between(a, b) {
  // your code here
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
between(1, 4);
//hasilnya
// [1, 2, 3, 4]

/**** GRASSHOPPER - SUMMATION *****/
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
let summation = function (num) {
  // Code here
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr.reduce((sum, current) => sum + current);
};

/******** Binary to Decimal */
// Complete the function which converts a binary number (given as a string) to a decimal number.
// ["1",1], ["0",0], ["1001001", 73] ]
let binToDec = (bin) => parseInt(bin, 2);
