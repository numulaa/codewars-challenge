//Alternate capitalization
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
function capitalize(s) {
  return [
    s
      .split("")
      .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el))
      .join(""),
    s
      .split("")
      .map((el, i) => (i % 2 !== 0 ? el.toUpperCase() : el))
      .join(""),
  ];
}
//Enumerable Magic #25 - Take the First N Elements
//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]
const take = (arr, n) => arr.filter((elem, i) => i < n);
