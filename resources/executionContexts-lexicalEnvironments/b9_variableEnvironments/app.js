// VARIABLES ENVIRONMENTS
function b() {
  var myVar;
  console.log(myVar); // -5- third console.log: var is now set to default value undefined.
}

function a() {
  var myVar = 2;
  console.log(myVar); // -3- second console.log: var is now set to 2.
  b(); // -4- new execution context created for function b
}

var myVar = 1;
console.log(myVar); // -1- first console.log: var is set to 1.
a(); // -2- new execution context created for function a
console.log(myVar); // -6- last console.log: var is back to his original value of 1 in his global execution context.

// ==> Each of myVar are sitting in there own execution context, calling a() doesn't affect myVar = 1;

/* 
**Execution stack**
-> Global execution context (myVar = 1) 
-> a() execution context (myVar = 2) 
-> b() execution context (myVar = undefined)
-> Global execution context (myVar = 1)
*/
