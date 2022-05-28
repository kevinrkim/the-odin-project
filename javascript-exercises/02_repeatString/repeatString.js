const repeatString = function(string, num) {
  let newString = [];
  if (num < 0) {
    return "ERROR";
  } else {
    for (i = 0; i < num; i++) {
      newString.push(string);
    }
    return newString.join("");
  }
};

// Do not edit below this line
module.exports = repeatString;
