// Create a variable with the value of “123”. Convert it to a number.
let var1 = "123";
console.log(parseInt(var1));

// Create a variable with the value of “130.7". Convert it to a number.
let var2 = "130.7";
console.log(parseFloat(var2));

// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
isDog = true;
console.log(isDog ? "pat, pat" : "find me a dog to pat!");

// Declare a variable named speedCheck. If speed limit is 50km/h, and your speed is above that, print ‘you’re going too fast!’.
// If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
speedCheck = 85;
speedLimit = 50;
console.log(
  speedCheck > speedLimit
    ? "you re going to fast!"
    : "you re driving below the speed limit"
);

// Declare a named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
age = 17;
console.log(age < 16 ? "serve butter beer" : "serve beer");

// Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
isStudent = true;
console.log(isStudent ? "Ticket costs €5.00" : "Ticket costs €12.00");

// Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
okMarie = "I like banana express";
console.log(okMarie.includes("cake") ? "let them eat cake" : "oh, bother");

// 1. Minimum and maximum
// a. Lowest Number : Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));
// b. Highest Number : Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));
// 2. Rounding
// a. Round up : Round up the following numbers: 3321, 326.76, -9.78, 43.342.
console.log(Math.floor(326.76));
// b. Round down : Round down the following numbers: 3321, 326.76, 76788.7, -9.78.
console.log(Math.ceil(326.76));
// 3. Dice Roll! Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6) + 1);
