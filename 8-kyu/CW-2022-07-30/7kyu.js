//Sum of the first nth term of Series
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
function SeriesSum(n) {
  // Happy Coding ^_^
  let arr = [];
  if (n === 0) {
    return n.toFixed(2);
  } else {
    for (let i = 1; arr.length < n; i += 3) {
      arr.push(1 / i);
    }
  }
  return arr.reduce((a, c) => a + c, 0).toFixed(2);
}
//alernative
// function SeriesSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += 1 / (1 + i * 3);
//   }
//   return sum.toFixed(2);
// }
