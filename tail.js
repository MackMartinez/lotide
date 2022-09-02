const assertEqual = require('./assertEqual');

const tail = (array) => {
  let tailArr = array.slice(1);
  return tailArr;
};

module.exports = tail;