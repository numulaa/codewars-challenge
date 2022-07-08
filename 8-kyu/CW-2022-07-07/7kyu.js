//Largest pair sum in array
//[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
const largestPairSum = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, c) => a + c);
