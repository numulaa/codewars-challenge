//convert the equivalent binary value to an integer.
const binaryArrayToNumber = (arr) => {
  // your code
  //return arr.map(elem => elem === 0 ? 0: 2).reverse().reduce((acc, curr, index) => acc + (curr**index));
  return parseInt(arr.join(""), 2);
};
const binaryArrayToNumber = (arr) => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
};
function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}

//sort numbers
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
const solution = (nums) => (!nums ? [] : nums.sort((a, b) => a - b));
