// function statement
function greet(name) {
  console.log("Hello " + name);
}
greet("John Snow");

// using a function expression
var greetFunc = function (name) {
  console.log("Hello " + name);
};
greetFunc("John Snow");

// using an Immediately Invoked Function Expression (IIFE)
var greeting = (function (name) {
  return "Hello " + name;
})("Johnny");
console.log(greeting);

// doesn't throw error, allowed by javascript: a code can sit and not be executed.
3;

("I am a string");

{
  person: "John";
}

/* *** Will throw an error, considered as a function statement and need a name.
function(name){
    return "Hello " + name;
}
********/

// we trick javascript with () to convert the content into an expression.
// this function is valid syntax
(function (name) {
  return "Hello " + name;
});

// IIFE -very used in all frameworks-
var firstname = "John";
(function (name) {
  var greeting = "Inside IIFE: Hello";
  console.log(greeting + " " + name);
})(firstname);
