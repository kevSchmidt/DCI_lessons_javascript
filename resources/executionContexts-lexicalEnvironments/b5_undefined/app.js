var a;
console.log(a);

// Never do this! (Help for debugging)
// Make sure that when you see undefined: it is coming from javascript and not from your code
c = undefined;

// undefined is a special value in javascript, by default all variables are undefined
if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is defined");
}

// b is not in javascript memory, it will throw an error
console.log(b);
