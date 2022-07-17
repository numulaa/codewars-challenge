//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"
function remove(string) {
  //coding and coding....
  return (
    string
      .split("")
      .filter((el) => el !== "!")
      .join("") + "!"
  );
}
//alternative
//string.split("!").join("") + '!';
