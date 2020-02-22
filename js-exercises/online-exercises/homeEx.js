// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
// Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
// n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
console.log("-> afterNYears function:");
const afterNYears = (list, n) => {
  for (let age in list) list[age] += Math.abs(n); // Hadi -> list      30 -> list[age]
  return list;
};
console.log(
  afterNYears(
    {
      Hadi: 30,
      Ioannes: 37,
      Simona: 28,
      Mauricio: 32,
      Baby: 1
    },
    1 // 1 -> n
  )
);

// A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
// Create a function that transforms an array into a set. Examples:
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
// set([4, 4, 4, 4]) ➞ [4]
console.log("-> set function:");
function set(array) {
  return array.filter((n, index) => array.indexOf(n) == index);
}
console.log(set([1, 3, 3, 5, 5]));
console.log(set([4, 4, 4, 4]));

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example: findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]
console.log("-> findLargestNums function:");
function findLargestNums(arr) {
  return arr.map(x => Math.max(...x));
}
console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
  ])
);
console.log(
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43]
  ])
);

// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]
// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
console.log("-> filterArray function:");
function filterArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society:
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN
console.log("-> societyName function:");
function societyName(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let firstLetter = arr[i].substring(0, 1);
    result.push(firstLetter);
  }
  return result.sort().join(""); // sort() give us the alphabet order
}
console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));

// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// isValid("59001") ➞ true
// isValid("853a7") ➞ false
// isValid("732 32") ➞ false
// isValid("393939") ➞ false
console.log("-> isValid function:");

function isValid(arr) {
  if (arr.length == 5 && !isNaN(arr)) {
    return true;
  } else {
    return false;
  }
}
console.log(isValid("59001"));
console.log(isValid("853a7"));
console.log(isValid("732 32"));
console.log(isValid("393939"));
