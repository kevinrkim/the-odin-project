const removeFromArray = function(array, ...args) {
  args.forEach((remove) => {
    if (array.indexOf(remove) >= 0) {
      let position = array.indexOf(remove);
      array.splice(position, 1);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
