//Maximum Product
//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
function adjacentElementsProduct(array) {
  // max product
  let newArr = array.map((_, i, arr) => arr[i] * arr[i + 1]);
  newArr.pop(); //popped so there's no Nan value wkwkw
  return Math.max(...newArr);
}
