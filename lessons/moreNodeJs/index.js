const args = process.argv.slice(2);

// ========== FUNCTIONS ===

// ParseNum
function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number. Please try again.`);
    process.exit();
  }
  return number;
}

// Sum
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}

// Avg
function avg(numArray) {
  return sum(numArray) / numArray.length;
}

// Med
function med(numArray) {
  // 1. Sort the set of number
  numArray.sort((a, b) => {
    return a - b;
  });

  // 2. Get index of the middle number
  const midNum = numArray[(numArray.length - 1) / 2];

  // 3. Decimal?
  if (midNum === undefined) {
    return (numArray.length - 1) / 2 + 1;
  }
  return midNum;
}

const [operation, ...rest] = args;
const numbers = rest.map(parseNum);

// ========== SWITCH ===

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;

  case "avg":
    console.log(avg(numbers));
    break;

  case "med":
    console.log(med(numbers));
    break;

  default:
    console.log("Please use 'sum', 'avg' or 'med' as first argument.");
}
