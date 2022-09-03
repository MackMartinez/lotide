const eqArrays = require('./eqArrays');

//function definition
const eqObjects = function(object1, object2) {
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  if (keyObj1.length !== keyObj2.length) {
    return false;
  } else {
    for (const keys1 of keyObj1) {
      // console.log(object2[keys1]);
      if (Array.isArray(object1[keys1]) && Array.isArray(object2[keys1])) {
        const arrayEql = eqArrays(object1[keys1],object2[keys1]);
        if (arrayEql === false) {
          return false;
        }
      }
      else if (object1[keys1] !== object2[keys1]) {
        return false;
      }
    }
    return true;
  }
};
  
module.exports = eqObjects;



