// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  const firstCatDogYears = 15;
  const secCatDogYears = 9;
  const catYearsAfter = 4;
  const dogYearsAfter = 5;
  let humanCatYears;
  let humanDogYears;
  if (humanYears === 1) {
    humanCatYears = firstCatDogYears;
    humanDogYears = firstCatDogYears;
  } else if (humanYears === 2) {
    humanCatYears = firstCatDogYears + secCatDogYears;
    humanDogYears = firstCatDogYears + secCatDogYears;
  } else {
    humanCatYears = (humanYears - 2) * 4 + firstCatDogYears + secCatDogYears;

    humanDogYears = (humanYears - 2) * 5 + firstCatDogYears + secCatDogYears;
  }
  return [humanYears, humanCatYears, humanDogYears];
};

//BETTER WAY
const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
//   describe("Example Tests", function() {

//     it("one", function() {
//       Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
//     });

//     it("two", function() {
//       Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
//     });

//     it("ten", function() {
//       Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//     });

//   });
