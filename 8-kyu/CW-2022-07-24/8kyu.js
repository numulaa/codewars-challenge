//kata example twist
//Add the value "codewars" to the array websites/Websites 1,000 times.
const websites = new Array(1000).fill("codewars");

//SpeedCode #2 - Array Madness
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const arrayMadness = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);

//Smallest unused ID
// (nextId([0,1,2,3,5]), 4);
// (nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
function nextId(ids) {
  for (let i = 0; i <= ids.length; i++) {
    if (!ids.includes(i)) return i;
  }
}
