// Answer Sheet - all answers should go here

// # Test - Programming Basics
// ## Test Instructions
// - Work from the `index.js` file provided in this repository.
// - Follow all of the instructions below to complete the test.
// - **Important**: Make sure that the names of your variables/functions match the names in the instructions below.
// - Print solutions to the console where specified.
// - Make sure to commit and push your test.
// - Good luck 🍀
// ### Data Structure
// #### Objects

// ##### 1. Key Pair Values
// - Create an object called "profileData". Add four key pair values to the object: name, surname, age and city.
const profileData = {
  name: `Schmidt`,
  surname: `Kevin`,
  age: 27,
  city: `Berlin`
};

// ##### 2. Object to Array
// - Convert an object into a nested array of key pair values. Look the example below.
// **Given Object**
// myObj = {
//   "1": 10,
//   "2": 20,
//   "3": 30
// };
// **Expected Output**:
// [
//   ["1", 10],
//   ["2", 20],
//   ["3", 30]
// ];
console.log("   Exercise: objectToArray");
const convertObjectToArray = obj => {
  newArray = [];
  for (let key in obj) {
    newArray.push([key, obj[key]]);
  }
  return newArray;
};
console.log(convertObjectToArray(profileData));

// #### Arrays
// ##### 1. Data Manipulation
// - Create a function named "_convertArrayData_". Use array methods to manipulate the data the array below.
// The first two items in the array should switch positions and the third item should be replaced by a new item.
// Change the data to get the result below. Print your solution to the console.
// **Original Array** ["coffee", "tea", "juice"];
// **Expected output** ["tea", "coffee", "milk"];
console.log("   Exercise: convertArrayData");
let arrayTest = ["coffee", "tea", "juice"];
const convertArrayData = array => {
  array.pop(array[2]);
  array.push(array[0]);
  array.pop(array[0]);
  array.push(`milk`);
  return array;
};
console.log(convertArrayData(arrayTest));

// ##### 2. Create Grid (Optional)
// - Create a function called "createGrid", which returns a grid of a 2D array by accepting
// two arguments: `size` (which determines the number of nested arrays and the number of
// elements in each nested array) and `char` (which determines the characters in each nested array).
// Print your solution to the console.
// **Create Grid Function Call** createGrid(3, "*");
// **Expected Output**
// [
//   ["*", "*", "*"],
//   ["*", "*", "*"],
//   ["*", "*", "*"]
// ];
console.log("   Exercise: createGrid");
const createGrid = (size, item) => {
  array = [];
  for (let i = 0; i < size; i++) {
    array[i] = [];
    for (let j = 0; j < size; j++) {
      array[i].push(item);
    }
  }
  return array;
};
console.log(createGrid(4, "*"));

// ##### 3. Word Converter
// - Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to
// the end of each string in the array.
// Look at the expected output below. **Important**: Do **not** use a loop to complete this task.
// Print your solution to the console.
// **Array of words**  ["smart", "kind", "sweet", "small", "clear"];
// **Expected output** ["smarter", "kinder", "sweeter", "smaller", "clearer"];
console.log("   Exercise: wordConverter");
const wordConverter = string => {
  return string.map(item => item + `er`);
};
console.log(wordConverter(["smart", "kind", "sweet", "small", "clear"]));

// ##### 4. Hour Calculation
// - Create a function called "_calculateHours_" which calculate how many hours (total) this person worked
// in the week based on the data structure `hourTracking` below. **Note**: start is always morning time, end is
// always afternoon. Print your solution to the console.
// **Working Hours**
// const hourTracking = [
//   { day: "Monday", start: 8, end: 17 },
//   { day: "Tuesday", start: 9, end: 15 },
//   { day: "Wednesday", start: 10, end: 18 },
//   { day: "Thursday", start: 7, end: 14 },
//   { day: "Friday", start: 6, end: 12 }
// ];
// **Expected Output**  36;
console.log("   Exercise: calculateHours");
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];
const calculateHours = () => {
  let result = 0;
  for (let i = 0; i < hourTracking.length; i++) {
    workingDay = hourTracking[i].end - hourTracking[i].start;
    result += workingDay;
  }
  return result;
};
console.log(calculateHours(hourTracking));

// #### Classes
// - Create a blueprint for a course at DCI - using the `class` syntax in javascript. The class
// should be named "Course" The class should contain who the teacher is, whether the group is learning marketing or
// web development and the number of students taking the course.
// - The class should also have a method named "spaceNeeded" that checks how big a classroom should be depending on
// the number of students taking the course: 1 student = 2m². E.g. If a course has 10 students,
// then print: "_The classroom should be 20m²._". Print your solution to the console.
// - Create a method named "details" to print all the information of the course: "This is a web development course
// taught by Ali. There are 10 students taking the course.\_". Print your solution to the console.
// Please use the phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc.
// **Expected Output**
// course.spaceNeeded();
// `The classroom should be 44m².`;
// course.details();
// `This is a web development course taught by Ali. There are 22 students taking the course.`;
console.log("   Exercise: classes");
class Course {
  constructor(_teacherName, _learning, _student) {
    this.teacherName = _teacherName;
    this.learning = _learning;
    this.student = _student;
  }
  spaceNeeded() {
    console.log(`The classroom should be ${this.student * 2}m².`);
  }
  details() {
    console.log(
      `This is a  ${this.learning} course taught by ${this.teacherName}. There are ${this.student} students taking the course.`
    );
  }
}
let course = new Course("Ali", "web development", 22);
course.spaceNeeded();
course.details();

// #### Problem Solving
// ##### 1. Format your string
// - Write function named "_capitalizeFirstLetter_" that accepts a string as an argument. The function should
// convert the first character of each word to uppercase.
// **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to the console.
// **Expected Output** capitalizeFirstLetter("hey there"); → `Hey There`
console.log("   Exercise: capitalFirstLetter");
const capitalizeFirstLetter = arg => {
  let newArr = [];
  let newStr = arg.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    newArr.push(
      newStr[i][0].toUpperCase() + newStr[i].substring(1).toLowerCase()
    );
  }
  return newArr.join(" ");
};
console.log(capitalizeFirstLetter("the quick brown fox"));
console.log(capitalizeFirstLetter("hey there"));

// ##### 2. Validation
// - Look at the unit tests for validating a pin. Create a function named "_validPin_" that fulfills the requirements
//of the tests.
// **Requirements**:
// - The pin code must consist of only numbers.
// - The pin code must be 4 digits long.
// - The pin should have at least **two** different digits.
// - The pin code's last digit should be even.
// - The pin code should add up to at least 5.
// The function should print `true` if the pin meets all the requirements and `false` if it does not.
//  Print your solution to the console.
// **Expected Output**
// validPin("1234"); → true
// validPin("1235"); → false // last number should be even --OKAY--
// validPin("wwww"); → false // should only consist of numbers --OKAY--
// validPin("12345"); → false // should be 4 digits, not 5  --OKAY--
// validPin("2222"); → false // should have at least 2 different digits --OKAY--
// validPin("1000"); → false // does not add up to at least 5 --OKAY--
// validPin("2224"); → true
console.log("   Exercise: validPin");

const validPin = num => {
  // we create a variable to sum and an array to push digits nums
  let sum = 0;
  let counter = [];

  // we check first that the input is a number that contains four digits and that the last one is even
  if (!isNaN(num) && num.length === 4 && num[3] % 2 === 0) {
    // we loop inside the length of the input to check the sum and to have diff numbers
    for (let i = 0; i < num.length; i++) {
      if (!counter.includes(num[i])) {
        // we push unique numbers our array counter
        counter.push(num[i]);
        // we sum each number in our variable
        sum += parseInt(num[i]);
      }
    }
  }
  // we check that the sum and our counter has at least two diff nums
  return sum > 5 && counter.length >= 2;
};

console.log(validPin("1234")); // Expected output: true
console.log(validPin("1235")); // Expected output:  false
console.log(validPin("wwww")); // Expected output: false
console.log(validPin("12345")); // Expected output:  false
console.log(validPin("2222")); // Expected output:  false
console.log(validPin("1000")); // Expected output:  false
console.log(validPin("2224")); // Expected output:  true

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
  profileData,
  convertObjectToArray,
  convertArrayData,
  createGrid,
  wordConverter,
  calculateHours,
  Course,
  capitalizeFirstLetter,
  validPin
};
