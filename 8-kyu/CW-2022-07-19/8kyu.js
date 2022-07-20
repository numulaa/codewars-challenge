//Get Planet Name By ID
//DEBUGGING
function getPlanetName(id) {
  switch (id) {
    case 1:
      return "Mercury";
    case 2:
      return "Venus";
    case 3:
      return "Earth";
    case 4:
      return "Mars";
    case 5:
      return "Jupiter";
    case 6:
      return "Saturn";
    case 7:
      return "Uranus";
    case 8:
      return "Neptune";
  }
}
//Student's Final Grade
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

//Unfinished Loop - Bug Fixing #1
function createArray(number) {
  let newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

//My head is at the wrong end!
//reverse the array
const fixTheMeerkat = (arr) => arr.reverse();

//Find numbers which are divisible by given number
const divisibleBy = (numbers, divisor) =>
  numbers.filter((el) => el % divisor === 0);

//Squash the bugs
//Output should be the length of the longest word, as a number.
const findLongest = (s) => Math.max(...s.split(" ").map((x) => x.length));

//Are arrow functions odd?
//return only odd numbers of an array
const odds = (values) => values.filter((n) => n % 2 !== 0);

//Well of Ideas - Easy Version
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function well(x) {
  const arr = x.filter((n) => n === "good").length;
  return arr < 1 ? "Fail!" : arr <= 2 ? "Publish!" : "I smell a series!";
}

//Grasshopper - If/else syntax debug
//debugging
const checkAlive = (health) => health > 0;

//Generate range of integers
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

//Sleigh Authentication
//if the name == 'Santa Claus' and the password == "Ho Ho Ho!" => true
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  // TODO
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false;
};

//Gravity Flip
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
const flip = (d, a) => {
  return d === "R" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
};

//Is this my tail?
// ("Fox", "x"), true;
// ("Rhino", "o"), true;
function correctTail(body, tail) {
  return body.substr(-1) === tail;
}

//Dollars and Cents
//39.99 becomes $39.99
//3.1 needs to become $3.10
const formatMoney = (amount) => `$${amount.toFixed(2)}`;

//Grasshopper - Array Mean
const findAverage = (nums) => nums.reduce((a, c) => a + c, 0) / nums.length;
