function greeting(name) {
  console.log(name); // set to undefined by default
  console.log("Hello " + name); // Coercion by javascript of undefined into string
}
greeting(); // Hello undefined

function greet(name) {
  name = name || "<Your name here>"; // set a default value
  console.log("Hello " + name);
}
greet("Kevin"); // Hello Kevin
greet(); // Hello <Your name here>
