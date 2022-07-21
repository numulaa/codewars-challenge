//Get Nth Even Number
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
const nthEven = (n) => n * 2 - 2;

//Triple Trouble
//E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
//assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
// assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans")
function tripleTrouble(one, two, three) {
  //Solution
  let newArr = new Array(one.length);
  for (let i = 0; i < one.length; i++) {
    newArr.push(one[i] + two[i] + three[i]);
  }
  return newArr.join("");
}

//Find the position!
//When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"
function position(letter) {
  //Write your own Code!
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let charArr = chars.split("");
  let nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  return `Position of alphabet: ${nums[chars.indexOf(letter)]}`;
}
// //alternative
// function position(letter){
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
//   }

//The falling speed of petals
// the distance = 400cm
// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
const sakuraFall = (v) => (v > 0 ? 400 / v : 0);

//Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}
//alternative
// function trueOrFalse(val){
//     return Boolean(val).toString();
//   }

//Find out whether the shape is a cube
let cubeChecker = function (volume, side) {
  return volume > 0 ? side ** 3 === volume : false;
};
