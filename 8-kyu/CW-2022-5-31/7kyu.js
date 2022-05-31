//sum 2 of the lowest numbers from array
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sorted = numbers.sort((a, b) => a - b);
  let removed = sorted.splice(0, 2);
  return removed.reduce((a, b) => a + b, 0);
}
const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, a) => a + a);

//Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
let friend = (friends) => friends.filter((item) => item.length === 4);

//Narcissitic Number
// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.
function isNarcissistic(n) {
  return (
    n ===
    n
      .toString()
      .split("")
      .reduce((res, num, index, arr) => (res += Math.pow(num, arr.length)), 0)
  );
}
let isNarcissistic = (n) =>
  n ===
  n
    .toString()
    .split("")
    .reduce((prev, curr, i, arr) => (prev += Math.pow(curr, arr.length)), 0);

function isNarcissistic(n) {
  //your code here
  let number = 0;
  let digits = String(n);

  for (let i = 0; i < digits.length; i++) {
    number += Number(digits[i]) ** digits.length;
  }

  return number === n;
}
