//Capitalization and mutability
//change the first letter to uppercase
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
const capitalizeWord = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase());

//How many stairs will Suzuki climb in 20 years?
// describe("Basic tests",() =>{
//     var sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7825],
//     monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719, 9387],
//     tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292, 7703],
//     wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 9493],
//     thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197, 8701],
//     friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 5127],
//     saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 9085];
//     var stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
//       it("Should pass Basic tests",() => {
//         assert.strictEqual(stairsIn20(stairs), 54636040);
//       })
//     })
function stairsIn20(s) {
  //your code here
  let eachDay = s.map((elem) => elem.reduce((acc, curr) => acc + curr));
  return eachDay.reduce((acc, curr) => acc + curr) * 20;
}
//this works the same
function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
//short long short
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
//('Soon', 'Me'), 'MeSoonMe'
let solution = (a, b) => (a.length > b.length ? b + a + b : a + b + a);

//remove one of the axclamation marks
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
let remove = (string) =>
  string[string.length - 1] === "!"
    ? string.slice(0, string.length - 1)
    : string;
//this worksthe same
function remove(s) {
  return s.charAt(s.length - 1) == "!" ? s.substr(0, s.length - 1) : s;
}
