//find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
function stray(numbers) {
  let sorted = numbers.sort(); //sort the number so all of the same numbers are placed consecutively
  if (sorted[0] !== sorted[1]) {
    return sorted[0]; //so, if the first number the same with the second number menas it's not the sttray number
  } else if (sorted[0] !== sorted[numbers.length - 1]) {
    return sorted[numbers.length - 1]; //and if the last number isn't same with thefirst or the second last number means it's the stray number
  } else {
    return 0;
  }
}
//alternative way
function stray(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter((x) => x == max).length == 1 ? max : min;
}
