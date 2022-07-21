//Get Nth Even Number
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
const nthEven = (n) => n * 2 - 2;

//Triple Trouble
//E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
//assert.strictEqual(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
// assert.strictEqual(tripleTrouble("Sea","urn","pms"), "Supermans")
function tripleTrouble(one, two, three) {
  //Solution
  let newArr = new Array(one.length);
  for (let i = 0; i < one.length; i++) {
    newArr.push(one[i] + two[i] + three[i]);
  }
  return newArr.join("");
}
