Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.



function sumMix(x){
    let sum = 0; //HARUS DI DALAM FUNCTION AGAR HASILNYA TIDAK MENJUMLAHKAN SEMUA NILAI YG DICALL
    let numX = x.map(i => Number(i));
    console.log(numX);
    numX.forEach(a => sum+= a)
    return sum;

}

//LEBIH SIMPLE
function sumMix(x){
    let sum = 0;
    x.forEach(a => sum+= Number(a));
    return sum;
  }

  //PAKE REDUCE()
  function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }