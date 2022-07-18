//Fix string case
//solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
function solve(s) {
  //..
  let upper = s.split("").filter((el) => el === el.toUpperCase());
  let lower = s.split("").filter((el) => el === el.toLowerCase());
  return upper.length > lower.length ? s.toUpperCase() : s.toLowerCase();
}
