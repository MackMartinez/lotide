
//Test code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


//function definition
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
  



// Asertion code - arrays in objects

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log("eqObjects with arrays: ", eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log("eqObjects with arrays: ", eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);

// //Assertion code - Primitive values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log("eqObjects: ", eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log("eqObjects: ", eqObjects(ab, abc)); // => false