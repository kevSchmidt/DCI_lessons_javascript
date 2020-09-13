// ========== THIS IN A FUNCTION ===
function a() {
  console.log(this);
  this.newVariable = "Hello";
}

var b = function () {
  console.log(this);
};

// in a function at the global level, 'this' point to the global object.
a();
console.log(newVariable); // we set a variable in the global object
b();

// ========== THIS IN A METHOD ===
var c = {
  name: "The c object",
  log: function () {
    var self = this; // FIXE: we store in a variable called self for 'this' pointing to our object.

    // ------------------------- without fixe ---------------------
    this.name = "Updated c object";
    console.log(this); // 'this' point the object c.

    var setName = function (newName) {
      this.name = newName; // 'this' doesn't sit directly inside the object but inside a method.
    };

    setName("Updated again! The c object");
    console.log(this); // 'this' doesn't point to the object anymore but to the global object.

    // -------------------------- with fixe ----------------------
    self.name = "Updated c object";

    var setName = function (newName) {
      self.name = newName;
    };

    setName("Updated again! The c object");
    console.log(self); // 'self' will now always point to our object c. We can mutate the object.
  },
};

// In a method, 'this' point to the object. Not the case for a function inside a method(fixe with 'self').
// old way, can do differently with 'let'
c.log();
