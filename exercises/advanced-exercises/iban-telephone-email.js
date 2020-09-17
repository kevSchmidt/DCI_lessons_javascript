// **Validate Email**
// - Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.
console.log("------Validate Email------");
function validate(email) {
  let atSymbolPosition;
  let dotPosition;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atSymbolPosition = i;
    }
    if (email[i] === ".") {
      dotPosition = i;
    }
  }
  if (atSymbolPosition > 0 && dotPosition > atSymbolPosition) {
    return `${email} is valid.`;
  } else {
    return `${email} is invalid.`;
  }
}
console.log(validate("kevin-schmidt@gmail.com"));
console.log(validate("@kev-schmidt.com"));

// **Phone numbers**
// - Create a function that receive a text from user and check if the user has entered a phone number, and print that out.
// **Note**
// Phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number.
console.log("------Phone numbers version1------");
function exercise3(str) {
  string = str.toLowerCase().split(" "); // console.log(string);
  const prefix = ["030", "017"];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[i].includes(prefix[j])) {
        let newNumber = string[i].slice(3, 10); // console.log(newNumber);
        if (newNumber.length !== 7 || isNaN(newNumber)) {
          return `No number found`;
        } else {
          return prefix[j] + newNumber;
        }
      }
    }
  }
}
console.log(exercise3("Hello I am Kevin and my num is 0171234567"));

// Version 2
console.log("------Phone numbers version2------");
const phone = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstThreeDigits = strToArr[i].slice(0, 3);
    if (firstThreeDigits == "030" || firstThreeDigits == "017") {
      if (isNaN(strToArr[i]) || strToArr[i].length !== 10) {
        result = `This is not a valid phone number ${strToArr[i]}`;
        counter++;
      } else if (strToArr[i].length == 10) {
        result = `The phone number is ${strToArr[i]}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `This is no phone number`;
  }
  return result;
};
console.log(phone("Hi my 030221A398 number is "));
console.log(phone("I have a phone number 030221221"));

// **Bank account**
// - Write a function that checks whether the user has entered a valid German bank account.
// **Note**
// German bank accounts should starts with  DExxxxxxxxxxxxxxxxxxxx and has 20 number.
console.log("------Bank account------");
const bankChecker = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    let remainderStr = strToArr[i].slice(2, strToArr[i].length);
    //console.log(remainderStr);
    if (firstTwoChr == "de") {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a valid bank account ${strToArr[i]}`; // found "de" but no valid account -> counter up
        counter++;
      } else if (remainderStr.length == 20) {
        result = `The bank account is DE${remainderStr}`; // found a valid account -> counter up
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `There was no bank account in the text`; // counter = 0 -> no valid conditions
  }
  return result;
};
console.log(bankChecker("Hi my bank account is DE12222222232222222222"));
console.log(bankChecker("I have bank DE221"));
