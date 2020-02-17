//-------------------------------------------------------------Array--------------------------------------------------------------------------//

// The push() method adds one or more elements to the end of an array.
const animals = ["pigs", "goats", "sheep"];
animals.push("cows"); // expected output: Array ["pigs", "goats", "sheep", "cows"]

// The pop() method removes the last element from an array.
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
plants.pop(); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// The shift() method removes the first element from an array.
const array3 = [1, 2, 3];
array3.shift(); // expected output: Array [2, 3]

// The unshift() method adds one or more elements to the beginning of an array.
array3.unshift(4, 5); // expected output: Array [4, 5, 1, 2, 3]

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const pets = ["cat", "dog", "bat"];
pets.includes("cat"); // expected output: true

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ["ant", "bison", "camel", "duck", "bison"];
beasts.indexOf("bison"); // expected output: 1
beasts.indexOf("bison", 2); // expected output 4

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// The array is searched backwards, starting at fromIndex.
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
animals.lastIndexOf("Dodo"); // expected output: 3

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
// where begin and end represent the index of items in that array. The original array will not be modified.
const animals = ["ant", "bison", "camel", "duck", "elephant"];
animals.slice(2, 4); // expected output: Array ["camel", "duck"]

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
// separated by commas or a specified separator string. If the array has only one item, then that item will be returned without
// using the separator.
const elements = ["Fire", "Air", "Water"];
elements.join(); // expected output: "Fire,Air,Water"
elements.join("-"); // expected output: "Fire-Air-Water"

// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const array1 = ["one", "two", "three"];
const reversed = array1.reverse(); // expected output: ["three", "two", "one"]

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = array1.concat(array2); // expected output: Array ["a", "b", "c", "d", "e", "f"]

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const iterator1 = array1.entries();
iterator1.next().value; // expected output: Array [0, "a"]
iterator1.next().value; // expected output: Array [1, "b"]

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon
// converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort
// cannot be guaranteed as it depends on the implementation.
const months = ["March", "Jan", "Feb", "Dec"];
months.sort(); // expected output: Array ["Dec", "Feb", "Jan", "March"]
const array = [1, 30, 4, 21, 100000];
array4.sort(); // expected output: Array [1, 100000, 21, 30, 4]

// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const array1 = ["a", "b", "c"];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key);
}
// expected output: 0
// expected output: 1
// expected output: 2

// The values() method returns a new Array Iterator object that contains the values for each index in the array.
const array1 = ["a", "b", "c"];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const array1 = [5, 12, 8, 130, 44];
const result = array1.find(element => element > 10); // expected output: 12

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
words.filter(word => word.length > 6); // expected output: Array ["exuberant", "destruction", "present"]

// The forEach() method executes a provided function once for each array element.
const array1 = ["a", "b", "c"];
const result = array1.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2); // expected output: Array [2, 8, 18, 32]

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue; // expected output: 10 (1 + 2 + 3 + 4)
console.log(array1.reduce(reducer, 5)); // expected output: 15 (5 + 1 + 2 + 3 + 4)
