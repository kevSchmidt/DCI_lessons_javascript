// 1 Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let string = "I can walk in the park all day!";
let subString = string.substring(18, 22);
console.log(subString);

// 2 Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let string2 = "Hello World";
let upString = string2.toUpperCase(0);
console.log(upString);

// 3 Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let string3 = "Earthlings";
let lowerString = string3.toLowerCase(0);
console.log(lowerString);

// 4 Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let string4 = "JavaScript";
let subStr = string4.substring(3, 6);
console.log(subStr);

// 5  Check if the sentence “nice shoes” contains the letter l.
let string5 = "Nice shoes";
let sentenceCheck = string5.includes("l");
console.log(sentenceCheck);

// 6 Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
let name = "Kevin";
let add = name.substring(0, 1);
console.log(add + name + add);
let add2 = name[0];
console.log(add2 + name + add2);

// 7 Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let string7 = "JavaScript";
let add3 = string7.slice(string7.length - 3);
console.log(add3 + string7 + add3);

// 8 Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
let newVariable = "this is text";
let newVariableUpper = newVariable.toUpperCase(0);
console.log(newVariableUpper);
let javaCheck = newVariableUpper.includes("Java");
console.log(javaCheck);

// 9 Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1.
let string9 = "hi this is long text and i do know";
let firstCharacter = string9[0];
let lastCharacter = string9[string9.length - 1];
let newString = string9.substring(1, string9.length - 1);
console.log(lastCharacter + newString + firstCharacter);

// 10 Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let myName = "Kevin";
let myAge = 26;
let myCity = "Berlin";
console.log(
  `Hey I am ${myName}, I am ${myAge} years old and I live in ${myCity} and it's going well so far.`
);

// 11 Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let variable = "the quick brown fox";
let firstChar = variable[0].toUpperCase();
let updatedString = variable.slice(1);
console.log(firstChar + updatedString);
