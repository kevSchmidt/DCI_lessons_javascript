// Pig Latin Translation.
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds ‘ay’ to the end of the word.
// This is a basic form of “Pig Latin”.
// 1. Move the first letter of each word to the end of the word.
// 2. Add “ay” to the end of the word.
// 3. Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// Extra Practice : Preserve proper capitalization as in the examples below.
// Examples:
// 1. pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// 2. pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// 3. pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

function pigLatin(parameter) {
  let translation = [];
  const vowels = ["a", "e", "i", "o", "u"];
  let splitString = parameter.toLowerCase().lowerCase.split(" ");
  for (i = 0; i < splitString.length; i++) {
    let firstCharacter = splitString[i][0];
    let remainder = splitString[i].slice(1, splitString[i].length);
    if (vowels.includes(firstCharacter)) {
      const firstCharValue = i
        ? firstCharacter
        : firstCharacter + remainder + "way"; // i = 0 -> false, otherwise true [round 2: false]
      translation.push(firstCharValue);
    } else {
      if (i == 0) {
        let firstCharRemainder = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRemainder.toUpperCase() + wordRemainder;
      }
    }
    const newString = remainder + firstCharacter + "ay";
  }
  let result = translation.join(" ");
  return result;
}
const stringPig = "Cats are great pets";
console.log(pigLatin(stringPig));

// Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

function printValue(x, y) {
  if (typeof x == "number" && typeof y == "number") {
    let result = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
      result *= x;
      values += `${result} `;
    }
    return values;
  } else {
    console.log("One of your variable is not a number");
  }
}
console.log(printValue(2, 6));

// snake_case ➞ camelCase! Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
//  Examples:
// toCamelCase(“hello_world”) ➞ “helloWorld”
// toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”

const toCamelCase = string => {
  let splitStr = string.split("_");
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstCharacter, restOfString;
    if (splitStr[i] == splitStr[0]) {
      camelArray.push(splitStr[0]);
      continue;
    } else {
      firstCharacter = splitStr[i].slice(0, 1);
      restOfString = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstCharacter.toUpperCase() + restOfString;
    camelArray.push(newWord);
  }
  let result = camelArray.join("");
  return result;
};
console.log(toCamelCase("snack_log_hi"));
