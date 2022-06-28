//Mexican Wave
//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// function wave(str){
//   // Code here
//   let newStr= str.split(' ').join('')
//   for(let i=0;i<newStr.length;i++){
//     let newArr = new Array(newStr.length);
//     return newArr.fill(newStr).map( (el, ind, arr) => el.replace(el.charAt(ind),el.charAt(ind).toUpperCase()));
//   }
// }

const wave = (str) =>
  [...str]
    .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
    .filter((x) => x != str);
