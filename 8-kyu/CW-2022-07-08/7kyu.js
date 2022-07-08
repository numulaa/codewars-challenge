//Vowel Count
function getCount(str) {
  return str
    .split("")
    .filter(
      (el) => el === "a" || el === "i" || el === "u" || el === "e" || el === "o"
    ).length;
}

//No oddities here
function noOdds( values ){
    // Return all non-odd values
    return values.filter(x => x%2===0);
  }