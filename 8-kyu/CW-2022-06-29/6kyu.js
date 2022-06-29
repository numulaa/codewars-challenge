//Two Sum
// twoSum([1, 2, 3], 4); // returns [0, 2] or [2, 0]
function twoSum(numbers, target) {
  // ...
  if (numbers.length !== 0) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i, j];
        }
      }
    }
  }
}
