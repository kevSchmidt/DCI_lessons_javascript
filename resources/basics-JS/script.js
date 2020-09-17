// =============================== JAVASCRIPT LANGUAGE BASICS =============

/* ################## Primitive types ##################
NUMBER: floating point number, for decimals and integers
STRING: sequence of characters, used for text
BOOLEAN: logical data type that can only be true or false
UNDEFINED: data type of a variable that does not have a value yet
NULL: also means 'non-existent'
############### */

/*
console.log("---------- Primitive -----------");

var firstName = "John";
var lastName = "Smith";
console.log(firstName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

// variables naming rules
var _3years = 3;
var $55euros = 55;
var johnMark = "John and Mark";
*/

/* ###########################################
* Variable mutation and coercion
########### */

/*
console.log("------- Mutation & Coercion -------");

var firstName = "John";
var age = 28;
console.log(firstName + " " + age);

// type coercion
var job, isMarried;
job = "teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// variable mutation
age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/* ###########################################
* Basic operators
########### */

/*
console.log("------- Basic operators ------");

var year, yearJohn, yearKevin;
now = 2018;
ageJohn = 28;
ageKevin = 27;

// math operators
yearJohn = now - ageJohn;
yearKevin = now - ageKevin;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// logical operators
var johnOlder = ageJohn > ageKevin;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Kevin is older than John");
var x;
console.log(typeof x);
*/

/* ###########################################
* Operator precedence
########### */

/*
console.log("----- Operators precedence -----");

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
ageKevin = 35;
average = (ageJohn + ageKevin) / 2;
console.log(average);

// multiple assignment
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

/* ####################################
* CODING CHALLENGE 1
######## */

/*
Mark and John are typing to compare their BMI (Body Mass Index), which
is calculated using the formula: BMI = mass / height² = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI
3. Create a boolean variable containing information about whether Mark 
has a higher BMI than John
4. Print a string to the console containing the variable from step 3. (Something
like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😄
*/

/*
console.log("----- Coding challenge 1 -----");

var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

var hasMarkHigherBmi = markBmi > johnBmi;

console.log(`Is Mark's BMI higher than John's? ${hasMarkHigherBmi}`);
console.log(markBmi, johnBmi);
*/

/* ###########################################
* If / else statements
########### */

/*
console.log("----- if / else statement -----");

var firstName = "John";
var civilStatus = "married";

if (civilStatus === "single") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var markMass = 78;
var markHeight = 1.69;
var johnMass = 92;
var johnHeight = 1.95;
var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);

if (markBmi > johnBmi) {
  console.log("Mark's BMI is higher than John's.");
} else {
  console.log("John's BMI is higher than Mark's.");
}
*/

/* ###########################################
* Boolean logic: AND(&&), OR(||), NOT(!)
########### */

/*
console.log("------ Boolean logic ------");

var firstName = "John";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
}
*/

/* ###########################################
* The ternary operator and Switch statements
########### */

/*
console.log("-- The ternary operator and Switch statements -- ");

var firstName = "John";
var age = 22;

// Ternary operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// Switch statement
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Lisbon.");
    break;
  case "designer":
    console.log(firstName + " designs beautiful websites.");
    break;
  default:
    console.log(firstName + " does something else.");
}

age = 56;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
}
*/

/* ###########################################
* Truthy & Falsy values and Equality operators
########### */

/*
console.log("-- Truthy and Falsy values and equality operators --");

// FALSY VALUES: undefined, null, 0, "", NaN

var height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// equality operators
if (height == "23") {
  console.log("The == operators does type coercion!");
}
*/

/* ###########################################
* CODING CHALLENGE 2
########### */

/*
John and Mike both play basketball in different teams. In the latest 3 
games, John's team scored 89, 120 and 103 points, while Mike's team 
scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print 
the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take 
into account there might be a draw (the same average score).
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 
points. Like before, log the average winner to the console. HINT: you will 
need the && operator to take the decision. If you can't solve this one, just 
watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping 
in mind there might be draws.

GOOD LUCK 😀
*/

/*
console.log("---- Coding challenge 2 ----");

var johnTeamAverage = (89 + 120 + 103) / 3;
var markTeamAverage = (116 + 94 + 123) / 3;
console.log(markTeamAverage, johnTeamAverage);

// mark wins
if (markTeamAverage > johnTeamAverage) {
  console.log(`Mark's team win with an average score of ${markTeamAverage}.`);
} else {
  console.log(`John's team win with an average score of ${johnTeamAverage}.`);
}
// draw
johnTeamAverage = 111;
if (markTeamAverage > johnTeamAverage) {
  console.log(`Mark's team win with an average score of ${markTeamAverage}.`);
} else if (markTeamAverage === johnTeamAverage) {
  console.log(`It's a draw! Both teams have a score of ${markTeamAverage}`);
} else {
  console.log(`John's team win with an average score of ${johnTeamAverage}.`);
}

// john wins
johnTeamAverage = (119 + 99 + 124) / 3;
if (markTeamAverage > johnTeamAverage) {
  console.log(`Mark's team win with an average score of ${markTeamAverage}.`);
} else if (markTeamAverage === johnTeamAverage) {
  console.log(`It's a draw! Both teams have a score of ${markTeamAverage}`);
} else {
  console.log(`John's team win with an average score of ${johnTeamAverage}.`);
}

// with mary
var maryTeamAverage = (97 + 134 + 105) / 3;

if (markTeamAverage > johnTeamAverage && markTeamAverage > maryTeamAverage) {
  console.log(`Mark's team win with an average score of ${markTeamAverage}.`);
} else if (
  johnTeamAverage > markTeamAverage &&
  johnTeamAverage > maryTeamAverage
) {
  console.log(`John's team win with an average score of ${johnTeamAverage}.`);
} else if (
  maryTeamAverage > johnTeamAverage &&
  maryTeamAverage > maryTeamAverage
) {
  console.log(`Mary's team win with an average score of ${maryTeamAverage}.`);
} else {
  console.log(`Its a draw!`);
}
*/

/* ###########################################
* Functions
########### */

/*
console.log("----- Functions -----");

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageKevin = calculateAge(1993);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageKevin, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1993, "Kevin");
yearsUntilRetirement(1945, "Jane");
*/

/* ###########################################
* Functions statements and expressions
########### */

/*
console.log("-- Function statements & expressions --");

// function declaration
function whatJobYouDo(job, firstName) {}

// function expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code.";
    case "driver":
      return firstName + " drives an uber in Lisbon.";
    case "designer":
      return firstName + " designs beautiful websites.";
    default:
      return firstName + " does something else.";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Kevin"));
console.log(whatDoYouDo("retired", "Mark"));
*/

/* ###########################################
* Arrays
########### */

/*
console.log("----- Arrays ------");

// initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0], names.length);

// mutate array data
names[1] = "Kevin";
names[names.length] = "Mary";
console.log(names);

// different data type
var john = ["john", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is a designer";

console.log(isDesigner);
*/

/* ###########################################
* Coding challenge 3
########### */

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is 
between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*
console.log("--- Coding challenge 3 ---");

function tips(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bill = [124, 48, 268];
var tips = [tips(bill[0]), tips(bill[1]), tips(bill[2])];
var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(finalValues);
*/

/* ###########################################
* Object and properties
########### */

/*
console.log("--- Object & Properties ---");

// Object literal
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};
console.log(john.firstName);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lstName"] = "Smith";
console.log(jane);
*/

/* ###########################################
* Object and methods
########### */

/*
console.log("--- Object & Methods ---");

var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1992,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};

john.calcAge();
console.log(john);
*/

/* ###########################################
* Coding challenge 4
########### */

/*
Let's remember the first coding challenge where Mark and John compared 
their BMIs. Let's now implement the same functionality with objects and 
methods.
1. For each of them, create an object with properties for their full 
name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI 
to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together 
with the full name and the respective BMI. Don't forget they might 
have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
console.log("--- Coding challenge 4 ----");

var john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var mark = {
  firstName: "Mark",
  lastName: "Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.firstName} ${john.lastName} has the higher BMI (${john.bmi}).`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName} has the higher BMI (${mark.bmi}).`
  );
} else {
  console.log(`John and Mark have both the same BMI(${john.bmi})`);
}
*/

/* ###########################################
* Loops and iteration
########### */

/*
console.log("--- Loops and iteration ---");

// for loop
for (var i = 0; i <= 20; i += 5) {
  console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false, "blue"];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break statements
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}
*/

/* ###########################################
* Coding challenge 5
########### */

/*
Remember the tip calculator challenge? Let's create a more advanced version 
using everything we learned!

This time, John and his family went to 5 different restaurants. The bills 
were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when 
the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do 
the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array 
containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] 
as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different 
restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the 
bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array 
of tips. HINT: Loop over the array, and in each iteration store the current 
sum in a variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

console.log("--- Coding challenge 5 ---");

console.log("----- John -----");
const john = {
  bill: [124, 48, 268, 180, 42],
  tipsPayed: [],
  totalPayed: [],
  calcTip: function () {
    for (let i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        this.tipsPayed[i] = this.bill[i] * (20 / 100);
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        this.tipsPayed[i] = this.bill[i] * (15 / 100);
      } else {
        this.tipsPayed[i] = this.bill[i] * (10 / 100);
      }
      this.totalPayed[i] = this.bill[i] + this.tipsPayed[i];
    }
  },
};

/* ***** CORRECTION *****
var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};
**********/

john.calcTip();
console.log(john.tipsPayed);
console.log(john.totalPayed);

console.log("----- Mark -----");
const mark = {
  bill: [77, 375, 110, 45],
  tipsPayed: [],
  totalPayed: [],
  calcTip: function () {
    for (let i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        this.tipsPayed[i] = this.bill[i] * (20 / 100);
      } else if (this.bill[i] >= 100 && this.bill[i] < 300) {
        this.tipsPayed[i] = this.bill[i] * (10 / 100);
      } else {
        this.tipsPayed[i] = this.bill[i] * (25 / 100);
      }
      this.totalPayed[i] = this.bill[i] + this.tipsPayed[i];
    }
  },
};

mark.calcTip();
console.log(mark.tipsPayed);
console.log(mark.totalPayed);

console.log("----- John & Mark average -----");
function calcAverage(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return (result /= arr.length);
}

/* ***** CORRECTION ******
function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
********/

var averageJohn = calcAverage(john.tipsPayed);
var averageMark = calcAverage(mark.tipsPayed);
console.log(averageJohn, averageMark);

console.log(
  `Mark's family paid more tips than John's with an average of ${averageMark}$.`
);
