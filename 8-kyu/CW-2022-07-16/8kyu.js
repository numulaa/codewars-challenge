//Surface Area and Volume of a Box
function getSize(width, height, depth) {
  const surface = 2 * (width * height + height * depth + width * depth);
  const volume = width * height * depth;
  return [surface, volume];
}
//Thinkful - Number Drills: Pixelart planning
function isDivisible(wallLength, pixelSize) {
  //your code here
  return wallLength % pixelSize === 0;
}
//repeatIt
//"Hi", 2 --> "HiHi"
//1234, 5 --> "Not a string"
var repeatIt = function (str, n) {
  let arr = [];
  if (typeof str === "string") {
    for (let i = 0; i < n; i++) {
      arr.push(str);
    }
    return arr.join("");
  } else {
    return "Not a string";
  }
};
//const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'

//Return the day
function whatday(num) {
  // put your code here
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  if (days.hasOwnProperty(num)) {
    return days[num];
  } else {
    return "Wrong, please enter a number between 1 and 7";
  }
}
//other way
function whatday(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num - 1] || "Wrong, please enter a number between 1 and 7";
}
