//add length
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
  //start-here
  return str.split(" ").map((el) => el + " " + el.length);
}
//Take the Derivative
//Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
//derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
