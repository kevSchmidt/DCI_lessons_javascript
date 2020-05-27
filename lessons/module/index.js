// ========== MODULE EXPORTS ===

console.log("--------------------------------- NEW TERMINAL ---------------");

const fs = require("fs");
const math = require("./math");

console.log(math);
console.log(`x + y = ${math.sum(2, 5)}`);
console.log(`x - y = ${math.sub(2, 5)}`);
console.log(`x * y = ${math.multi(2, 5)}`);

// ===== Copy file ===

fs.copyFile("original.txt", "copyFromOg.txt", (err) => {
  if (err) throw err;
  console.log("text copied with success");
});

// ===== Read file (synchronous) ===

const data = fs.readFileSync("longText.txt");
console.log(data.toString());
console.log("File read synchronously");

// ===== Open file ===

fs.open("superSecret.txt", "w", (err, data) => {
  if (err) throw err;
  console.log("File opened successfully");
});

// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
