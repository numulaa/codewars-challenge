//COPRIME VALIDATOR
// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

// Examples
// 20 and 27:

// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 27: 1, 3, 9, 27
// Greatest shared factor: 1
// Result: 20 and 27 are coprime
// 12 and 39:

// Factors of 12: 1, 2, 3, 4, 6, 12
// Factors of 39: 1, 3, 13, 39
// Greatest shared factor: 3
// Result: 12 and 39 are not coprimes

function isCoprime(x, y) {
  // your code here
  let arr1 = [];
  let arr2 = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      arr1.push(i);
    }
  }
  for (let j = 1; j <= y; j++) {
    if (y % j === 0) {
      arr2.push(j);
    }
  }

  let sameFactors = arr1.filter((elem1) => arr2.indexOf(elem1) !== -1);
  console.log(sameFactors.sort((a, b) => b - a));
  if (sameFactors.sort((a, b) => b - a)[0] === 1) {
    return true;
  } else {
    return false;
  }
}

function isCoprime(x, y) {
  const min = Math.min(x, y);

  for (let i = 2; i <= min; i++) {
    if (x % i === 0 && y % i === 0) {
      return false;
    }
  }

  return true;
}
