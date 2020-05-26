console.log("--------------------------- NEW TERMINAL ------------------");

const print = require("./stars");

const args = process.argv.slice(2);
print(args[0], args[1]);

// const args = process.argv.slice(2);
// const star = "*";

// function superHeader(numInput = 10, textInput = "Hey") {
//   const stars = star.repeat(numInput);
//   console.log(`
//   ${stars}
//   ${textInput}
//   ${stars}
//   `);
// }

// superHeader(args[0], args[1]);
