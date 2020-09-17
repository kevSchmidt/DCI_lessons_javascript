// EXPRESSION is a unit of code that results in a value.
var a;
a = 3; // => 3
1 + 2; // => 3
a = { greeting: "hi" }; // => Object {greeting:"hi"}

// STATEMENT doesn't return a value, it has an expression inside ().
if (a === 3) {
}

// FUNCTION STATEMENT: stored in memory but doesn't return a value until executed.
// greet(); ==> function is in memory, can be called before. (Hoisting)
function greet() {
  console.log("hi");
}
greet();

// FUNCTION EXPRESSION: return a value, a function object is created.
// anonymousGreet(); ==> cause error, variable is first set to undefined before execution phase.
var anonymousGreet = function () {
  console.log("hi");
};
anonymousGreet();

// FUNCTION EXPRESSION WITH FUNCTION AS PARAMETER - FIRST CLASS FUNCTIONS
function log(a) {
  a();
}

log(function () {
  console.log("Hi");
});
