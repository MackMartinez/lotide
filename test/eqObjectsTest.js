const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

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