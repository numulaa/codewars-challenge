//binary adddition
function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}

//Thinkful - String Drills: Repeater
//"a", 5 --> "aaaaa"
function repeater(string, n) {
  //Your code goes here.
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += string;
  }
  return str;
}
//using repeat()
const repeatFunc = (string, n) => string.repeat(n);
