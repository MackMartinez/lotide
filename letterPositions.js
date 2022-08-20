const letterPositions = function(sentence) {
  const results = {};
for (const letter of sentence){
  console.log(sentence.indexOf(letter));
}
console.log(results);
  return results;
}

letterPositions("Hi Macky");