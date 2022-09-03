const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjectsTest", () => {
  it("returns true for eqObjects(cd, dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns false for eqObjects(cd, cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});



// // //Assertion code - Primitive values
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// console.log("eqObjects: ", eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log("eqObjects: ", eqObjects(ab, abc)); // => false