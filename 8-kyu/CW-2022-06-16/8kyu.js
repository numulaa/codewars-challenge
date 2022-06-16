//Exclusive "or" (xor) Logical Operator
// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
//true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
const xor = (a, b) => (a !== b ? true : false);
//a lot
const xor = (a, b) => a !== b;

//Hex to Decimal
const hexToDec = (hexString) => parseInt(hexString, 16); //the radix 16 indicates to convert hexadecimal to decimal
