// ========== Function constructor ===

console.log("---- function constructor ----");

var tom = {
  name: "Tom",
  yearOfBirth: 1993,
  job: "Serial Killer",
};

var Person = function (name, yearOfBirth, job, wanted) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.wanted = wanted;
};

// Inheritance through prototype

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var tom = new Person("Tom", 1993, "Serial Killer", true);
var jane = new Person("Jane", 1989, "Special Agent", true);
var henri = new Person("Henri", 1978, "Police Officer", false);

tom.calculateAge();
jane.calculateAge();
henri.calculateAge();

console.log(tom.lastName, jane.lastName, henri.lastName);
console.log(tom);

// ========== The prototype chain in the console ===

console.log("---- prototype chain ----");

var cities = ["Berlin", "Roma", "Paris", "Tokyo", "New York"];

console.log(cities.length);
console.info(cities); // an array has it own prototype with methods

// ========== Creating object (Object.create) ===

console.log("---- Object.create() ----");

var personProto = {
  calcAge: function () {
    console.log(2020 - this.birthYear);
  },
};

var john = Object.create(personProto);
john.name = "John";
john.birthYear = 1990;
john.job = "teacher";

var mary = Object.create(personProto, {
  name: { value: "Mary" },
  birthYear: { value: 1969 },
  job: { value: "designer" },
});

console.log(john, mary);

// ========== Primitives & Objects ===

console.log("---- primitives & object ----");

var a = 23;
var b = a;
a = 46;
console.log(a, b); // with primitive => copy

var obj1 = {
  name: "Tom",
  age: 19,
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age); // with object => reference

var age = 25;
var obj = {
  name: "Kevin",
  city: "Paris",
};
function change(a, b) {
  a = 27;
  b.city = "Berlin";
}
change(age, obj);
console.log(age, obj.city); // with function => reference

// ========== First class function ===

console.log("---- first class functions ----");

// passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateYearsOld(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateYearsOld);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

// functions returning functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else if (job === "footballer") {
    return function (name) {
      console.log(
        "France have won the cup " + name + ", France have won the cup.."
      );
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("Hadi");
designerQuestion("Kevin");
designerQuestion("Lena");

interviewQuestion("footballer")("Claudinei");

//  ========== Immediately invoked function expressions ===

console.log("---- IIFE ----");

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

// ========== Closures ===

console.log("---- closures ----");

function retirement(retirementAge) {
  return function (yearOfBirth) {
    var a = " years left until retirement.";
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementFR = retirement(62);
var retirementES = retirement(64);
var retirementDE = retirement(67);
retirementFR(1993);
retirementDE(1993);
retirementES(1993);

function retirementConclusion(country) {
  return function (name) {
    if (country === "FR") {
      console.log("You can stop early, you are lucky " + name + "!");
    } else if (country === "ES") {
      console.log("You are in the average " + name + ".");
    } else if (country === "DE") {
      console.log("Hahaha you haven't finished to work " + name + "...");
    } else {
      console.log("From where are you coming from ?");
    }
  };
}

retirementConclusion("FR")("Julian");
retirementConclusion("ES")("Monica");
retirementConclusion("DE")("Kevin");

// ========== Bind, call and apply ===

console.log("---- bind, call & apply ----");

var kevin = {
  name: "Kevin",
  age: 27,
  job: "rock star",
  presentation: function (style, timeOFDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOFDay +
          ", Ladies and Gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOFDay +
          "."
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

kevin.presentation("formal", "morning");
kevin.presentation.call(emily, "friendly", "afternoon"); // borrowing

/* Apply works same way but with array
kevin.presentation.apply(emily, ["friendly", "afternoon"]);
*/

var kevinFriendly = kevin.presentation.bind(kevin, "friendly");
kevinFriendly("morning");
kevinFriendly("night");

var emilyFormal = kevin.presentation.bind(emily, "formal");
emilyFormal("afternoon");
