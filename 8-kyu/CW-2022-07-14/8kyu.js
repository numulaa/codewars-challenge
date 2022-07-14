//get character from ASCII Value
function getChar(c) {
  // ...
  return String.fromCharCode(c);
}
//Is n divisible by x and y?
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
//Jenny's secret message
function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";
}
//USD => CNY
function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + ` Chinese Yuan`; //toFixed(2) to make it become a currency,
}
//Multiple of index
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
  // good luck
  return array.filter((el, i) => el % i === 0);
}
