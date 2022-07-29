//Sum of Multiples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"
function sumMul(n, m) {
  let sum = 0;
  if (m > n) {
    for (let i = n; i < m; i += n) {
      sum += i;
    }
  } else {
    return "INVALID";
  }

  return sum;
}
