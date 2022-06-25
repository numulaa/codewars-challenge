//Sum of Minimums!
//[[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9
function sumOfMinimums(arr) {
  // your code here
  return arr.map((el) => Math.min(...el)).reduce((a, c) => a + c, 0);
}
//simple
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

//The Coupon Code
// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const months = {
      January: 1,
      February: 2,
      March:3,
      April:4,
      May: 5,
      June:6,
      July:7,
      August: 8,
      September: 9,
      October:10,
      November: 11,
      December:12
    }
    if(enteredCode === correctCode){
      if(months[currentDate.split(' ')[0]] === months[expirationDate.split(' ')[0]] && currentDate.split(' ')[2] === expirationDate.split(' ')[2]){
        return currentDate.split(' ')[1] === expirationDate.split(' ')[1];
      } else if(months[currentDate.split(' ')[0]] < months[expirationDate.split(' ')[0]] && currentDate.split(' ')[2] <= expirationDate.split(' ')[2]){
        return true;
      } else if(currentDate.split(' ')[2] < expirationDate.split(' ')[2]){
        return true;
      }else {
        return false;
      }
    }else {
      return false;
   }

   //alternative
   function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }
  function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
  }

  //Square Every Digit
  //For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
  function squareDigits(num){
    return Number(num.toString().split('').map(el => Number(el)**2).join(''));
  }