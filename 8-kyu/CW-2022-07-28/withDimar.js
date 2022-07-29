// function amIWilson(p) {
//   // check if prime is Wilson
// }
//Not yet solved
// function amIWilson(p) {
//   // check if prime is Wilson
//   let sum = 0;
//   let arr = [];
//   for (let i = 1; i <= p; i++) {
//     if (p % i === 0) {
//       sum++;
//     }
//   }
//   if (sum === 2) {
//     for (let i = 1; i <= p - 1; i++) {
//       arr.push(i);
//     }
//     const newVal = arr.reduce((acc, curr) => acc * curr, 1) + 1;
//     console.log(arr, arr.reduce((acc, curr) => acc * curr, 1) + 1);
//     return newVal === p ** 2;
//   }
// }

//Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  //coding and coding..
  const arr = "abcdefghijklmnopqrstuvwxyz".split("");
  return str
    .split("")
    .filter((el) => arr.includes(el))
    .reverse()
    .join("");
}

function solution(digits) {
  let arr = [];
  for (let i = 0; i < digits.length - 4; i++) {
    arr.push(digits.slice(i, i + 5));
  }
  return Math.max(...arr.map((el) => Number(el)));
}
//Most digits
function findLongest(array) {
  let maxNum = Math.max(...array);
  let filteredArr = array.filter(
    (a) => a.toString().length === maxNum.toString().length
  );
  return filteredArr[0];
}

function minimumPerimeter(area) {
  for (let i = Math.floor(Math.sqrt(area)); i > 0; i--) {
    //why is it using Math.sqrt()? what's the impact?
    if (area % i === 0) {
      return 2 * (i + area / i);
    }
  }
}
