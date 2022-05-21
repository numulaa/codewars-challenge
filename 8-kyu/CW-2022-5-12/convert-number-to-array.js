// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
/**************THIS IS MY CODE, FALSE****************** */
// function digitize(n) {
//   //code here
//   let numToString = n.toString();
//   let arr = numToString.split("");
//   for (let i = numToString.length; i <= 0; i--) {
//     return arr.map((x) => parseInt(x));
//   }
// }
// // describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.deepEqual(digitize(35231),[1,3,2,5,3]);
//       assert.deepEqual(digitize(0),[0]);
//     });
//   });

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
