// overwrite first value
var greet = "Hello!";
var greet = "Bonjour!";
console.log(greet);

// using object to fake namespaces
var english = {
  greetings: {
    basic: "Hello!",
    short: "Hey!",
  },
};
var french = {};

english.greet = "Hello!";
french.greet = "Bonjour!";

console.log(english);
console.log(french);
