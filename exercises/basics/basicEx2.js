// 1. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let var1 = "hello";
let var2 = 3;
console.log(var1 + var2);

conc = var1 + var2; // concatenate
console.log(`${var1}${var2}`);
console.log(conc);
console.log(var1 + var2);
// 2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
let w = 30;
w == 30 ? console.log("30 is even") : console.log("odd");

let numOdd = 30 % 2;
console.log(numOdd == 0 ? "is even" : "is odd");

let num101 = 30;
let numOdd2 = num101 % 2;
console.log(numOdd2 == 0 ? `${num101} is even` : `${num101}is odd`);
// 3. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let char1 = var1[0];
let char2 = var1[var1.length - 1];
let shortString = var1.substring(1, var1.length - 1);
console.log(char2 + shortString + char1);

// Nancy's income is 500 Euro per week.
// how much does Nancy makes every year ?
const nancyIncoming = 500 * 52;
console.log(`Nancy salary is ${nancyIncoming} Euro in one year`);

// The number of hours Nancy worked over the last 2 week are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// what is Nancy's average hour ?
let nancyWorkingHours = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log(`Nancy average hour is ${nancyWorkingHours}.`);
