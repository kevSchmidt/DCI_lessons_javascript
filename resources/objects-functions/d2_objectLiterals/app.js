// create an object literal
var Kevin = {
  firstname: "Kevin",
  lastname: "Schmidt",
  address: {
    street: "107 Avenue Simon Bolivar",
    city: "Paris",
    state: "FR",
  },
};

// use my object in a function
function greet(person) {
  console.log("Hi " + person.firstname);
}
greet(Kevin);

// add an new object in my function
greet({
  firstname: "Lena",
  lastname: "Core",
});

//  add new object in my object
Kevin.address2 = {
  street: "Salzbrunner str.",
  city: "Berlin",
};
