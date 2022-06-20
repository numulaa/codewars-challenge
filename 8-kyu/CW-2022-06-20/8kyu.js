//Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
// combat(100, 5), 95;
// (combat(20, 30), 0, "Health cannot go below 0")
function combat(health, damage) {
  // Write your code here
  return damage > health ? 0 : health - damage;
}

//How many lightsabers do you own?
// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):
// "anyone else" --> 0
// "Zach" --> 18
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

//Correct the mistakes of the character recognition software
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
//correct("51NGAP0RE"),"SINGAPORE")
function correct(string) {
  return string
    .split("")
    .map((elem) =>
      elem === "1" ? "I" : elem === "0" ? "O" : elem === "5" ? "S" : elem
    )
    .join("");
}

//You only need one - Beginner
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
  return a.includes(x);
}
