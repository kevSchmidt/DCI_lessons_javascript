const objects = [
  {
    name: `ali`,
    lastName: `see`
  },
  {
    name: "Olga",
    lastName: `xs`,
    printOut: function() {
      console.log("Hi");
    }
  }
];
// dot
objects[1].printOut();
// bracket
objects[1]["printOut"]();

//-------------------clones vs. References-------------------//
let str = `Clone me`;
let newStr = str; // cloning
console.log(newStr);
str = `Something else`;
console.log(str);
console.log(newStr); // hold the old value because cloned

// With Object, Array and Function
const names = [`Ali`, `Olga`, `Nancy`, `zain`];
let newArr = names; // referencing
console.log(newArr);
newArr[1] = "New";
console.log(names); // the new value appear on the old array

const car = {
  type: `Ford`,
  color: `red`,
  year: `2020`
};
const newObject = car; // referencing
newObject.type = "BMW";
console.log(car.type); // type of const car is now BMW

// Shallow copy ...(spread operator)
let namesArr = [`Ali`, `Hadi`];
let newNamesArr = [...namesArr]; // cloning
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr); // hold the old value

// Sallow copy using Array.concat()
let newNames2 = [].concat(newNamesArr); // empty array to trick JS and make just a clone

// Sallow copy using Array.Slice()
let newNames3 = namesArr.slice(0); // cloning

// Shallow copy using .assign()
const newObject2 = Object.assign(car);
const newObj = { ...car }; // cloning object
console.log(newObj);

// Recursion
const factorial = function(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(8));
console.log(factorial(4));

// Deep copy using recursion
function deepCopy(obj) {
  if (typeof obj == `object`) {
    return Object.keys(obj)
      .map(key => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == `array`) {
    return; //something
  }
  return obj;
}
const obj2 = { 1: `hi`, 2: `how are you`, fun: () => console.log("Hi") };
const superObj = deepCopy(obj2);
console.log(superObj);
const array2 = ["hello", "my", "name", "is", "Kevin"];
const superObj2 = deepCopy(array2);
