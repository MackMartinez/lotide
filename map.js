//Assert codes
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

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log("true");
  } else {
    console.log("false");
  }
};

//implement map
const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


module.exports = map;

const results1 = map(words, word => word[0]);

console.log(results1);

//test assertions

assertArraysEqual(results1, ['g','c','t','m','t']); //true
assertArraysEqual(results1, ['g','c','t','m','k']); //false
assertArraysEqual(results1, []); //false
