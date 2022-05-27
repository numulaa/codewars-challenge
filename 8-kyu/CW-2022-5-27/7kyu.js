// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
let number = function (array) {
  //your awesome code here
  if (array.length === 0) {
    return [];
  } else {
    for (let i = 1; i <= array.length; i++) {
      return array.map((x, index, arr) => `${i++}: ${arr[index]}`);
    }
  }
};
//simple way
//it'll be automaticly return empty array
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);
