// A game of table tennis almost always sounds like Ping! followed by Pong!
// Therefore, you know that Player 2 has won if you hear Pong!as the last sound
// (since Player 1 didn't return the ball back).
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
// If win equals true, end the list with Pong!. If win equals false, end with Ping! instead.
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// You will always return the ball (i.e. the Pongs are yours). Player 1 serves the ball and makes Ping!.
// Return an array of strings.
console.log("-> pingPong function :");
const pingPong = (arr, win) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]) + result.push(" Pong!");
  }
  if (win) {
    return result;
  } else {
    result.pop();
    return result;
  }
};
console.log(pingPong(["Ping!"], true));
console.log(pingPong(["Ping!", "Ping!"], false));
console.log(pingPong(["Ping!", "Ping!", "Ping!"], false));

// const pingPongBido = (arr, win) => {
//   let result = [];
//   arr.forEach(element => {
//     result.push(element) + result.push("Pong");
//   });
//   return win ? result : result.slice(0, result.length - 1);
// };

// Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
// Example
// reverseString(2019) -> ERROR! This is not a string!
console.log("-> reverseString function :");
function reverseString(str) {
  try {
    if (typeof str !== "string") {
      throw `ERROR! This is not a string!`;
    } else {
      newStr = str
        .split("")
        .reverse()
        .join("");
      console.log(newStr);
    }
  } catch (err) {
    console.log(err);
  }
}
reverseString(2019);
reverseString("Hello");

// Create a function that takes in a year and returns the correct century.
// century(1756) ➞ "18th century"
// century(1555) ➞ "16th century"
// century(1000) ➞ "10th century"
// century(1001) ➞ "11th century"
// century(2005) ➞ "21st century"
// console.log("-> century function :");
console.log("-> century function :");
function century(num) {
  year = num.toString();
  if (year.endsWith("00")) {
    console.log(`${Math.floor(num / 100)}th century`);
  } else if (num < 2000) {
    console.log(`${Math.floor(num / 100 + 1)}th century`);
  } else {
    console.log(`${Math.floor(num / 100 + 1)}st century`);
  }
}
century(1756);
century(1555);
century(1000);
century(1001);
century(2005);

// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step.
// See step 1, 2 and 3 in the image above.
// Examples
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436
// Notes
// Step 0 returns 0 matchsticks.
// The input (step) will always be a non-negative integer.
console.log("-> matchHouses function :");
function matchHouses(num) {
  if (num === 1) {
    return 6;
  } else {
    return num * 5 + 1;
  }
}
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.
// Examples:
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
console.log("-> missingNums function :");
function missingNums(arr) {
  let result = 0;
  for (let i = 1; i < 11; i++) {
    if (!arr.includes(i)) {
      result = i;
    }
  }
  return result;
}
console.log(missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log(missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
