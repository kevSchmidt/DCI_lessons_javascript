// **Longest Sequence of Consecutive Zeroes**
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.
// ** Examples**
// longestZero("01100001011000") ➞ "0000"
// longestZero("100100100") ➞ "00"
// longestZero("11111") ➞ ""
// NB. If no zeroes exist in the input, return an empty string.
console.log("Exercise: Longest Sequence of Consecutive Zeroes");

const longestZero = str => {
  // we split the string at each 1
  let splitStr = str.split("1");
  // we sort our array to have the longest length at index 0
  return splitStr.sort((a, b) => b.length - a.length)[0]; // sort for numbers: sort((a,b)=> b - a)
};
console.log(longestZero("01100001011000"));
console.log(longestZero("100100100"));
console.log(longestZero("11111"));

// **Flash Cards**
// -Create a function that outputs the results of a flashcard. A flashcard is an array of three elements:
// a number, an operator symbol, and another number. Return the mathematical result of that expression.
// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division).
// If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined.
// For division, round to the hundredths place. So [10, "/", 3] should return 3.33.
// **Examples**
// flash([3, "x", 7]) ➞ 21
// flash([5, "+", 7]) ➞ 12
// flash([10, "-", 9]) ➞ 1
// flash([10, "/", 0]) ➞ undefined
// flash([10, "/", 3]) ➞ 3.33
// **Notes**
// Flash cards contain only zero or positive numbers.
console.log("Exercise: Flash Cards");

const flash = arr => {
  // we create our variables for our operations
  let div = arr[0] / arr[2];
  let multi = arr[0] * arr[2];
  let sum = arr[0] + arr[2];
  let sub = arr[0] - arr[2];

  // we check the symbol of the given array
  if (arr[0] < 0 || arr[2] < 0) {
    return `You enter a negative num dumbass!`;
  } else {
    if (arr[1] === "x") {
      return multi;
    } else if (arr[1] === "+") {
      return sum;
    } else if (arr[1] === "-") {
      return sub;
    } else if (arr[1] === "/" && arr[0] !== 0 && arr[2] !== 0) {
      // we also check that the division doesn't include 0
      return div.toFixed(2);
    }
  }
};
console.log(flash([3, "x", 7]));
console.log(flash([5, "+", 7]));
console.log(flash([10, "-", 9]));
console.log(flash([10, "/", 0]));
console.log(flash([10, "/", 3]));
console.log(flash([3, "x", -7]));

// ### Bonus Tetris:
// The pieces you are given in a game of Tetris are not randomly selected. Instead, all seven pieces are placed into a "bag." A piece is randomly removed from the bag and presented to the player until the bag is empty. When the bag is empty, it is refilled and the process is repeated for any additional pieces that are needed.
// In this way, it is assured that the player will never go too long without seeing a particular piece.
// The pieces are as follows:
// O, I, S, Z, L, J, T
// #### Task:
// Output a string signifying 50 tetromino pieces given to the player using the random bag system.
// #### Examples:
// LJOZISTTLOSZIJOSTJZILLTZISJOOJSIZLTZISOJTLIOJLTSZO
// OTJZSILILTZJOSOSIZTJLITZOJLSLZISTOJZTSIOJLZOSILJTS
// ITJLZOSILJZSOTTJLOSIZIOLTZSJOLSJZITOZTLJISTLSZOIJO
// They do not need to be in one line.
console.log("Exercise: Tetris");

letters = ["O", "I", "S", "Z", "L", "J", "T"];
function tetris(x) {
  random = [];
  newLine = 7;
  for (let i = 1; i <= 49; i++) {
    random += letters[Math.floor(Math.random() * letters.length)];
    if (random.length == newLine) {
      random += "\n";
      newLine += 8;
    }
  }
  return random;
}
console.log(tetris(letters));

// 5. FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where
// all occurences of its first character have been replaced with '*', except for the first character itself.
// Examples:
// fixStart("babble") -> "ba**le"
// fixStart("people") -> "peo*le"
// fixStart("nonsense") -> "no*se*se"
console.log("Exercise: fixStart");
const fixStart = str => {
  let splitString = str.split("");
  let firstLetter = splitString[0];
  let restStr = splitString.slice(1, splitString.length);

  for (let i = 0; i < splitString.length; i++)
    if (restStr[i] == firstLetter) {
      restStr[i] = "*";
    }
  return firstLetter + restStr.join("");
};
//-----------------------------------//
const fixStart2 = string => {
  const array = string.split("");
  for (let i = 1; i < array.length; i++) {
    letter = "b";
    array[i] = array[i].replace(letter, "*");
  }
  return array.join("");
};

console.log(fixStart("babble"));
console.log(fixStart("people"));
console.log(fixStart("nonsense"));

// **Is Johnny Making Progress?**
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday.
// He wants to track how often the number of miles he runs this Saturday exceeds the number
// of miles run the previous Saturday. This is called a progress day.
// Create a function that takes in an array of miles run every Saturday and returns Johnny's total
// number of progress days.
// **Examples**
// progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)
// progressDays([10, 11, 12, 9, 10]) ➞ 3
// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
// progressDays([9, 9])  ➞ 0
// **Notes**
// Running the same number of miles as last week does not count as a progress day.
console.log("Exercise: progressDays");
const progressDays = array => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      counter++;
    }
  }
  return counter;
};
console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays([9, 9]));

// **Who's The Oldest?**
// Given an object containing the names and ages of a group of people, return the name of the oldest person.
// **Notes**
// All ages will be different.
// **Examples**
// oldest({
//   Emma: 71,
//   Jack: 45,
//   Amy: 15,
//   Ben: 29
// }) ➞ "Emma"
// oldest({
//   Max: 9,
//   Josh: 13,
//   Sam: 48,
//   Anne: 33
// }) ➞ "Sam"
// **Notes**
// All ages will be different.
console.log("Exercise: oldest");
const oldest = obj => {
  // we create our variables
  let nums = 0;
  let name = "";
  // we ordered our object into an nested array
  let orderedObj = Object.entries(obj);
  for (let i = 0; i < orderedObj.length; i++) {
    if (orderedObj[i][1] > nums) {
      // we push result in our nums and names in our string array
      nums = orderedObj[i][1];
      // console.log(nums);
      name = orderedObj[i][0];
    }
  }
  return name;
};
console.log(
  oldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 89
  })
);
console.log(
  oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 53
  })
);

//---------------------------------------------//

const oldest2 = obj => {
  let biggerNumber = Math.max(...Object.values(obj));
  return Object.keys(obj).find(keyWeNeed => obj[keyWeNeed] === biggerNumber);
};
console.log(
  oldest2({
    Max: 9000,
    Josh: 1437,
    Sam: 488,
    Anne: 339
  })
);

// **Contact List**
// -Write a sorting function that takes in an array of names and sorts them by last name either
// alphabetically (ASC) or reverse-alphabetically (DESC).
// **Notes**
// An array with a single name should be trivially returned.
// An empty array, or an input of null or undefined should return an empty array.
// **Examples**
// sortContacts([
//   "John Locke",
//   "Thomas Aquinas",
//   "David Hume",
//   "Rene Descartes"
// ], "ASC") ➞ [
//   "Thomas Aquinas",
//   "Rene Descartes",
//   "David Hume",
//   "John Locke"
// ]
// // Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

// sortContacts([
//   "Paul Erdos",
//   "Leonhard Euler",
//   "Carl Gauss"
// ], "DESC") ➞ [
//   "Carl Gauss",
//   "Leonhard Euler",
//   "Paul Erdos"
// ]
// // Gauss (G) > Euler (EU) > Erdos (ER)
// sortContacts([], "DESC") ➞ []
// sortContacts(null, "DESC") ➞ []
// sortContacts(undefined, "DESC") ➞ []
