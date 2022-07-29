//Two to One
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

//Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}
//alternative
// const factorial = (n) => (n ? factorial(n - 1) * n : 1);
