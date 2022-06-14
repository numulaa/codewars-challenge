//find the smallest eelement in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
//filling an array
//arr(5) // => [0,1,2,3,4]
const arr = (N) => {
  const newArr = [];
  for (let i = 0; i < N; i++) {
    newArr.push(i);
  }
  return newArr;
};
//alternatives
const arr = (n) => Array.from({ length: n }, (_, i) => i);
const arr = (N) => [...Array(N || 0).keys()];
