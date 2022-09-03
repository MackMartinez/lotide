//Actual code

const findKeyByValue = function(objInput,value) {
  const keyArr = Object.keys(objInput);
  for (let x = 0; x < keyArr.length; x++) {
    if (objInput[keyArr[x]] === value) {
      console.log(keyArr[x]);
      return keyArr[x];
    }
  }
};


module.exports = findKeyByValue;
