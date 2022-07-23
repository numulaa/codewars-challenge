//Tip Calculator
function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "terrible") return 0;
  if (rating.toLowerCase() === "poor") return Math.ceil(amount * 0.05);
  if (rating.toLowerCase() === "good") return Math.ceil(amount * 0.1);
  if (rating.toLowerCase() === "great") return Math.ceil(amount * 0.15);
  if (rating.toLowerCase() === "excellent") return Math.ceil(amount * 0.2);
  return "Rating not recognised";
}

//Grasshopper - Debug
function weatherInfo(temp) {
  let c = convertToCelsius(temp);
  if (c > 0) return c + " is above freezing temperature";
  return c + " is freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

//swap values
//debugging
const swapValues = (arr) => arr.reverse();

//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
//change all of vowel into '!'
function replace(s) {
  let n = s.split("");
  return n
    .map((el) =>
      el.toLowerCase() === "a"
        ? "!"
        : el.toLowerCase() === "i"
        ? "!"
        : el.toLowerCase() === "u"
        ? "!"
        : el.toLowerCase() === "e"
        ? "!"
        : el.toLowerCase() === "o"
        ? "!"
        : el
    )
    .join("");
}
//alternative
// const replace = (w) =>
//   w
//     .split("")
//     .map((e) => ("aeiou".includes(e.toLowerCase()) ? "!" : e))
//     .join("");

//Remove First and Last Character Part Two
function array(arr) {
  return arr.split(",").length <= 2 || arr.length <= 2
    ? null
    : arr.split(",").slice(1, -1).join(" ");
}
//alternative
// function array(arr) {
//   return arr.split(",").slice(1, -1).join(" ") || null;
// }

//kata example twist
//Add the value "codewars" to the array websites/Websites 1,000 times.
const websites = new Array(1000).fill("codewars");

//SpeedCode #2 - Array Madness
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const arrayMadness = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);

//Smallest unused ID
// (nextId([0,1,2,3,5]), 4);
// (nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
function nextId(ids) {
  for (let i = 0; i <= ids.length; i++) {
    if (!ids.includes(i)) return i;
  }
}


