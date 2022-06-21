//Grasshopper - Messi Goals
//creates variables based on the dataprovided and make another variable to sum all of the data;
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//count on positive, count on negative
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
let countPositivesSumNegatives = (input) =>
  input && input.length
    ? [
        input.filter((x) => x > 0).length,
        input.filter((y) => y < 0).reduce((a, c) => a + c, 0),
      ]
    : [];

//calculate bmi
function bmi(weight, height) {
  let bmiCalc = weight / (height * height);
  return bmiCalc <= 18.5
    ? "Underweight"
    : bmiCalc <= 25.0
    ? "Normal"
    : bmiCalc <= 30.0
    ? "Overweight"
    : "Obese";
}
