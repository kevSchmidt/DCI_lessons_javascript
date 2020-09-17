// CLOSURES
function greet(whattosay) {
  return function (name) {
    console.log(whattosay + " " + name);
  };
}

var sayHi = greet("Hi"); // function greet has finish to run, his execution context popped off.
sayHi("Kevin"); // with closure we still have access through the outer lexical environment to the value "Hi".

// Closure: the execution context is "closed in" its outer variables.
// Feature of javascript:
// A function running have access to the variables it supposes to have access to.
// The scope stay intact.
