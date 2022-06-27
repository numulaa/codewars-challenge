//Reversing Words in a String
//"Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
function reverse(string) {
  //your code here
  return string.split(" ").reverse().join(" ");
}
//Hello, Name or World!
// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"
function hello(name) {
  if (!name) {
    return "Hello, World!";
  } else {
    let names = name
      .split("")
      .map((el, i) => (i === 0 ? el.toUpperCase() : el.toLowerCase()))
      .join("");

    return `Hello, ${names}!`;
  }
}
//alternative
const hello = (s) =>
  `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "World"}!`;
