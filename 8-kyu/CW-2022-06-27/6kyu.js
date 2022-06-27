//Data Reverse
//Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
// (byte1)   (byte2)   (byte3)   (byte4)
// should become:
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

//  The total number of bits will always be a multiple of 8.

// The data is given in an array as such:
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
function dataReverse(data) {
  // Your code here
  const result = [];
  for (let i = 0; i < data.length; i += 8) {
    const newData = data.slice(i, i + 8);
    result.push(newData);
  }
  return [].concat(...result.reverse());
}
//more simple
const dataReverse = (data) => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};

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
