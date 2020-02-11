// <!-- ----------------------------------------------- -->
// <!-- -------------------Functions------------------- -->
// <!-- ----------------------------------------------- -->

// function which print Kevin when called
function display(str) {
  console.log(str);
}
display("Kevin");

// sum function
function sum(x, y) {
  return x + y;
}
let operation = sum(2, 4);
console.log(operation);

// function with age limit
function age(x) {
  if (x <= 17) {
    return "you are too young for this";
  } else {
    return "let go";
  }
}
console.log(age(20));

// function which print values >= 5
const numbers = [2, 4, 5, 6, 10];
function arrayBig(array) {
  let result = array.filter(num => num >= 5);
  return result;
}
console.log(arrayBig(numbers));

// function which print values in the array with 4 letters
const names = ["Ali", "Hadi", " Nancy", "Olga"];
function fourArrayCharacter(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(fourArrayCharacter(names));

// function which print values with O as first letter
function characterWithO(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(characterWithO(names));

// month function with switch
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function nameOfMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      console.log("This is not a num.");
  }
  return result;
}
console.log(nameOfMonth(2));
console.log(nameOfMonth(20));

// month function with if else
function nameOfTheMonthEasyVersion(num) {
  let result = "";
  let newNum = num - 1;
  if (num >= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "Sorry, it is not a month";
  }
  return result;
}
console.log(nameOfTheMonthEasyVersion(11));

// reverse array function
const name = ["Hadi", "Kevin", "Taka", "Martin"];
function nameReverse(arr) {
  let newArray = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("")
      .reverse()
      .join("");
    newArray.push(str);
  }
  return newArray;
}
console.log(nameReverse(name));
