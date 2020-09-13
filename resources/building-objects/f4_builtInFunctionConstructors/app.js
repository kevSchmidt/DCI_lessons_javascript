// ========== Build In Functions ===

// there are already built in functions in javascript
console.log("Javascript will kill me one day!".length);

var a = new Number(3);
// a is now an object with a primitive value of 3
console.log(a);
// as an object we can pass methods on it
Number.prototype.toFixed(2);
console.log(a.toFixed(2));

var b = new String("Kevin");
// as Number, we are pointing now to a string prototype
String.prototype.indexOf("e");
console.log(b.indexOf("e"));
// b is also an object
console.log(b);

var c = new Date("02/14/1993");
console.log(c);

// we want to add a feature to all strings in javascript:
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};
console.log("Flowers".isLengthGreaterThan(4));
console.log("The dark blue sky".isLengthGreaterThan(22));

Number.prototype.isPositive = function () {
  return this > 0;
};
// console.log(3.isPositive()); throw an error, javascript doesn't create an object for a number
var num = new Number(3);
console.log(num.isPositive());

// ========== DANGEROUS ASIDE ===
console.log("-------------------");

var first = 3;
var second = new Number(3);
// first is a primitive and second an object
console.log(first == second);
console.log(first === second);
// by using built in function to create primitive you are NOT creating primitive

// RESOURCES: Library for Date --> momentjs.com

console.log("-------------------");

Array.prototype.myCustomFeature = "Oups! I should not be here";

var arr = [
  "Alex",
  "Claudinei",
  "Gabriela",
  "Ioannes",
  "Kevin",
  "Mauricio",
  "Simona",
  "Zakaria",
];

for (let prop in arr) {
  console.log(prop + " " + arr[prop]);
}
// don't use "for in" in array, it will also catch all other properties (like framework)
for (let i = 0; i < arr.length; i++) {} // that is safe
