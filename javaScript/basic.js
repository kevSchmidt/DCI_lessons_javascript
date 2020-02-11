// maths expressions
console.log(1 * 4);

// boolean expressions
console.log(1 >= 4);

// variables
let x = 3;
let str = "this is text";
let c = true;
var newVar = 0;
const z = 15;

// camelCase
let firstName = "Kevin";

// typeof()
let name = "kevin";
console.log(typeof name);

// .length
let lastName = "Schmidt";
console.log(lastName.length);

// Str(0)
console.log(lastName[0]);
console.log(lastName[6]);
lastName[0] == "S" ? console.log("Yes it is S") : console.log("No it is not S");
let email = "12345678@gmail.com";
console.log(email[8]);

// .substring()
let string = "this is longe string";
let shortStr = string.substring(string.length - 6);
console.log(shortStr);
let restOfStr = string.substring(8);
console.log(restOfStr);
let subStr = string.substring(5, 17);
console.log(subStr);

// .toUpperCase()
let string2 = name.toUpperCase();
console.log(string2);

// .toLowerCase()
let smallStr = string2.toLowerCase();
console.log(smallStr);
let userName = "kEvIn";
let firstChr = userName[0].toUpperCase();
let restOfNameChr = userName.substring(1).toLowerCase();
console.log(firstChr + restOfNameChr);

// .includes()
let text = firstName.includes("ho");
let emailCheck = email.includes("@");
console.log(text);
console.log(emailCheck);

// .slice()
let shortStr2 = string.slice(5);
console.log(shortStr2);

// .trim()
let str5 = "    Hadi                        ";
console.log(str5.trim());

// .toFixed(number after coma)
let floatNum = 0.1;
let floatNum2 = 0.2;
console.log((floatNum * floatNum2).toFixed(3));

// `his §{firstName}`
let adress = "Salzbrunner str. 17, Berlin";
let niceText = `Hi, I am ${firstName} and I live in ${adress}, my door has my family name ${lastName} on it.`;
console.log(niceText);

// Global vs local
var globalVar = "this is global";
function sum() {
  let localVar = "this is local";
  console.log(globalVar);
  console.log(localVar);
}
sum();
console.log(globalVar);
function sub() {
  let localVar = "this is local";
  console.log(globalVar);
  console.log(localVar);
}
