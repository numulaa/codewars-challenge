//Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
function high(x) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const words = x.split(" ");
  const scores = words
    .map((x) => [...x].map((y) => alphabets.indexOf(y) + 1))
    .map((x) => x.reduce((a, b) => a + b, 0));
  return words[scores.indexOf(Math.max(...scores))];
}
