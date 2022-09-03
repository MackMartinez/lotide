const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


describe("#findKeyByValueTest", () => {
  it("returns drama for findKeyByValue(bestTVShowsByGenre, The Wire)", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for findKeyByValue(bestTVShowsByGenre, Peaky Blinders)", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Peaky Blinders"), undefined);
  });
})

// //Assertion testing
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Peaky Blinders"), undefined);