//Lario and Muigi Pipe Problem
//Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
function pipeFix(numbers) {
  let arr = [];
  for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
    arr.push(i);
  }
  return arr;
}

//Holiday VIII - Duty Free
//For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / ((discount / 100) * normPrice));
}
