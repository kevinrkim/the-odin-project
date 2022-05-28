const nonLetters = /[\W]+/g;

const snakeCase = function(phrase) {
  const phraseReady = addPeriodToCamelCase(phrase);
  return cleanedUpSnakeCase(phraseReady);
};

const addPeriodToCamelCase = (phrase) => {
  const upperCases = /[A-Z]/g;

  let phraseAdjusted = "";
  if (upperCases.test(phrase) && !nonLetters.test(phrase)) {
    const phraseArray = phrase.split("");
    const camelCaseSeparated = [];
    phraseArray.forEach(char => {
      if (upperCases.test(char)) {
        camelCaseSeparated.push(".");
        camelCaseSeparated.push(char);
      } else {
        camelCaseSeparated.push(char);
      }
    });
    phraseAdjusted = camelCaseSeparated.join("");
  } else {
    phraseAdjusted = phrase;
  }
  return phraseAdjusted;
};

const cleanedUpSnakeCase = (phrase) => {
  const endPunctuation = /[\W_]+$/;
  const beginPunctuation = /^[\W_]+/;

  let snakeCased = phrase.toLowerCase().replace(nonLetters, "_");
  snakeCased = snakeCased.replace(beginPunctuation, "").replace(endPunctuation, "");
  return snakeCased;
};


// Do not edit below this line
module.exports = snakeCase;
