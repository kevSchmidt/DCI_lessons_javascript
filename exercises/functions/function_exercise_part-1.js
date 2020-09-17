// **Exercise 1**
// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13.
// If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.
console.log("------Exercise 1------");
const firstName = "Ali";
const age = 22;
if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age < 30) {
  console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
  console.log(`${firstName} is an adult`);
} else {
  console.log("Oi, put in a valid numeric age!");
}

// **Exercise 2**
// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// 1- Store Mark’s and John’s mass and height in variables.
// 2- Calculate both their BMIs and store their BMIs in variables.
// 3- Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4- Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// 5- Create an if statement which prints the name and BMI of the person with the highest BMI
console.log("------Exercise 2------");
let markHeight = 1.65;
let markMass = 72.5;
let markBmi = markMass / (markHeight * markHeight);
console.log(`The BMI of Mark is ${markBmi}`);

let johnHeight = 1.5;
let johnMass = 65;
let johnBmi = johnMass / (johnHeight * johnHeight);
console.log(`The BMI of John is ${johnBmi}`);

let string = "John has a better BMI than Mark";
if (markBmi < johnBmi) {
  console.log(string);
}
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${string}, it is`);

if (markBmi < johnBmi) {
  console.log("John has the highest BMI");
} else {
  console.log("Mark has the highest BMI");
}

// **FizzBuzz**
// Let’s play mini FizzBuzz! For any given number, if the number is:
// divisible by 3, print “Fizz”.
// divisible by “5", print “Buzz”.
// divisible by both 3 and 5, print “FizzBuzz”.
// That is, if any of the above conditions apply, print the above words instead of the number.
// Otherwise, just print the number.
console.log("------FizzBuzz------");
const x = 10;
if (x % 3 == 0 && x % 5 == 0) {
  console.log("FizzBuzz");
} else if (x % 3 == 0) {
  console.log("Fizz");
} else if (x % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(x);
}
