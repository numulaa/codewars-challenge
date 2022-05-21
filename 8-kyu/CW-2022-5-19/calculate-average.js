// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  // your code here
  let summ = array.reduce((sum, current) => sum + current, 0);
  let average = summ / array.length;
  if (array.length === 0) {
    return 0;
  } else {
    return average;
  }
}
//lebih simple

let find_average = (array) =>
  array.length === 0
    ? 0
    : array.reduce((sum, current) => sum + current, 0) / array.length;
