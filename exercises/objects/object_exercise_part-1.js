// Create an object named person. Loop through the object and print both the property and value of the object.
const person = {
  name: `Anakin`,
  lastName: `Skywalker`,
  job: `Jedi`
};
for (starWars in person) {
  console.log(`${starWars} : ${person[starWars]}`);
}

// Create a function that returns an array of all values of an object’s properties.
// Expected output: ["tea", "coffee", "milk"]
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
};
const arrayOfObject = obj => {
  return Object.values(getObjectValues);
};
console.log(arrayOfObject());

// Create an object and add a method to that object which prints the values of the objects in a string.
// Example of Expected Output “Ali is a 20 year old  in Berlin”.
const person2 = {
  userName: "Ali",
  job: "painter",
  age: 20,
  city: `Berlin`,
  print: () => {
    console.log(
      `${person2.userName} is ${person2.age} years old in ${person2.city}. `
    );
  }
};
person2.print();

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example: Expected output: ["name", "class", "course"]
const student = {
  name: "Mike",
  class: "4A",
  cours: "English"
};
const properties = () => {
  console.log(Object.getOwnPropertyNames(student));
};
properties();
