const fibonacci = function(number) {
  let place = parseInt(number);
  if (place < 0) {
    return "OOPS";
  } else if (place == 0) {
    return 0;
  } else if (place == 1) {
    return 1;
  } else {
    let previousNumber = 1;
    let sum = 1;
    for (i = 2; i < place; i++) {
      sum += previousNumber;
      previousNumber = sum - previousNumber;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
