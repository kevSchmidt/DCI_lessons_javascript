// ****ERRORS****

// 3 types of errors (compilation aka compiler fails to compile, runtime, logic)
// try -> test a block of code
// trow -> create a custom error
// catch -> catch the error in try
let userName = "";
try {
  // cool();
  if (userName == "") throw `Something went wrong`;
} catch (err) {
  console.log(err);
} finally {
  console.log("This will always run 😋");
}

// Call several time a function
function display() {
  console.log("I want to repeat this function");
}
for (i = 0; i < 3; i++) {
  display();
}

(function manyTimeCalledFunction(num) {
  display();
  if (num > 1) manyTimeCalledFunction(num - 1);
})(3);

function print() {
  console.log("Hi I am Js");
}
const timePrint = setTimeout(print, 5000); // appear after 5s
const timerEs6 = setTimeout(() => console.log("Hi I am Js Es6"), 10000);
clearInterval(timerEs6); // stop the function timerEs6  only if she is still running
