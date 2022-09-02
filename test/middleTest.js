const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("returns [5] for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
  });
  it("returns [] for [0,1]", () => {
    assert.deepEqual(middle([0,1]), []);
  });
});

