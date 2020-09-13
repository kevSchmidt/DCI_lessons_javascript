function greet(firstname, lastname, language) {
  language = language || "english";

  if (language === "english") {
    console.log("Hello " + firstname + " " + lastname);
  }

  if (language === "french") {
    console.log("Bonjour " + firstname + " " + lastname);
  }
}

greet("Emma", "Watson", "english");
greet("Alain", "Delon", "french");

// using a function to pass parameters
function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, "english");
}

function greetFrench(firstname, lastname) {
  greet(firstname, lastname, "french");
}

greetEnglish("Bob", "Dylan");
greetFrench("Zinedine", "Zidane");
