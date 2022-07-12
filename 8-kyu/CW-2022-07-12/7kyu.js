//Jaden Casing string
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

//Isograms
//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//"Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str) {
  //...
  let arr = str.toLowerCase().split("");
  let set1 = [...new Set(arr)].join("");

  return set1.length === str.length;
}
//simple
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
