const fs = require("fs");

// ===== Create file: create a new one or overwrite ===

fs.writeFile("newText.txt", "This is a new text written by NodeJs.", (err) => {
  if (err) throw err;
  console.log("File created with writeFile!");
});

// ===== Create file: create a new one ===

fs.appendFile("secondText.txt", "Second file done by NodeJs.", (err) => {
  if (err) throw err;
  console.log("File created with appendFile!");
});

// ===== Read file ===

fs.readFile("secondText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// ===== Rename file ===

fs.rename("./newText.txt", "./renamedText.txt", (err) => {
  if (err) throw err;
  console.log("Rename done!");
});

// // **reverse rename**
// fs.rename("./renamedText.txt", "./newText.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename done!");
// });

// ===== Delete file ===

// create this file first :)
fs.unlink("./textIWannaDelete.txt", (err) => {
  if (err) throw err;
  return;
});
