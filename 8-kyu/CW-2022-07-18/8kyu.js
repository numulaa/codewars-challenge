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

//Sum without highest and lowest number
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  return array === null || array === undefined || array.length <= 1
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, c) => a + c, 0);
}

//Do I get a bonus?
//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}
