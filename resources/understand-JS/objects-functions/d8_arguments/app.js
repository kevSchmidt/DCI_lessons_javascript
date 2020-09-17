function greet(firstname, lastname, language = "english", ...other) {
  language = language || "english"; // old way to set default values.

  if (arguments.length === 0) {
    console.log("Missing parameters!");
    console.log("------------");
    return; // return will kick out of the function and ignore those console.log()
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments); // create an 'array like'
  console.log("arg 0: " + arguments[0]);
  console.log("------------");
}

greet(); // with hoisting we don't need parameters in javascript
greet("Mauricio");
greet("Mauricio", "Muchacho");
greet("Mauricio", "Muchacho", "Spain", "eat like a monster", "sweet heart");
