console.log("------------------------ NEW TERMINAL ----------");

console.log(process.argv);
// console.log(`Hello ${process.argv[2]}!`);

process.argv.forEach((item, i) => {
  console.log(`${i} : ${item}`);
});

const args = process.argv.slice(2);
console.log(args);
console.log(`Hello ${args[0]}!`);

// ========== File System ===

const fs = require("fs");
// read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// write file
fs.writeFile("new.txt", "This is created file in NodeJs.", (err) => {
  if (err) throw err;
  console.log("Bikini! 👙");
});

console.log(
  "Callbacks are asynchronous so i will be print before our longText."
);
