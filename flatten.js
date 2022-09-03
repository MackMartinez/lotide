const flatten = function(arr) {
  let flattened = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      flattened = flattened.concat(arr[x]);
    } else {
    // console.log(arr[x]);
      flattened.push(arr[x]);
    }
  }
  return flattened;
};


module.exports = flatten;


