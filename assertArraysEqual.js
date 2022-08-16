const eqArrays = function(arrOne, arrTwo) {
  let ans = Boolean(0);
  for (let x = 0; x < arrOne.length; x++) {
    if (arrOne[x] === arrTwo[x]) {
      ans = Boolean(1);
    } else {
      ans = Boolean(0);
    }
  }
  return ans;
};

const assertArraysEqual = function(arrOne, arrTwo) {
if (eqArrays(arrOne, arrTwo) === true){
    console.log("true");
  } else {
    console.log("false");
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false