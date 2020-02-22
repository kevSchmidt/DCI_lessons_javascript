// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".

const welcome = (name, age, address, ...activities) => {
  result = "";
  array = activities;
  message = "You are cool !";
  intro = `Welcome ${name}, you are still on this earth after ${age} years and live in ${address}. `;
  if (array.includes("dance") || array.includes("party")) {
    result = intro + message;
  } else {
    result = intro + `You should use more time for your hobbies: ${array}.. `;
  }
  return result;
};
console.log(welcome("Julia", 27, "Berliner str. 22", "cooking", "cinema"));
console.log(welcome("Kevin", 24, "Salzbrunner str. 17", "soccer", "dance"));

// Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Return a boolean value (true or false). The string can contain any character.
// When neither an x nor an o is in the string, return true. Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

function checkIf(word) {
  let smallLetters = word.toLowerCase();
  let os = smallLetters.split("o").length - 1;
  let xs = smallLetters.split("x").length - 1;
  if (os == xs) {
    return true;
  } else {
    return false;
  }
}
console.log(checkIf("ooxx"));

//or

function XO(str) {
  const lowerCaseStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (lowerCaseStr[i] === "x") {
      countX++;
    } else if (lowerCaseStr[i] === "o") {
      countO++;
    }
  }
  if (countX === 0 && countO === 0) {
    return `${true}: there is no instance of either "x" or "o"`;
  } else if (countX === countO) {
    return `${true}: we have the same number of "x" and "o"`;
  } else if (countX !== countO) {
    return `${false}: panic stations, we do not have the same number of "x" and "o"`;
  }
}
console.log("XO");
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

const sevenBoom = arr => {
  let array = arr.join("");
  // console.log(array);
  if (array.includes(7)) {
    return `Boom`;
  } else {
    return `there is no 7 in the array`;
  }
};
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
