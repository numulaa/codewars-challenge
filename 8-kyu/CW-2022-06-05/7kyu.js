//Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
function getDivisorsCnt(n) {
  let divisorsArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorsArr.push(i);
    }
  }
  return divisorsArr.length;
}
//another way
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

//Printer Errors
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
function printerError(s) {
  // your code
  let errorString = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== "a" &&
      s[i] !== "b" &&
      s[i] !== "c" &&
      s[i] !== "d" &&
      s[i] !== "e" &&
      s[i] !== "f" &&
      s[i] !== "g" &&
      s[i] !== "h" &&
      s[i] !== "i" &&
      s[i] !== "j" &&
      s[i] !== "k" &&
      s[i] !== "l" &&
      s[i] !== "m"
    )
      errorString++;
  }
  return `${errorString}/${s.length}`;
}
//alternative
function printerError(s) {
  // your code
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      //cause computer knows the ASCII
      count++;
    }
  }
  return count + "/" + s.length;
}
//using indexOf()
function printerError(s) {
  let allowed = "abcdefghijklm";
  let error = 0;
  s.split("").forEach(function (item) {
    return allowed.indexOf(item) === -1 ? error++ : "";
  });
  return error + "/" + s.length;
}
