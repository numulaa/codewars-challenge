//string ends with?
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
let solution = (str, ending) =>
  ending !== "" ? str.slice(-ending.length, str.length + 1) === ending : true; //if the endIndex to slice > str.length, it'll take it till the end
//this works the same
let solution = (str, ending) =>
  ending !== "" ? str.slice(-ending.length) === ending : true;
//usinf endsWith()
const solution = (str, ending) => str.endsWith(ending);

//leap years
const isLeapYear = (year) =>
  year % 100 === 0 && year % 400 !== 0
    ? false
    : year % 4 === 0 || year % 400 === 0;

//return the sum
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
let getSum = (a, b) => {
  let arr = [];
  if (a !== b && a < b) {
    //if a < b, the loop should start from a
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr.reduce((acc, curr) => acc + curr); //if a > b the loop should start from b
  } else if (a !== b && a > b) {
    for (let i = b; i <= a; i++) {
      arr.push(i);
    }
    return arr.reduce((acc, curr) => acc + curr);
  } else {
    return a;
  }
};
//alternative
function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}
