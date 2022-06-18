//Odd or Even
// Given a list of integers, determine whether the sum of its elements is odd or even.
const oddOrEven = (array) =>
  array.reduce((a, c) => a + c, 0) % 2 === 0 ? "even" : "odd";
