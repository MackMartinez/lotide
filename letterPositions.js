//TEST CODE
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


//ACTUAL CODE
const letterPositions = function(sentence) {
  const results = {};
  //Looping through sentence array
  for (let x = 0; x < sentence.length; x++)  {
    const letter = sentence[x];
    if (!letter.match(/[a-zA-Z]/)) {
    } else if (results[letter]) {
      // results[letter] = results[letter].push(x)
      results[letter].push(x);
    } else {
      results[letter] = [x];
    }
  }
  return results;
};


letterPositions("Hi Macky, Macky");
const hAns = letterPositions("Hi Macky");
// console.log(hAns['H']);
//ASSERT CODE

assertArraysEqual(letterPositions("Hi Macky, Macky").M, [3,10]); // False
assertArraysEqual(hAns['H'], [0]); // True
assertArraysEqual(hAns['H'], [0,2]); // False
assertArraysEqual(hAns, {H: [ 0 ], i: [ 1 ], M: [ 3 ],a: [ 4 ], c: [ 5 ],k: [ 6 ],y: [ 7 ]}); // True