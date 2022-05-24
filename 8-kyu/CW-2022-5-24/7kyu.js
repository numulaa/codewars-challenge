//Complementary DNA
function DNAStrand(dna) {
  //your code here
  return dna
    .split("")
    .map((str) => {
      if (str === "T") {
        return "A";
      } else if (str === "A") {
        return "T";
      } else if (str === "C") {
        return "G";
      } else if (str === "G") {
        return "C";
      }
    })
    .join("");
}
//another way to solve the Complementary DNA
//make object of pairs
const pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}

//Reversed Sequence
const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
//another way
const reverseSeq = (n) => {
  return Array(n) //make an array consist of n elements which the values are empty
    .fill(0) //fill the array with 0 so it's not empty anymore
    .map((e, i) => n - i); //generate new array starts from the n to 1; it's n-0, n-1, n-2, ...
};

//Filtering the strings
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((elem) => typeof elem === "number");
}

//sum array items without the max and min value, if the array is empty, null, or just have one item, should return 0
function sumArray(array) {
  if (array === null || array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    let total = 0;
    for (let i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
let sumArray = (a) =>
  a
    ? a
        .sort((x, y) => x - y)
        .slice(1, -1)
        .reduce((s, e) => s + e, 0)
    : 0;
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0;
}
