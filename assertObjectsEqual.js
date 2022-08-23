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

const eqObjects = function(object1, object2) {
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  if (keyObj1.length !== keyObj2.length) {
    return false;
  } else {
    for (const keys1 of keyObj1) {
      // console.log(object2[keys1]);
      if (Array.isArray(object1[keys1]) && Array.isArray(object2[keys1])) {
        const arrayEql = eqArrays(object1[keys1],object2[keys1]);
        if (arrayEql === false) {
          return false;
        }
      }
      else if (object1[keys1] !== object2[keys1]) {
        return false;
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if (actual !== expected){
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}` );
  }

}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(eqObjects(cd,dc), true);