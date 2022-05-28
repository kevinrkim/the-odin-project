const caesar = function(string, shift) {
  const inputToUnicode = convertToUnicode(string);
  const shiftedUnicode = shiftCipher(inputToUnicode, shift);
  let shiftedOutput = [];
  shiftedUnicode.forEach(char => {
    shiftedOutput.push(String.fromCharCode(char));
  });
  return shiftedOutput.join("");
};

const convertToUnicode = (string) => {
  const inputToArray = string.split("");
  const inputToUnicode = [];
  inputToArray.forEach(char => {
    inputToUnicode.push(char.charCodeAt(0));
  });
  return inputToUnicode;
};

const shiftCipher = (unicode, shift) => {
  let adjustedShift = shift % 26;
  let shiftedArray = [];
  unicode.forEach(char => {
    if (char >= 65 && char <= 90) {
      if (char + adjustedShift < 65) {
        let carousel = (char - 64) + adjustedShift;
        shiftedArray.push(90 + carousel);
      } else if (char + adjustedShift > 90) {
        let carousel = char + adjustedShift - 91;
        shiftedArray.push(65 + carousel);
      } else {
        shiftedArray.push(char + adjustedShift);
      }
    } else if (char >= 97 && char <= 122) {
      if (char + adjustedShift < 97) {
        let carousel = (char - 96) + adjustedShift;
        shiftedArray.push(90 + carousel);
      } else if (char + adjustedShift > 122) {
        let carousel = char + adjustedShift - 123;
        shiftedArray.push(97 + carousel);
      } else {
        shiftedArray.push(char + adjustedShift);
      }
    } else {
      shiftedArray.push(char);
    }
  });
  return shiftedArray;
};

// Do not edit below this line
module.exports = caesar;
