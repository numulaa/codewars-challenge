//Enumerable Magic #3 - Does My List Include This?
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
const include = (arr, item) => arr.includes(item);

//Regular Ball Super Ball
// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType; //=> "regular"
// ball2.ballType; //=> "super"

class Ball {
  constructor(ballType) {
    this._ballType = ballType;
  }
  get ballType() {
    return !this._ballType ? "regular" : this._ballType;
  }
}
//simple
let Ball = function (ballType) {
  this.ballType = ballType || "regular";
};
