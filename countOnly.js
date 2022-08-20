// test code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems,itemsToCount) {
//My initial considerations for steps to take
//read allItems for items in object
//set a var that counts value based on boolean value in object
// build object with final count values
// return object with final count values

  let results = {};
  for (const item of allItems) {
    for (const keyName in itemsToCount) {
      if (item === keyName) {
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    }
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], 1);