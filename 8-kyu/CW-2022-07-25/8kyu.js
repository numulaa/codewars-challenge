//Gravity Flip
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
const flip = (d, a) => {
  return d === "R" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
};

//Is this my tail?
// ("Fox", "x"), true;
// ("Rhino", "o"), true;
function correctTail(body, tail) {
  return body.substr(-1) === tail;
}

//Dollars and Cents
//39.99 becomes $39.99
//3.1 needs to become $3.10
const formatMoney = (amount) => `$${amount.toFixed(2)}`;

//Grasshopper - Array Mean
const findAverage = (nums) => nums.reduce((a, c) => a + c, 0) / nums.length;
