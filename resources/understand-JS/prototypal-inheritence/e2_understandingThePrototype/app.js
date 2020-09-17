// Everything has a prototype
var a = {};
var b = function () {};
var c = [];

var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var kevin = {
  firstname: "Kevin",
  lastname: "Schmidt",
};

// don't do this EVER! for demo purposes only!!!
kevin.__proto__ = person;

console.log(kevin.getFullName()); // object kevin get access to object person properties.
console.log(kevin.firstname); // we get kevin and not default because of the prototype chain.

var jane = {
  firstname: "Jane",
};

jane.__proto__ = person;
console.log(jane.getFullName()); // we get Default because we have no value for lastname.
