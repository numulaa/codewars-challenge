//string ends with?
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
let solution = (str, ending) =>
  ending !== "" ? str.slice(-ending.length, str.length + 1) === ending : true; //if the endIndex to slice > str.length, it'll take it till the end
//this works the same
let solution = (str, ending) =>
  ending !== "" ? str.slice(-ending.length) === ending : true;
//usinf endsWith()
const solution = (str, ending) => str.endsWith(ending);
