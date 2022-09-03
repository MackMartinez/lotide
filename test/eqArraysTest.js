const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([\"1\",\"2\", \"3\"], [\"1\", \"2\", 3])", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});

//Test code
// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false
// eqArrays([1, 2, 3], [3, 2, 3]); // => true


// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 3, 3]), false);