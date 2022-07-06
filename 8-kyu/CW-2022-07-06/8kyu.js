//Fix your code before the garden dies!
function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

//Training JS #7: if..else and ternary operator
// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

//No Loops 2 - You only need one
function check(a, x) {
  return a.includes(x);
}

//simple calculator
function calculator(a, b, sign) {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "unknown value";
  }
}
