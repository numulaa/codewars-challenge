// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

//difference of volumes of cuboids
//   In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
function findDifference(a, b) {
  //loading...
  return Math.abs(
    a.reduce((prev, curr) => prev * curr, 1) - //initial value should be 1, if not it'll be multiply by 0 then te result will always be zero
      b.reduce((prev, curr) => prev * curr, 1)
  );
}
