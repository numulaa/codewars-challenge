// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let splitStr = str.split("");
  let reversedStr = splitStr.reverse();
  let joinStr = reversedStr.join("");
  return joinStr;
}

//or
function solution(str) {
  return str.split("").reverse().join("");
}
