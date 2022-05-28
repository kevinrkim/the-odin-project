function pigLatin(string) {
  const stringToArray = string.split(" ");
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const translatedArray = [];

  stringToArray.forEach(word => {
    const firstHalfRegex = /[aeiou]+[\s\S]*$/i;
    const secondHalfRegex = /^[^aeiou]+/g;
    if (vowels.includes(word.charAt(0))) {
      translatedArray.push(`${word}ay`);
    } else {
      let resultArray = secondHalfRegex.exec(word);
      if (resultArray[0].charAt(resultArray[0].length - 1) == "q") {
        secondHalf = word.replace(/^[^aeio]+/g, "");
        firstHalf = word.replace(/[aeio][\s\S]+/i, "");
      } else {
        secondHalf = word.replace(secondHalfRegex, "");
        firstHalf = word.replace(firstHalfRegex, "");
      }
      translatedArray.push(`${secondHalf}${firstHalf}ay`);
    }
  });

  return translatedArray.join(" ");
};
  
// Do not edit below this line
module.exports = pigLatin;
