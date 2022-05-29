//name shuffler
// "john McClane" --> "McClane john"
let nameShuffler = (str) => str.split(" ").reverse().join(" ");

//parse nice int from char problem
function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  return parseInt(inputString.charAt(0));
}

//alternative
let getAge = (inputString) => inputString[0];
console.log(getAge("4 years old")); //expected 4
