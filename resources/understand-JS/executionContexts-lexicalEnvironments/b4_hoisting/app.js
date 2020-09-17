b(); // function is called even if it is defined after, hoisting
console.log(a); // variable is also stored but has no value yet, it will be undefined.

var a = "Hello World!";

function b() {
  console.log("Called b!");
}
