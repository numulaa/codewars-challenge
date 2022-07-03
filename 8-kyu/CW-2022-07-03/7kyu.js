//Basic Calculator
// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null
function calculate(num1, operation, num2) {
  //TODO: make a basic calculator.

  switch (operation) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 !== 0 && num2 !== 0 ? num1 / num2 : null;
      break;
    default:
      return null;
  }
}
//using object
function calculate(num1, operation, num2) {
  var ops = {
    "+": function (x, y) {
      return x + y;
    },
    "-": function (x, y) {
      return x - y;
    },
    "*": function (x, y) {
      return x * y;
    },
    "/": function (x, y) {
      return y === 0 ? null : x / y;
    },
  };
  return (
    ops[operation] ||
    function () {
      return null;
    }
  )(num1, num2);
}
