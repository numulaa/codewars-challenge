//remove first and last character
let removeChar = (str) => str.substring(1, str.length - 1);
//stringy strings
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
function stringy(size) {
  let arr = new Array(size);
  return Array.from(arr, (elem, index) => (index % 2 === 0 ? 1 : 0))
    .join("")
    .toString();
}
