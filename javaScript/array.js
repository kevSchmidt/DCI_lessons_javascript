// <!-- ----------------------------------------------- -->
// <!-- ---------------------Array--------------------- -->
// <!-- ------(using const is more secured.)----------- -->

// 1st way
let arrayString = [`Hi, hello, ciao`];
console.log(arrayString);

// 2nd way
let arrayInt;
arrayInt = [];
arrayInt[0] = 1;
arrayInt[1] = 2;
console.log(arrayInt);

// Array and For are best friends
let arrStringName = [];
for (let i = 0; i <= 3; i++) {
  arrStringName[i] = `Kevin ${i}`;
}
console.log(arrStringName);

// .push() and .unschift()
arrayInt.push(999);
console.log(arrayInt); // pushing value to the last element
arrayInt.unshift(0.5);
console.log(arrayInt); // pushing value to the first element

// Array.pop() and Array.shift()
let emojiArray = ["😎", "💪🏻", "😊"];
emojiArray.pop();
console.log(emojiArray); // removing last element
emojiArray.shift();
console.log(emojiArray); // removing first element

// Array.of()
let strArr = Array.of(5);
console.log(strArr);

// Array.indexOf(<item>)
var firstNameArr = ["Ali", "Kevin", "Nancy"];
console.log(firstNameArr.indexOf("Hadi")); // -1 = value not in array
console.log(firstNameArr.indexOf("Nancy")); // other = value of the index level

// Array.slice()
let names = ["Hadi", "Ali", "Nancy", "Dany"]; // array
let name = "This is long text"; // string
console.log(names.slice(3));
console.log(names.splice(0, 2));

// Array.split()
let stringToArray = name.split(` `); // every space is new element. ("\n") every new line is new element
console.log(stringToArray);

// Array.join()
const arrayString2 = ["hey", "this", "array", "was", "string"];
let stringToArray2 = arrayString2.join(", ");
console.log(stringToArray);

// Array.isArray(arr)
const arrayOfName = ["Ali", "Hadi", "Olga", "Nancy"];
console.log(Array.isArray(arrayOfName)); // check : true if it's an array

// Array.includes()
console.log(arrayOfName.includes("Hadi"));

// Array.reverse()
const constName = "JavaScript";
let reverseString = constName
  .split("")
  .reverse()
  .join("");
console.log(reverseString);

// Array.concat()
let array1 = [1, 2];
let array2 = [10, 20];
let arrayTotal = array1.concat(array2);
console.log(arrayTotal);

// Array.filter()
let result1 = arrayOfName.filter(name => name.length == 4);
console.log(result1); // creates a new array

// Array.find()
let result2 = arrayOfName.find(name => name == "Hadi");
console.log(result2);
let result3 = arrayOfName.find(name => name[0] == "A");
console.log(result3); // returns the value of the first element

// Array.map()
const intArray = [2, 3, 5];
let result4 = intArray.map(x => x + 1);
console.log(result4); // creates a new array
