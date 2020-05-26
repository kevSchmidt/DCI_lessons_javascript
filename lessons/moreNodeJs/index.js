const args = process.argv.slice(2);

// ===== ParseNum ===
function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number. Please try again.`);
    process.exit();
  }
  return number;
}

// ===== Sum ===
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}

// ===== Avg ===
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

const [operation, ...rest] = args;
const numbers = rest.map(parseNum);

// ===== Switch ===
switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;

  case "avg":
    console.log(avg(numbers));
    break;

  case "mid":
    console.log(mid(numbers));
    break;

  default:
    console.log("Sorry, please use 'sum' or 'avg'.");
}
