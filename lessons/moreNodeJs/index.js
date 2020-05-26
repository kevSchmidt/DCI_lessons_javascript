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
  // Sort number
  let sortedMedian = numArray.sort((a, b) => a - b);

  // Get index of the middle
  medianIndex = sortedMedian.length / 2;

  // Decimal?
  if (medianIndex % 2 === 0) {
    return (numArray[medianIndex] + numArray[medianIndex - 1]) / 2;
  }
  return numArray[Math.floor(medianIndex)];
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
