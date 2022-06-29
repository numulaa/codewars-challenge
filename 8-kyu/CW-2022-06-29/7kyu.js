//predict your age
// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // your code
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  return Math.floor(
    Math.sqrt(arr.map((el) => el * el).reduce((a, c) => a + c, 0)) / 2
  );
}
//alternative using Math.hypot(), it returns the sqrt of the sum of squared items
const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0;
