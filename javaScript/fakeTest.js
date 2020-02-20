//------------------------------------------------------------first-fake-test---------------------------------------------------------------//

// Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays:
// one for the keys of the object and the other for the values of the object.
console.log("-> Exercise1 :");
function exercise1(obj) {
  return Object.keys(obj), Object.values(obj);
}
console.log(
  exercise1({
    name: `Carl`,
    lastName: `Vita`
  })
);

// * Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
// Examples:
// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true
console.log("-> Where is Waldo :");
function isWaldoHere(str) {
  let newStr = str.toLowerCase();
  return newStr.includes("waldo");
}
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

// * isPrime? Create a function that returns true if a number is prime and false if it's not.
// NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors:
// itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples:
// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false
console.log("isPrime :");
const isPrime = value => {
  let i = 2;
  while (i < value) {
    if (value % i === 0) {
      return false;
    }
    i++;
  }
  return value > 1;
};
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));

// * For the longest word. Create a function to find the longest word in a given string.
// i.e. longestWord("this is a web development course") ➞ "development"
// console.log("longestWord :");
console.log("-> longestWord :");
const longestStr = arg => {
  const originalArr = arg.split(" ");
  let lengthArr = [];
  let indexBigger = 0;
  for (let i = 0; i < originalArr.length; i++) {
    lengthArr.push(originalArr[i].length);
  }
  indexBigger = lengthArr.indexOf(Math.max(...lengthArr));
  return originalArr[indexBigger];
};
console.log(longestWord("this is a web development course"));
