// CODE EXECUTION
function b() {
  console.log("Called b!");
}

b(); // function is executed in execution phase

console.log(a); // variable is executed in execution phase but still have the default value undefined from the creation phase

var a = "Hello World!"; // variable is set to "Hello world!" in execution phase

console.log(a); // variable is now executed with our value
