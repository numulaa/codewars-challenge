//speed cntrol
// In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:
// x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
// The sections are:
// 0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
// We can calculate John's average hourly speed on every section and we get:
// [45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
// Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
// Example:
// with the above data your function gps(s, x)should return 74
// Note
// With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:
// (3600 * delta_distance) / s.

function gps(s, x) {
  // your code

  if (x.length <= 1) {
    return 0;
  } else {
    let arr = x.map((elem, i, arr) => elem - arr[i - 1]);
    arr.shift();
    return Math.floor(Math.max(...arr.map((elem) => (elem * 3600) / s)));
  }
}

//Check the exam
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// For example:
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
function checkExam(array1, array2) {
  // good luck
  let result = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      //to make sure that every element exactly the same with the exact order
      result += 4;
    } else if (array2[i] === "") {
      result -= 0;
    } else {
      result -= 1;
    }
  }
  return result <= 0 ? 0 : result;
}
//alternative
checkExam = (x, y) =>
  (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === "" ? 0 : -1), 0)) > 0
    ? x
    : 0;

//Highest and Lowest
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
function highAndLow(numbers) {
  // ...
  let numArr = numbers.split(" ");
  return [Math.max(...numArr), Math.min(...numArr)].join(" ");
}
