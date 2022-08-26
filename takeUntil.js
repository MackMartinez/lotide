//testing functions

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




//implement takeUntil
const takeUntil = function(array, callback) {
  // ...
  let newArr = [];
  for (const arr of array) {
    if (callback(arr) === true) {
      return newArr;
    } else if (callback(arr) === false) {
      newArr.push(arr);
    }
  }
  return newArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log("--- assert arrays equal below ---");

assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]); // true
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Macky' ]); // false
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'Hollywood' ]); // false