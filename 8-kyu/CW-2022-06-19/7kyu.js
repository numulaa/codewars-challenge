//count the digit
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  // your code
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  let newArr = arr
    .map((elem) => Math.pow(elem, 2))
    .join("")
    .split("")
    .filter((elem) => elem === d.toString());
  return newArr.length;
}
//other way
function nbDig(n, d) {
  let o = "";
  for (let i = 0; i <= n; i++) {
    o += Math.pow(i, 2);
  }
  return o.split(d).length - 1;
}

//get the middle character
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
function getMiddle(s) {
  //Code goes here!
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else if (s.length % 2 !== 0) {
    return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
  } else {
    return s;
  }
}
//this is simple
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1); //why rhis isn't using math.floor
}
//alternative using sibstr()
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//two fighters one winner\
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

// Lew attacks Harry; Harry now has 3 health.
// Harry attacks Lew; Lew now has 6 health.
// Lew attacks Harry; Harry now has 1 health.
// Harry attacks Lew; Lew now has 2 health.
// Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }

  if (fighter1.health <= 0 && fighter2.health <= 0) return firstAttacker;
  else if (fighter1.health <= 0) return fighter2.name;
  else return fighter1.name;
}
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}
