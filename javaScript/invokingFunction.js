//--------------------------------------------Functions inside functions--------------------------------------------//

function main(num, num2) {
  // outer function
  function second(n) {
    // inner function (not defined without the main function)
    return n * n;
  }
  return second(num) + second(num2); // 3*3 + 4*4 (function call live inside the main function)
}
console.log(main(3, 4));

// Nested scopes: Accessing outer global variables
const outerFunction = (x, y) => {
  let big = true; // global variable: big = true for the outer function
  console.log(big + ` outerFunction`);
  const innerFunction = num => {
    big = false; // local variable: big = false for the inner function
    console.log(big + ` innerFunction`);
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
console.log(outerFunction(3, 4));

var example = 3;
(function() {
  var all = `Hi`;
  console.log(example); // local variable --> "Hi"
})();
console.log(example); // global value --> 3

// Self-invoking functions
const add = (() => {
  var counter = 0;
  return () => {
    // function add self-invoked an other one without a name
    counter++;
    return counter; // the function stock in memories counter without being accessible by other
  };
})();
add(); // 1
add(); // 2
console.log(add()); // 3

// Self-Invoked Anonymous Function Expression(SIAF)
(function() {
  // function close to itself: more secured against hackers (cannot call the function)
  console.log("Hello");
})(); // self-invoking

// Immediately-Invoked Function Expression (IIFE)

const sum = ((x, y) => {
  return x + y;
})(2, 3);
console.log(sum);

// trim()
let str = "    Hi     ";
console.log(str.trim());

// trimEnd()
console.log(str.trimEnd());

// trimStart()
console.log(str.trimStart());

// startWith()
let text = `Hey we will have fun tonight.`;
console.log(text.startsWith("Hey")); // --> True
console.log(text.startsWith("we")); // --> False

// endsWith()
console.log(text.endsWith("we", 5)); // end with "we" in position 5

// charCodeAt()
let chr = "c";
console.log(chr.charCodeAt(0) - 96);

// codePointAt()
const icons = "😋";
console.log(icons.codePointAt(0));
