//return the length of the shortest word
//"Let's travel abroad shall we"), 2
let findShort = (s) => Math.min(...s.split(" ").map((elem) => elem.length));

//find the middle element
// gimme([2, 3, 1]) => 0
// [5, 10, 14], 1
let gimme = (triplet) =>
  triplet.findIndex(
    (elem) => elem > Math.min(...triplet) && elem < Math.max(...triplet)
  );
//this works the same
const gimm = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};
