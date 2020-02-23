// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
function exercise1(str) {
  if (str.includes("JavaScript")) {
    console.log("I know it's crazy 😉");
  }
}
exercise1("I love JavaScript but it drive me crazy");

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// **Examples**
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true
function strWordCheck(str, word) {
  const indexEnd = str.length;
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord.substring(lowerCaseStr, indexEnd) === str) {
    return true;
  } else {
    return false;
  }
}
console.log(strWordCheck("spices", "German food uses spices"));
console.log(strWordCheck("hello", "Hello, World"));

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
const twofer = (who = "you") => {
  return `Two for me and one for ${who}`;
};
console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
// The default `exp` should be set to 2.
// **Example**
// Calling the function with 2 and 4 will return 16 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).
const expo = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
};
console.log(expo(3, 3)); // -> 27
console.log(expo(3)); // -> 9

// Create a function that calculates the user age e.g. 2000 -> 20.
function userAge(num) {
  let year = new Date().getFullYear();
  let userAge = year - num;
  return num < year + 1 && num > 1900
    ? `${year} years old`
    : `Please enter a valid year`;
}
console.log(userAge(1993));

// Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3
function occurrences(string, letter) {
  let str = string.split(letter).length - 1;
  return str;
}
console.log(occurrences("this is a string", "i"));

// Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favorite snack.
// The function should accept two arguments: age and amount per day.
// The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// Example: calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”
function calorie(age, amount) {
  const maxAge = 80;
  let result = ((maxAge - age) * amount * 365).toFixed();
  return `You will need ${result} bars of chocolate (${amount} a day) to last til the age of 80.`;
}
console.log(calorie(25, 2));

// Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices. Number of recipients. How many slices each person gets. Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
function isEqualPieSlices(totalSlices, numOfRecipients, slicesPerPerson) {
  const neededSlices = numOfRecipients * slicesPerPerson;
  return totalSlices >= neededSlices;
}
console.log(isEqualPieSlices(8, 3, 2));
console.log(isEqualPieSlices(11, 5, 3));

// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number.
function exercise1(str) {
  let result = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      result += 1;
    }
  }
  return result;
}
console.log(exercise1("Hello world i am kevin"));

// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy’s age in human years.
// Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”
const dogAge = puppyAge => {
  let result = puppyAge * 7;
  if (puppyAge > 0 && puppyAge < 25) {
    return `Your doggo is ${result} years old in dog years!`;
  } else {
    return `Please enter a valid age.`;
  }
};
console.log(dogAge(4));
console.log(dogAge(26));

//  Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.
function div(a, b) {
  console.log(a % b);
}
const div1 = function(a, b) {
  console.log(a % b);
};
const div2 = (a, b) => a % b;
div(4, 2);
div1(3, 5);
div2(4, 2);

// Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value.
// Reassign the variable within the function and print “My favorite fruit is: x”.
let fruits = "apple";
function printFavoriteFruit() {
  fruit = "Banana";
  console.log(`My favorite fruit is ${fruit}`);
}
printFavoriteFruit();

// Multiply a Number by Itself: Create a function named exponent that takes two numbers as parameters.
// The second parameter defines how many times the first number should be multiplied by itself.
// Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible?
// Why/Why not? Comment your answer in the index.js file.
function exponent(num, exponential) {
  let result = 0;
  let multi = num * num;
  for (let i = 0; i < exponential; i++) {
    result += multi;
  }
  return result;
}
console.log(exponent(2, 4));
