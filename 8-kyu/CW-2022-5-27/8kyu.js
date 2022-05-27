// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.
function howMuchWater(water, load, clothes) {
  // Insert your brilliant code here
  if (clothes > 2 * load) {
    return "Too much clothes";
  } else if (clothes < load) {
    return "Not enough clothes";
  } else {
    return Number((water * Math.pow(1.1, clothes - load)).toFixed(2));
  }
}
const howMuchWater = (water, load, clothes) =>
  clothes < load
    ? `Not enough clothes`
    : clothes > 2 * load
    ? `Too much clothes`
    : Math.round(water * 1.1 ** (clothes - load) * 100) / 100;
const howMuchWater = (water, load, clothes) =>
  clothes > 2 * load
    ? "Too much clothes"
    : load > clothes
    ? "Not enough clothes"
    : +(water * 1.1 ** (clothes - load)).toFixed(2);

//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
const hoopCount = (n) =>
  n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

//freud translator
let toFreud = (str) =>
  str !== ""
    ? str
        .split(" ")
        .map((x) => "sex")
        .join(" ")
    : "";

//using replace method with regex
let toFreud = (s) => s.replace(/[^ ]+/g, "sex");
