//break the camelCase
//newString => 'new String'
//fungsi => 'fungsi'
//'' => ''
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
const solution = (string) => {
  return [...string]
    .map((elem) => {
      return elem === elem.toUpperCase() ? ` ${elem}` : elem;
    })
    .join("");
};
