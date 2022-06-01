//traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
let updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

//multiplication with Math.imul()
let billboard = (name, price = 30) => Math.imul(name.split("").length, price);
function billboard(name, price = 30) {
  return name.split("").reduce((sum, letter) => sum + price, 0);
}

//max and min value
let min = (list) => {
  let sorted = list.sort((a, b) => a - b);
  return sorted[0];
};

let max = (list) => {
  let sorted = list.sort((a, b) => a - b);
  return sorted[list.length - 1];
};
//or
let min = (list) => Math.min(...list);
let max = (list) => Math.max(...list);

//return a new areay that orders the element based on the length, form the shortest to longest
let sortByLength = (array) => array.sort((a, b) => a.length - b.length);
