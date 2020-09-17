var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi" + this.firstname;
  },
};

var kevin = Object.create(person);
kevin.firstname = "Kevin";
kevin.lastname = "Schmidt";

console.log(kevin);
