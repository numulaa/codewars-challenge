// How many years needed to see its population greater or equal to p
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
///D:/COURSES/PRACTICE/advice-generator-app-main/index.html

file: function nbYear(p0, percent, aug, p) {
  //p is the population rn, percent is the increases of population each year, aug is inhabitants each year, p is target population
  let years;
  for (years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

//Form The Minimum
//minValue ({1, 3, 1})  ==> return (13)
//minValue({5, 7, 5, 9, 7})  ==> return (579)
function minValue(values) {
  //your code here
  return Number(
    values
      .sort((a, b) => a - b)
      .filter((elem, i, arr) => elem !== arr[i + 1])
      .join("")
  );
}
//using set()
function minValue(values) {
  let arr = Array.from(new Set(values));
  return parseInt(arr.sort().join(""));
}

//summing a number's digit
// 10 --> 1
// 99 --> 18
// -32 --> 5
const sumDigits = (number) =>
  Math.abs(number)
    .toString()
    .split("")
    .map((elem) => parseInt(elem))
    .reduce((a, c) => a + c);
