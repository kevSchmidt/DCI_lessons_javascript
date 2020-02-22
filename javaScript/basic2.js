// ****BASIC****

// ++ += -- -=
let num1 = 1;
num1 = num1 + 1; // 1 + 1 = 2
num1 += 4; // 2 + 4 = 6

// Increment
num1++;
++num1;

// Decrement
num1--;
--num1;

// !isNaN()
let int1 = 2;
console.log(!isNaN(int1) ? "It is a number" : "It is not a number");

// Converting string into number : parseInt(), parseFloat()
let strInt = "17";
let newNum = parseInt(strInt, 10); // 10 for decimal base
console.log(newNum);

let float = "10.07855";
let realFloat = parseInt(float);
console.log(realFloat);

// Modulo
let lastNum = 4 % 2; // rest = 0
console.log(lastNum);

// Exponentiation
let power = 2 ** 2;
console.log(power);

// Math.floor()
let float1 = 1.4;
let realIni = Math.floor(float1);
console.log(realIni); // down

// Math.ceil()
let realIni2 = Math.ceil(float1);
console.log(realIni2); // up

// Math.max()
console.log(Math.max(1, 3, 4, 66, 700));

// Math.min()
console.log(Math.min(1, 4, 22, 0.2));

// Math.random()
console.log(Math.floor(Math.random() * 10) + 1);

// ternary condition ? exprIfTrue : exprIfFalse
let kid = 22;
kid > 16 ? console.log("Go Party") : console.log("Stay Home");
let drive = 17;
drive > 18 ? console.log("Yeah drive now") : console.log("Don't drive now");

// Conditional assignment with ternary operator
let kids = 2;
console.log(kids > 16 ? "Party" : "Home");

// = vs == vs ===
console.log(1 == 1 ? "it's equal" : "not equal"); // = assignation, == value, === value and type

// && ||
let var1 = 1 > 4; // false
let var2 = false;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "not cool"); // and
console.log(var1 || var2 || var3 ? "cool" : "not cool"); // or

// Boolean inversion with !
console.log(1 !== 10); // is 1 not equal to 10 ?

// givenName || firstName || "Abc"
console.log("Abc");
let givenName, firstName;
firstName = "Hadi";
console.log(givenName || firstName || "Abc"); // givenName is undefined so its false, firstName is the first value to come
