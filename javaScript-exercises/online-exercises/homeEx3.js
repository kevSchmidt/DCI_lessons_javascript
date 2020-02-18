// - Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).
// The function looks like: findBrokenKeys(correct phrase, what you actually typed)
// **Notes**
// 1. Broken keys should be ordered by when they first appear in the sentence.
// 2. Only one broken key per letter should be listed.
// 3. Letters will all be in lower case.
// **Examples**
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

const findBrokenKeys = (correctArg, arg) => {
  // we want the result in an array
  let result = [];

  // we loop inside the length of the correct phrase
  for (let i = 0; i < correctArg.length; i++) {
    // we compare letter by letter the correct phrase and what is actually typed
    if (arg[i] !== correctArg[i]) {
      // we check if a letter is already in our result array
      if (!result.includes(correctArg[i])) {
        // we push this letter if not already present
        result.push(correctArg[i]);
      }
    }
  }
  return result;
};

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));

// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
// Examples
// inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// }) ➞ 10
const inkLevels = obj => {
  let values = Object.values(obj);
  return Math.min(...values);
};
console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10
  })
);
console.log(
  inkLevels({
    cyan: 432,
    magenta: 543,
    yellow: 777
  })
);
console.log(
  inkLevels({
    cyan: 700,
    magenta: 700,
    yellow: 0
  })
);

// Create a function that takes a string and returns a string in which each character is repeated once.
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "
const doubleChar = str => {
  array = [];
  for (i = 0; i < str.length; i++) {
    array.push(str[i].repeat(2));
  }
  let result = array.join("").toString();
  return result;
};
console.log(doubleChar("String"));
console.log(doubleChar("Hello World!"));
console.log(doubleChar("1234!_ "));

// ### Bonus Magic Square:
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15.
// Here's an example:
// 8 1 6
// 3 5 7
// 4 9 2
// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.
// #### Examples:
// [8, 1, 6, 3, 5, 4, 7, 9, 2] -> true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] -> true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] -> false
// C -> false
console.log("magicSquare:");
const magicSquare = arr => {
  return (
    arr.length === 9 &&
    arr[0] + arr[1] + arr[2] === 15 &&
    arr[3] + arr[4] + arr[5] === 15 &&
    arr[6] + arr[7] + arr[8] === 15 &&
    arr[0] + arr[3] + arr[6] === 15 &&
    arr[1] + arr[4] + arr[7] === 15 &&
    arr[2] + arr[5] + arr[8] === 15 &&
    arr[0] + arr[4] + arr[8] === 15 &&
    arr[2] + arr[4] + arr[6] === 15
  );
};
console.log(magicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]));
console.log(magicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]));
console.log(magicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]));
console.log(magicSquare("c"));
