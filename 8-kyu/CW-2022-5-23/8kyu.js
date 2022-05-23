// Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
// let lovefunc = (flower1, flower2) =>
//   (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//   (flower1 % 2 !== 0 && flower2 % 2 === 0)
//     ? true
//     : false;

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// L1: Set Alarm
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

// let setAlarm = (employed, vacation) =>
//   employed === true && vacation === false ? true : false;

let setAlarm = (employed, vacation) => employed && !vacation;

// Abbreviate a Two Word Name
// Sam Harris => S.H
// patrick feeney => P.F
function abbrevName(name) {
  let splitTwoWords = name
    .toUpperCase()
    .split(" ")
    .map((x) => x.substr(0, 1));
  return `${splitTwoWords[0]}.${splitTwoWords[1]}`;
}

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
let plural = (n) => (n > 1 || n === Infinity || n < 1 ? true : false);
