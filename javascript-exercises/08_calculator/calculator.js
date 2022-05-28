const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(nums) {
  let answer = 1;
  nums.forEach(num => {
    answer *= num;
  });
  return answer;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
 };

const factorial = function(num) {
	if (num == 0) {
    return 1;
  }
  let answer = num;
  for (i = num - 1; i > 0; i--) {
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
