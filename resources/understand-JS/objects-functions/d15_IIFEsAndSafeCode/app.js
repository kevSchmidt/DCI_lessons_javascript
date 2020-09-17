// ========== IIFE ===
var firstname = "John";
var greeting = "Guten Tag";

(function (name) {
  // variable isn't store in the global execution context but inside the IIFE execution context.
  var greeting = "Hello";
  console.log(greeting + " " + name);
})(firstname);

// No conflicts between our 2 variables 'greeting', both exist but at different place in the memory.
// This is how frameworks library are coded.
console.log(greeting);

// ========== IIFE with access to the global object ===
(function (global, name) {
  // we overwrite here in both way our variable in the global window object.
  var greeting = "Bonjour";
  global.greeting = "Bonjour";
  console.log(greeting + " " + name);
})(window, "Marie");
