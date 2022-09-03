// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(sentence) {
  let ansCounter = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (ansCounter[letter]) {
        ansCounter[letter] += 1;
      } else {
        ansCounter[letter] = 1;
      }
    }
  }
  console.log(ansCounter);
  return ansCounter;
};

module.exports = countLetters;

// countLetters("Macky Martinez");
