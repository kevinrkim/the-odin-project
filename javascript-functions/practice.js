const add7 = (number) => {
  console.log(number + 7);
}

const multiply = (num1, num2) => {
  console.log(num1 * num2);
}

const capitalize = (string) => {
  let capitalized = string.charAt(0).toUpperCase();
  let remainder = string.slice(1,string.length);
  console.log(capitalized + remainder);
}

const lastLetter = (string) => {
  console.log(string.charAt(string.length - 1));
}

add7(4);
multiply(5,6);
capitalize("this is a test");
lastLetter("spark");