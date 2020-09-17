function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("This function is invoked");
}

// ========== the "new" operator ===
// "new" create an empty object and then call the function.
// "this" points now to this empty object created. (doesn't work if the function return something)

var tom = new Person("Tom", "Mesrine");
console.log(tom);

var violette = new Person("Violette", "Pezier");
console.log(violette);

/* *****
 FUNCTION CONSTRUCTOR: a normal function that is used to construct objects.
 --> the "this" variable points a new empty object, and that object is returned from the function automatically.
**** */
