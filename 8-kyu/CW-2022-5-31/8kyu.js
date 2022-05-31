// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
  // totalPoints will store the accumulated points
  let totalPoints = 0;

  // loop through the games array to get the scores
  for (i = 0; i < games.length; i++) {
    // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
    let xScore = Number(games[i].charAt(0));
    let yScore = Number(games[i].charAt(2));

    // Add points depending on the values of xScore compared to yScore
    if (xScore > yScore) {
      totalPoints += 3;
    }
    if (xScore < yScore) {
      totalPoints += 0;
    }
    if (xScore === yScore) {
      totalPoints += 1;
    }
  }

  return totalPoints;
}
const points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
//i'm thingking of this
function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      //jadi, game itu stringnya
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

//this is my last code
let points = (games) =>
  games
    .map((score) => (score[0] === score[2] ? 1 : score[0] > score[2] ? 3 : 0))
    .reduce((a, b) => a + b);

//     Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += s;
  }
  return str;
}
//using repeat method
let repeatStr = (n, s) => s.repeat(n);
