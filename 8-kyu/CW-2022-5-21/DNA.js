
//DNA to RNA (change every 'T" to "U")
let DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((str) => (str === "T" ? "U" : str))
    .join("");

//     Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check

function getGrade (s1, s2, s3) {
    // Code here
    let average = (s1 + s2 + s3)/3;
    if(average >= 90 && average <=100){
      return 'A';
    } else if (average>=80 && average< 90){
        return 'B';
    }else if (average>=70 && average< 80){
      return 'C';
    }else if(average>= 60 && average<70){
      return 'D';
    }else{
      return 'F';
    }

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
// A few cases:
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// let isDivideBy = (number, a, b) => ((number % a === 0) && (number % b === 0)) ? true: false;
// console.log(isDivideBy(25,10,5));

