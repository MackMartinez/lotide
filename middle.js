//Test/Assertion functions

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      
      return false;
    }
  }
  return true;
};


// ACTUAL FUNCTION
const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("true");
  } else {
    console.log("false");
  }
};

const middle = function(arr) {
  let answerMiddleArray = [];
  let middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return answerMiddleArray;
  } if (arr.length % 2 !== 0) {
    answerMiddleArray.push(arr[middleIndex]);
    return answerMiddleArray;
  } else {
    answerMiddleArray.push(arr[middleIndex - 1]);
    answerMiddleArray.push(arr[middleIndex]);
    return answerMiddleArray;
  }
};

middle([1,2,3,4,5,6,7,8,9]);

//TEST CODE

assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[5]); //true
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]),[6]); //false
assertArraysEqual(middle([0,1]), []); //true
assertArraysEqual(middle([0,1]), [1,0]); //false
assertArraysEqual(middle([0,1,3,4]), [1,3]); //true