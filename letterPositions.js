//ACTUAL CODE
const letterPositions = function(sentence) {
  const results = {};
  //Looping through sentence array
  for (let x = 0; x < sentence.length; x++)  {
    const letter = sentence[x];
    if (!letter.match(/[a-zA-Z]/)) {
    } else if (results[letter]) {
      // results[letter] = results[letter].push(x)
      results[letter].push(x);
    } else {
      results[letter] = [x];
    }
  }
  return results;
};


module.exports = letterPositions;

