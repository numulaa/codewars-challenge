//Sum without highest and lowest number
//If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  return array === null || array === undefined || array.length <= 1
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, c) => a + c, 0);
}

//Do I get a bonus?
//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}
