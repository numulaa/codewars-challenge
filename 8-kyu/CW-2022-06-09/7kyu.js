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
