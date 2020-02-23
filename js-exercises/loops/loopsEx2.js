// **Amplify the Multiples of 4**
// - Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
// For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
// The given integer will always be equal to or greater than 1.
// Include the given number (the number in the parameters).
// **Examples**
// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
console.log("------Amplify------");
const amp = num => {
  let result = [];
  let ampByTen = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) {
      ampByTen = i * 10;
      result.push(ampByTen);
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(amp(25));

// **One is not like the others**
// - Create a function that takes an array of numbers and return the number that’s unique.
// **Examples**
// unique([3, 3, 3, 7, 3, 3]) ➞ 7
// unique([0, 0, 0.77, 0, 0]) ➞ 0.77
// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
console.log("------Unique------");
function unique(arr) {
  let currentValue = 0;
  let current = [];
  let remainder = [];
  for (let i = 0; i < arr.length; i++) {
    if (current.length === 0 || current[0] === arr[i]) {
      current.push(arr[i]);
      currentValue++;
    } else if (current[0] !== arr[i]) {
      remainder.push(arr[i]);
    }
  }
  if (currentValue === 1) {
    return current[0];
  } else {
    return remainder[0];
  }
}
let ar = [1, 1, 1, 1, 4, 1];
console.log(unique(ar));

// **c4n y0u r34d th15?**
// - Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// For your program to work properly, the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
// **Examples**
// hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
// hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
// hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”
console.log("------Hacking------");
const hacking = str => {
  let hackedArray = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArray.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArray.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArray.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArray.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArray.push(letters[i]);
    } else {
      hackedArray.push(letters[i]);
    }
  }
  let result = hackedArray.join("");
  return result;
};
let randomString = "Hello i wanna be a hacker";
console.log(hacking(randomString));

// **Is it Symmetrical?**
// - Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
// NB: A number is symmetrical when it is the same as its reverse.
// **Examples**
// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
console.log("----- Symmetrical------");
function isSymmetrical(num) {
  let numStr = num.toString();
  let result = numStr
    .split("")
    .reverse()
    .join("");
  if (numStr == result) {
    return true;
  } else {
    return false;
  }
}
console.log(isSymmetrical(321123));
console.log(isSymmetrical(12547));
