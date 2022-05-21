// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"  SETIAP KATA YG DIBALIK, JADI BUKAN KALIMATNYA YG DIBALIK
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  let splitSpace = str.split(" "); //SPLIT SETIAP SPASI
  let splitted = splitSpace.map((x) => x.split("").reverse()); //SPLIT SETIAP HURUF DAN ME-REVERSE
  let joinedArrElem = splitted.map((elem) => elem.join("")); //JOIN SEMUA HURUF
  return joinedArrElem.join(" "); //JOIN DENGAN SPASI ATAU JOIN SATU KALIMAT
}

// let reverseWords = (str) =>
//   str.split(" ").map((x) =>
//     x
//       .split("")
//       .reverse()
//       .map((elem) => elem.join("")) //ADA MASALAH => ELEM.JOIN IS NOT A FUNCTION????
//       .join(" ")
//   );
