//How old will I be in 2099?
function calculateAge(yearOfBirth, yearToCount) {
  // enter your code here.
  let result = yearToCount - yearOfBirth;
  return result === 1
    ? `You are ${result} year old.`
    : result > 1
    ? `You are ${result} years old.`
    : result === 0
    ? `You were born this very year!`
    : result === -1
    ? `You will be born in ${Math.abs(result)} year.`
    : `You will be born in ${Math.abs(result)} years.`;
}
