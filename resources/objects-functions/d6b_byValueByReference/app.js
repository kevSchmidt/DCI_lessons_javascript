// ========== BY VALUE (primitives) ===
var a = 3;
var b;

b = a;
a = 2;

// we create a copy so it changing a doesn't affect b.
console.log(a);
console.log(b);

// ========== BY REFERENCE (all objects) ===
var c = { greeting: "hi" };
var d;

d = c;
c.greeting = "Hello"; // mutate

// our two variables are pointing at the the same location in memory, mutate c affect d.
console.log(c);
console.log(d);

// ========== BY REFERENCE (even as parameters) ===
function changeGreeting(obj) {
  obj.greeting = "Bonjour"; // mutate
}
changeGreeting(d);

// pointing at the same address in memory, mutate c affect d.
console.log(c);
console.log(d);

// we set up a new memory space with the operator equal.
c = { greeting: "Hallo" };
console.log(c);
console.log(d);
