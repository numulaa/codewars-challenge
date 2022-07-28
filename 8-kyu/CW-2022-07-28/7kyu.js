//Help the Fruit Guy
function removeRotten(bagOfFruits) {
  return bagOfFruits === null || bagOfFruits === undefined
    ? []
    : bagOfFruits.map((el) =>
        el.includes("rotten") ? el.substr(6).toLowerCase() : el.toLowerCase()
      );
}
// //alteernative
// function removeRotten(arr){
//     return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
// }

//Exes and Ohs
function XO(str) {
  if (str.includes("x") || str.includes("o")) {
    const exes = str
      .toLowerCase()
      .split("")
      .filter((x) => x === "x").length;
    const ohs = str
      .toLowerCase()
      .split("")
      .filter((o) => o === "o").length;
    return exes === ohs;
  } else {
    return true;
  }
}

//Mumbling
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
  return s
    .split("")
    .map((el, i) => el.repeat(i + 1).toLowerCase())
    .map((x) => x.replace(x[0], x[0].toUpperCase()))
    .join("-");
}
// //alternative
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }

//Heron's formula
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
// Heron's formula:
// s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}
// s∗(s−a)∗(s−b)∗(s−c)
// ​
// where
// s=a+b+c2s = \frac{a + b + c} 2s=
// 2
// a+b+c
// ​
// Output should have 2 digits precision.
function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

//find the divisor
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr;
}
