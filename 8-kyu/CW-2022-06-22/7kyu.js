//Sum of all the multiples of 3 or 5
// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
function findSum(n) {
  let sum3 = 0;
  for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum3 += i;
    }
  }
  return sum3;
}

//using array
function findSum(n) {
  return Array.from({ length: n }, (a, b) => b + 1).reduce(function (
    curSum,
    val
  ) {
    return !(val % 5 && val % 3) ? curSum + val : curSum;
  },
  0);
}

//Is this a triangle?
//to make a triangle should fulfill all these three requirements
const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;
//other way
let isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2; //so it checks the longest triangle side,
