//A wolf in sheep's clothing
//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
//[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
// 7      6      5      4      3            2      1
//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
  return queue.indexOf("wolf") === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - (queue.indexOf("wolf") + 1)
      }! You are about to be eaten by a wolf!`;
}
//
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}
