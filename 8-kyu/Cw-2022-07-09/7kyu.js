//You're a square!
var isSquare = function (n) {
  let value = Math.sqrt(n);
  return Number.isInteger(value); // fix me
};

//JavaScript Array Filter
//only take the even numbers
function getEvenNumbers(a) {
  // filter out the odd numbers
  return a.filter((el) => el % 2 === 0);
}
