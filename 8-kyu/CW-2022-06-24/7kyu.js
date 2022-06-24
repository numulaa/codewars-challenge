//Consecutive items
//consecutive([1, 3, 5, 7], 3, 7), false
//consecutive([1, 3, 5, 7], 3, 1), true
//consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true
const consecutive = (arr, a, b) =>
  Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1;

//Flatten and sort an array
// [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// [[], [1]]), [1]
("use strict");

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
//using reduce()
function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current], [])
    .sort((a, b) => a - b);
}

//Small enough? - Beginner
//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//smallEnough([66, 101], 200), true
//[78, 117, 110, 99, 104, 117, 107, 115], 100), false
function smallEnough(a, limit) {
  return a.filter((elem) => elem <= limit).length === a.length;
}

//Convert to Binary
//toBinary(2), 10
//toBinary(1), 1
//toBinary(5), 101
function toBinary(n) {
  return Number(n.toString(2));
}
