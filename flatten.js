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

const flatten = function(arr) {
  let flattened = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      flattened = flattened.concat(arr[x]);
    } else {
    // console.log(arr[x]);
      flattened.push(arr[x]);
    }
  }
  return flattened;
};

// Test Assertions
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
