// THE SCOPE CHAIN

// The execution context has always a reference to Outer Environment which is define by its lexical environment.

// Examples:
// ================== With a and b siting at global level: =====
function b1() {
  console.log(myVar); // -4- myVar has no value => function b sits lexically in the global level, so this is his Outer Environment.
  // myVar is set to 1 in the Outer reference => the result will be 1.
}

function a1() {
  var myVar = 2; // -2- myVar is set to 2
  b1(); // -3- we call function b
}

var myVar = 1;
a1(); // -1- we call function a

// ================== With b siting inside of a: ======
function a2() {
  function b2() {
    console.log(myVar); // -4- myVar has no value => function b sits lexically inside function a, so this is his Outer Environment.
    // myVar is set to 2 in the Outer reference => the result will be 2.
  }

  var myVar = 2; // -2- myVar is set to 2
  b2(); // -3- we call function b
}

var myVar = 1;
a2(); // -1- we call function a
// b2(); can not be called because it sits inside function a and is not at the global level.
