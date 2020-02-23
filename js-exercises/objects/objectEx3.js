// **Check if a number is within a given range**
// - Write a program that checks if a number is within the range of an object's min and max properties.
// Assume min <= max is always true.
// 4, { min: 0, max: 5 }) ➞ true
// 4, { min: 4, max: 5 }) ➞ true
// 4, { min: 6, max: 10 }) ➞ false
// 5, { min: 5, max: 5 }) ➞ true
console.log("------Range------");
function givenRange(num, obj) {
  return num <= obj.max && num >= obj.min;
}
console.log(givenRange(4, { min: 0, max: 5 }));
console.log(givenRange(4, { min: 0, max: 5 }));
console.log(givenRange(4, { min: 6, max: 10 }));
console.log(givenRange(5, { min: 5, max: 5 }));

// **Champion**
// - Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// **Example**
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 },  { tile: "D", score: 2 },
// { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
console.log("----Champion----");
function title(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].score; // sum the values of my array
  }
  return result;
}
console.log(
  title([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ])
);

// **Is it an empty object?**
// - Write a program that returns true if an object is empty, and false if otherwise.
// **Examples**
// {} ➞ true {a: 1} ➞ false
console.log("------Empty object------");
function emptyObj(arr) {
  return Object.keys(arr).length == 0;
}
console.log(emptyObj({}));
console.log(emptyObj({ a: 1 }));

// **Free Shipping**
// - Create a function that determines whether an online order should get free shipping.
// An order gets free shipping if the total cost of items exceeds €50.
// **Examples**
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
console.log("------Free Shipping------");
function freeShipping(obj) {
  let result = 0;
  let objValues = Object.values(obj); // get only values of my object
  // console.log(values);
  for (let i = 0; i < objValues.length; i++) {
    result += objValues[i]; // sum all values of my object
    return result > 50;
  }
}
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log(
  freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })
);

// **Programming Object**
// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true",
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
// **Bonus**
// In a comment, explain what is printed if we console.log an object method without calling it and why.
// Make sure that any other code cannot delete or change properties of the object.(need Google)
console.log("------Programing Object------");
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
  printOut: function() {
    if (
      programming.isChallenging === true &&
      programming.isRewarding === true
    ) {
      return `Learning the ${programming.languages} is rewarding and challenging.`;
    }
    return printOut(); // nothing because the function is not called
  }
};
// 1. Write the command to add the language "Go" to the end of the languages array.
console.log("part 1:");
programming.languages.push("Go");
console.log(programming.languages);
// 2. Change the difficulty to the value of 7.
console.log("part 2:");
programming.difficulty = 7;
console.log(programming.difficulty);
// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
console.log("part 3:");
delete programming.jokes;
console.log(programming);
// 4. Write a command to add a new key called isFun and a value of true to the programming object.
console.log("part 4:");
programming["isFun"] = true;
console.log(programming);
// 5. Using a loop, iterate through the languages array and console.log all of the languages.
console.log("part 5:");
for (let i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}
// 6. Using a loop, console.log all of the keys in the programming object.
console.log("part 6:");
for (let i in programming) {
  console.log(i);
}
// 7. Using a loop, console.log all of the values in the programming object.
console.log("part 7:");
for (let key in programming) {
  console.log(programming[key]);
}
// Bonus
Object.freeze(programming);
