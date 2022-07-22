//The falling speed of petals
// the distance = 400cm
// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
const sakuraFall = (v) => (v > 0 ? 400 / v : 0);

//Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val) {
  if (!val) return "false";
  else return "true";
}
//alternative
// function trueOrFalse(val){
//     return Boolean(val).toString();
//   }

//Find out whether the shape is a cube
let cubeChecker = function (volume, side) {
  return volume > 0 ? side ** 3 === volume : false;
};
