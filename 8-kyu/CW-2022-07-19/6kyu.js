//Find the unique number
//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
function findUniq(arr) {
  const newArr = arr.sort((a, b) => a - b);
  return newArr[0] === newArr[1] ? newArr[newArr.length - 1] : newArr[0];
}
//alternative
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}
