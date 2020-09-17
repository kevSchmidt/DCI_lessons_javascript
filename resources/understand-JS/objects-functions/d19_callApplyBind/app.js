// Bind(), Call() and Apply()
var person = {
  firstname: "Peter",
  lastname: "Pan",
  getFullName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------");
};

// BIND: create a copy of the function passed, 'this' point now to the object in ().
var logPersonName = logName.bind(person);
logPersonName("en");

// CALL: invoke the function, we control here what 'this' point at.
logName.call(person, "en", "it");

// APPLY: same as call but need an array of parameters(better for maths).
logName.apply(person, ["es", "fr"]);

// all in one step
(function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("--------------");
}.apply(person, ["fr", "de"]));

// ========== function borrowing ===
var person2 = {
  firstname: "Pocahontas",
  lastname: "L'indienne",
};

console.log(person.getFullName.apply(person2)); // we point now to the second person.

// ========== function currying ===
// => creating a copy of a function but with some preset parameters.
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2); // we create a copy with a = 2.
console.log(multipleByTwo(4)); // we have now a new function that multiply 2 by the paramter(4).
