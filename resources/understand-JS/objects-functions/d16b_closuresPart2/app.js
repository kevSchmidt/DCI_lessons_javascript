function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i); // this is not executed here but at the function call line 14-16.
    });
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
console.log("-------");

// We can expect to see 0, 1 and 2. But we have 3, 3 and 3...
// The 3 functions that we created share the same outer environment where i = 3.

/* ***
It's like 3 kids and you ask them "How old is there father?", they will not tell you how old
there father was when each was born. They each gonna give you the same answer, how old there 
father is now.
*** */

// ========== With "let" from ES6 ===
function buildFunctions2() {
  var arr = [];

  // "let" is scoped to the block, create different spots in memory
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
console.log("-------");

// ========== Old fixe (Without ES6) ===
function buildFunctions3() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();
