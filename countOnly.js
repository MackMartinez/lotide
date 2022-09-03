const countOnly = function(allItems,itemsToCount) {
//My initial considerations for steps to take
//read allItems for items in object
//set a var that counts value based on boolean value in object
// build object with final count values
// return object with final count values

  let results = {};
  for (const item of allItems) {
    for (const keyName in itemsToCount) {
      if (item === keyName) {
        if (results[item]) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
      }
    }
  }
  console.log(results);
  return results;
};


module.exports = countOnly;

