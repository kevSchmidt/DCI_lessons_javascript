function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  /* *** add the method to all objects that we create ***
  this.getFullName = function(){
        return this.firstname + ",  " + this.lastname;
    };
******** */

  console.log("This function is invoked.");
}

var tom = new Person("Tom", "Mesrine");
console.log(tom);

var violette = new Person("Violette", "Pezier");
console.log(violette);

// we can access the prototype of our object and add methods
Person.prototype.getFormalFullName = function () {
  return this.firstname + ",  " + this.lastname;
};

console.log(tom.getFormalFullName());
// It is better to put method in prototype, take less memory space than add it directly in the function
