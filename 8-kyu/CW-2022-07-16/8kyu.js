//return the last index of 1
// given an array of 1 and 0's where the 1's are always behind the 0's (e.g [1100000] ...ect), return the index of the last 1. Return 0 if there are no 1's in the array
// [1,1,0,0,0] -> 1
// [0,0,0] -> 0
// [] -> 0
// [1,1,1,1,0,0,0] -> 3

function returnTheLastIndex(arr) {
  return arr.length !== 0 && arr.includes(1) ? arr.lastIndexOf(1) : 0;
}
