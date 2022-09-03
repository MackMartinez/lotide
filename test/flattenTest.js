
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// Test Assertions
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
