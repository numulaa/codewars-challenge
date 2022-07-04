//Training JS #5: Basic data types--Object
//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//and return a string like this:
//"This white dog has 4 legs."
function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}
//Do you speak "English"?
//The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
function spEng(sentence) {
  //write your code here

  return sentence.toLowerCase().includes("english");
}

//Vowel remover
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut(string) {
  return string
    .split("")
    .filter(
      (el) => el !== "a" && el !== "i" && el !== "u" && el !== "e" && el !== "o"
    )
    .join("");
}
//same
// function shortcut(str) {
//     return str.split('').filter(function(e) {
//       return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
//     }).join('')
//   }

//The Wide-Mouthed frog!
//Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide
function mouthSize(animal) {
  // code here
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
