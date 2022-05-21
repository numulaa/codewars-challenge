// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//reduce method
function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
//use filter method
function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
}

/*********  DEFINE A CARD SUITS ********/
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  // good luck
  if (card.charAt(card.length - 1) === "♣") {
    return "clubs";
  } else if (card.charAt(card.length - 1) === "♦") {
    return "diamonds";
  } else if (card.charAt(card.length - 1) === "♥") {
    return "hearts";
  } else if (card.charAt(card.length - 1) === "♠") {
    return "spades";
  }
}
