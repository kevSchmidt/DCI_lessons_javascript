var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (let prop in john) {
  console.log(prop + ": " + john[prop]);
}
// we reach out and grab every properties and methods not just on the object but also on the object prototype.

// ===== Reflection ===
for (let prop in john) {
  if (john.hasOwnProperty(prop)) {
    // hasOwnProperty check if the object possess the passed property and return a Boolean.
    console.log(prop + ": " + john[prop]);
  }
}
// we now only see properties that are really on the object.

// ===== Extend using Underscore ===
var jane = {
  address: "111 Main St",
  getFormalFullName: function () {
    return this.lastname + ", " + this.firstname;
  },
};

var jim = {
  getFirstName: function () {
    return firstname;
  },
};

_.extend(john, jane, jim);

/* ***** Code from underscore *****
 // An internal function for creating assigner functions.
 var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  }; ***** */

console.log(john); // we have combined jane and jim object with john.
