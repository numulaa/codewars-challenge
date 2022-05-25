// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
let doubleChar = (str) =>
  str
    .split("")
    .map((x) => x + x)
    .join("");

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
let removeEveryOther = (arr) => arr.filter((x, i) => i % 2 === 0);

//is he gonna survive?
//hero can only survive if he has enough bullets to defeat the dragons. Each dragon need 2 bullets to be defeated
let hero = (bullets, dragons) => bullets >= dragons * 2;

//rental car
//if you rent car for more than or 3 days, you'll get $20 off of total. if the car rented for 7 days or more, you'lll get $50 off of the total
function rentalCarCost(d) {
  // Your solution here
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}
//simpler way
const rentalCarCost = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);
