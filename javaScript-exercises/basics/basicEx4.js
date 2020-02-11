// A math student scored 75, 70, 85, 90, 100 on the first five tests he took .
// After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
let s1 = 75;
let s2 = 70;
let s3 = 85;
let s4 = 90;
let s5 = 100;
let scores = 85 * 6;
let sixthScored = scores - (s1 + s2 + s3 + s4 + s5);
console.log(`Score in the sixth test: ${sixthScored}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%.
// What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
// Expected output: James needs a minimum of --% to get an 80% average.
const totalScore = 80 * 9;
const currentAvg = 78 * 8;
let diffTotal = totalScore - currentAvg;
console.log(`James needs a minimum of ${diffTotal} to get 80% average.`);

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let num1 = 50;
let num2 = 105;
if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
  console.log("True");
}

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let num3 = 37;
if (
  (num1 > 50 && num1 < 99) ||
  (num2 > 50 && num2 > 99) ||
  (num3 > 50 && num3 > 99)
) {
  console.log("True");
}

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console.
// Then change the values of the variables to see if your conditional still works.
let a = 2;
let b = 51;
let c = 12;
console.log(Math.max(a, b, c));

// Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.
let string = "Python";
if (string.substring(0, 2) === "Py") {
  console.log(string);
}

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sum = a + c;
if (sum > 50 && sum < 80) {
  console.log("65");
} else {
  console.log("80");
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let int = 3;
let int2 = 5;
let numDiff = Math.abs(int - int2);
console.log(numDiff);
let numSum = int + int2;
if (numSum == 8 || numDiff == 8) {
  console.log(true);
}
// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let int3 = 5;
let int4 = 10;
let intSum = int3 + int4;
if (int3 == 15 || int4 == 15 || intSum == 15) {
  console.log(true);
}

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let int5 = 27;
let int6 = 33;
let int5div7 = int5 / 7;
let int5div11 = int6 / 11;
let int6div7 = int6 / 7;
let int6div11 = int6 / 11;

let number1 = 1;
let number2 = 7;
if (
  number1 % 7 == 0 ||
  number2 % 7 == 0 ||
  number1 % 11 == 0 ||
  number2 % 11 == 0
) {
  console.log(true);
}

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let int7 = 4;
let int8 = 3;
let numTrip = (int7 + int8) * 3;
if (int8 === int7) {
  console.log(numTrip);
}

// Calculate the difference between a specified number and 19. Print double the difference if the number is greater than 19.
let number = 3;
let numberDiff = Math.abs(num1 - 19);
let numberDO = numberDiff * 2;
if (numberDiff > 19) {
  console.log(numberDO);
}
