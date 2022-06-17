//reverse list orders
const reverseList = (list) => list.reverse();

//Grasshopper - Messi goals function
//return total goals
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//remove exclamation marks
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((elem) => elem !== "!")
    .join("");
}
