//multiplication table
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`) // i +1 cause it's started with 0,so it'll return 1 to 10
    .join("\n");
}
//other way
const multiTable = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};

//Opposite number
// 1: -1
// 14: -14
// -34: 34
const opposite = (number) => -number;

//Is it a palindrome?
// isPalindrome("Abba"), true)
// isPalindrome("Madam"), true)
// isPalindrome("hello"), false)
function isPalindrome(x) {
  // your code here
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}
