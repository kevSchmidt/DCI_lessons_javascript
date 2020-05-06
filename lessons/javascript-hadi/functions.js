// ****FUNCTIONS****

// function which print Kevin when called
function display(str) {
  console.log(str);
}
display("Kevin");

// sum function
function sum(x, y) {
  return x + y;
}
let operation = sum(2, 4);
console.log(operation);

// function with age limit
function age(x) {
  if (x <= 17) {
    return "you are too young for this";
  } else {
    return "let go";
  }
}
console.log(age(20));

// function which print values >= 5
const numbers = [2, 4, 5, 6, 10];
function arrayBig(array) {
  let result = array.filter(num => num >= 5);
  return result;
}
console.log(arrayBig(numbers));

// function which print values in the array with 4 letters
const names = ["Ali", "Hadi", " Nancy", "Olga"];
function fourArrayCharacter(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(fourArrayCharacter(names));

// function which print values with O as first letter
function characterWithO(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(characterWithO(names));

// reverse array function
const name = ["Hadi", "Kevin", "Taka", "Martin"];
function nameReverse(arr) {
  let newArray = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("")
      .reverse()
      .join("");
    newArray.push(str);
  }
  return newArray;
}
console.log(nameReverse(name));

// Array.map(value, index => index{})
const names2 = ["Ali", "Olga", "Nancy", "Hadi"];
names2.forEach((name, i) => console.log(name + " index num = " + i)); // const reducer = (acc, cur) => acc + value;

const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur; // acc = 100  cur = 1
console.log(numArr.reduce(reducer, 100));

const print = str => console.log(str);
print("Hello");

// function <name>(<parameters>){ ... }
function yellow(val1, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val1 + val2);
}
yellow(2, 3);

const AliPets = ["Dyson", "Sofia"];
function pink(name, array, age = 10) {
  console.log(
    `Hi ${name}, you are very young ${age}, you have nice pets ${array}`
  );
}
pink("Ali", AliPets, 20);
pink("Olga", ["Dyson", "Sofia"]);

const greeting = (nam, add, age, pla) => {
  age += 20;
  nam += `,`;
  pla += ` DE`;
  add += `,`;
  return `Hey ${nam} it is very nice to live in ${add} you are getting older too fast, already ${age}, in your old ${pla}`;
};
console.log(greeting("Ali", "Salzbrunner str", 10, "Berlin"));

const add = () => {
  let x = 1120 * 3;
  console.log(x);
};
add();

// Spread syntax ...
let array = [1, 2, 3];
let copyArray = [...array];
console.log(copyArray);

function sum(...argument) {
  let array = argument;
  let result = 0;
  for (i = 0; i < array.length; i++) {
    result += argument[i];
  }
  return `the sum is ${result}`;
}
console.log(sum(3, 4, 4, 5, 6, 7, 7, 52, 9));
console.log(sum(7, 88, 98, 9));
