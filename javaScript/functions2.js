// Array.map(value, index => index{})
const names = ["Ali", "Olga", "Nancy", "Hadi"];
names.forEach((name, i) => console.log(name + " index num = " + i)); // const reducer = (acc, cur) => acc + value;

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
