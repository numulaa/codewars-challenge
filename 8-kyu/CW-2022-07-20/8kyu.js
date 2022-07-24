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



