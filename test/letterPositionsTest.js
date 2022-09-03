const assert = require('chai').assert
const letterPositions = require('../letterPositions')


//ASSERT CODE
describe("#letterPositions", () => {
  it("returns false for letterPositions(Hi Macky, Macky).M, [3,10]", () => {
    assert.deepEqual(letterPositions("Hi Macky, Macky").M, [3,10], false);
  });
});

// assertArraysEqual(hAns['H'], [0]); // True
// assertArraysEqual(hAns['H'], [0,2]); // False
// assertArraysEqual(hAns, {H: [ 0 ], i: [ 1 ], M: [ 3 ],a: [ 4 ], c: [ 5 ],k: [ 6 ],y: [ 7 ]}); // True