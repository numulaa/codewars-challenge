//make uppercase
let makeUppercase = (str) => str.toUpperCase();

//powers of 2
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}
//alternative way
let powersOfTwo = (n) =>
  Array.from(
    { length: n + 1 } /*create new array with length n+1*/,
    (value, index) =>
      Math.pow(2, index) /*mapping theelement to add to the array*/
  );

//sort and star
//   You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.
let twoSort = (s) => s.sort()[0].split("").join("***");
