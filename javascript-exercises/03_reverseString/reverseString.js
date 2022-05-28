const reverseString = function(string) {
  let tempArray = string.split("");
  let newArray = [];

  tempArray.forEach((character) => {
    newArray.push(character);
  });

  let reversedArray = newArray.reverse();
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
