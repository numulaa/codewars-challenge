//Make a function that does arithmetic!
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
function arithmetic(a, b, operator) {
  //your code here!
  return operator === "add"
    ? a + b
    : operator === "subtract"
    ? a - b
    : operator === "multiply"
    ? a * b
    : a / b;
}
//solved with object
// const arithmetic = (a, b, operator) =>
//   ({
//     add: a + b,
//     subtract: a - b,
//     multiply: a * b,
//     divide: a / b,
//   }[operator]); //make the object first then get the value of the object with it's key

//SevenAte9
// "79712312" --> "7712312"
// "79797"    --> "777"
// '165561786121789797', '16556178612178977'
function sevenAte9(str) {
  return str.split("797").join("77").split("797").join("77");
}

// function sevenAte9(str){
//     var strArray = str.split('');
//     for (var i = strArray.length - 2; i >= 1; i--) {
//       if (strArray[i - 1] === '7' && strArray[i] === '9' && strArray[i + 1] === '7')
//         strArray.splice(i , 1);
//     }

//     return strArray.join('');
//   }
// const sevenAte9 = ($) => {
//   while ($.includes("797")) {
//     $ = $.replace("797", "77");
//   }
//   return $;
// };

//diving scores
//The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the difficulty ( tariff ) to get the score for the dive.
//scoreOfDive( [ 7, 7.5, 8, 7.5, 6, 7, 7 ], 3 )  =>  '64.50'
function scoreOfDive(scores, tariff) {
  // your code here
  let result =
    scores
      .sort((a, b) => a - b)
      .filter((el, i) => i > 1 && i < scores.length - 2)
      .reduce((a, c) => a + c, 0) * tariff;
  return result.toFixed(2);
}

//row weights
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// assert.deepEqual(rowWeights([80]), [80,0]);
// assert.deepEqual(rowWeights([100,50]), [100,50]);
// assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
// assert.deepEqual(rowWeights([13,27,49]), [62,27]);
function rowWeights(array) {
  //your code here
  let first = 0;
  let second = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      first += array[i];
    } else {
      second += array[i];
    }
  }
  return [first, second];
}
//using filter()
function rowWeights(array) {
  let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
  let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

  return [t1, t2];
}
