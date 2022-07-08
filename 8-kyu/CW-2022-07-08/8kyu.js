//palindrom
function isPalindrome(line) {
  return line === line.split("").reverse().join("");
}

//Remove duplicates from list
function distinct(a) {
  return [...new Set(a)];
}
//other way
const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index);

//Pre-FizzBuzz Workout #1
// Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
// Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
// Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
function preFizz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
//other way
const preFizz = (n) => Array.from({ length: n }, (_, i) => i + 1);

//Training JS #10: loop statement --for
function pickIt(arr) {
  var odd = [],
    even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}
