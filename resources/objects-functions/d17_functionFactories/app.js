// Factory function: create other functions
function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log("Hello " + firstname + " " + lastname);
    }

    if (language === "fr") {
      console.log("Bonjour " + firstname + " " + lastname);
    }
  };
}

// Using closure:
// Even if those 2 functions share the same lexical environment, they point at diff spot in memory.
// they were created with 2 diff execution context.
var greetEnglish = makeGreeting("en");
var greetFrench = makeGreeting("fr");

greetEnglish("Harry", "Potter");
greetFrench("Asterix &", "Obelix");
