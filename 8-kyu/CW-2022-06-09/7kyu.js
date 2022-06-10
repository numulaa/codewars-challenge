//Anagram Detection
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
let isAnagram = function (test, original) {
  let testArr = test.toLowerCase().split("").sort(); //change all of the string element into lowerCase, then split it to be an array, then sort it so it'll have the same order with original array
  let originalArr = original.toLowerCase().split("").sort(); //change all of the string element into lowerCase, then split it to be an array, then sort it so it'll have the same order with test array
  if (testArr.length === originalArr.length) {
    //it'll only be true if the have the same length
    return testArr.every((elem, index) => elem === originalArr[index]); //if every element of the testArray same with original array index(cause e have sorted it)
  } else {
    return false;
  }
};
//this ismore simpler beacuse we just need to shange it back to string with join(')
let isAnagram = function (test, original) {
  let t = test.toLowerCase().split("").sort().join("");
  let o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false; //then compare it
};
//Find the capitals
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
let capitals = function (word) {
  // Write your code here
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i).toUpperCase() === word.charAt(i)) {
      result.push(i);
    }
  }
  return result;
};

//using map()
let capitals = function (word) {
  return word
    .split("")
    .map((l, i) => (l.toUpperCase() === l ? i : null)) //to check if the elemen (l) is uppercase or not and make a new array of the indexes
    .filter((i) => i != null); //to get the array of the index where the charactesrs are uppercase
};

//Round up to the next multiple of 5
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
function roundToNext5(n) {
  // ...
  if (n % 5 === 0) {
    return n;
  } else if (n % 5 === n && n > 0) {
    return n + (5 - n);
  } else if (n % 5 === n && n < 0) {
    return 0;
  } else if (n % 5 !== 0 && n < 0) {
    return n - (n % 5);
  } else if (n % 5 !== 0) {
    return n + (5 - (n % 5));
  }
}
//using Math.ceil()
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
