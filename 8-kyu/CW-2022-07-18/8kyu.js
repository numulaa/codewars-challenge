//Get the mean of an array
//Return the average of the given array rounded down to its nearest integer.
function getAverage(marks) {
  return Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length);
}

//reversed words
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
const reverseWords = (str) => str.split(" ").reverse().join(" ");

//Man in the west
//So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
const checkTheBucket = (bucket) => bucket.includes("gold");

//Array plus array
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, c) => a + c); //something went wrong
}

//Count the Monkeys!
//Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]
const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);
