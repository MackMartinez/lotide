const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');


//TEST CODE

assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[5]); //true
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[6]); //false
assertArraysEqual(middle([0,1]), []); //true
assertArraysEqual(middle([0,1]), [1,0]); //false
assertArraysEqual(middle([0,1,3,4]), [1,3]); //true