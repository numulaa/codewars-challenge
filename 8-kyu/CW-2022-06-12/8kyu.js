//Merge two sorted arrays into one
//mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8]
//[1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12]
let mergeArrays = (arr1, arr2) =>
  arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .filter((elem, i, arr) => arr[i + 1] !== arr[i]); //filtered, so the same value only return one of it
//
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}
//Quarter of the year
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};
const quarterOf = (m) => Math.ceil(m / 3);
