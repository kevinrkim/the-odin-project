const palindromes = function (word) {
  let simplified = word.replace(/\W/g, "").toLowerCase();
  const wordReversed = simplified.split("").reverse().join("");
  return (simplified == wordReversed);
};

// Do not edit below this line
module.exports = palindromes;
