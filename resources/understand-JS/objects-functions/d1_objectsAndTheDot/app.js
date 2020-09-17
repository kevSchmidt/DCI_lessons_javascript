var person = new Object(); // just for example, don't create objects like this.

person["firstname"] = "Kevin";
person["lastname"] = "Schmidt";

var firstNameProperty = "firstname";

// bracket notation
console.log(person);
console.log(person[firstNameProperty]);

// dot notation is faster
console.log(person.firstname);
console.log(person.lastname);

// nested object
person.address = new Object();
person.address.street = "107 Avenue Simon Bolivar";
person.address.city = "Paris";
person.address.state = " FR";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);
