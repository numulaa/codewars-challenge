//find the remainder
function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  return n > m ? n % m : m % n;
}
//Counting sheep...
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//true means present
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  const counter = arrayOfSheep.filter((el) => el === true);
  return counter.length;
}
