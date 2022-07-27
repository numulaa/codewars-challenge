//Reverse list
const reverseList = (arr) => arr.reverse();

//Divide and Conquer
function divCon(x) {
  const stringsNum = x
    .filter((a) => typeof a === "string")
    .map((el) => Number(el))
    .reduce((a, c) => a + c, 0);
  const numberNum = x
    .filter((a) => typeof a === "number")
    .reduce((a, c) => a + c, 0);
  return numberNum - stringsNum;
}
