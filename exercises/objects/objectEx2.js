// **Count letters**
// - Create a function that give th numbers of all letters present in the string.
// **Example**
// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
console.log("------Count letters------");
function countLetter(str) {
  let array = str.split("");
  let result = {};
  function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < array.length; i++) {
    let currentCharacter = array[i];
    result[currentCharacter] = countOccurrences(str, currentCharacter); // function call for the inner function
  }
  return result;
}
console.log(countLetter("Tree"));

// **Object merge**
// - Create a function that takes two objects as its parameters and merges them together into a new object.
// Expected output: {firstName: "John", lastName: "Smith"}
console.log("-------Object merge version 1-----");
let first = { firstName: "John" };
let last = { lastName: "Smith" };
function merge(x, y) {
  return Object.assign(x, y);
}
console.log(merge(first, last));

console.log("-------Object merge version 2-----");
const mergeVersion2 = (x, y) => {
  return { ...x, ...y };
};
console.log(mergeVersion2({ place: "Paris", Kids: 17 }, { time: "day" }));

// **Switch Keys and Values**
// - Create a function to get a copy of an object. The copy must switch the keys and values.
// Expected Output: {"John": name, "teacher": job}
console.log("------Switch Keys and Values------");
let person = {
  name: `Ali`,
  job: `teacher`
};
function keysToValues(obj) {
  const keyValuesPair = Object.entries(obj);
  // console.log(keyValuesPair);
  let reversArr = [];
  for (let i = 0; i < keyValuesPair.length; i++) {
    reversArr.push(keyValuesPair[i].reverse());
  }
  return Object.fromEntries(reversArr);
}
console.log(keysToValues(person));
