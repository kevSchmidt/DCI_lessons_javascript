// ARRAY
var arr = [
  1,
  false,
  {
    name: "Kevin",
    address: "111 Main St.",
  },
  function (name) {
    var greeting = "Hello ";
    console.log(greeting + name);
  },
  "hello ",
];

// Array can hold anything, be referenced or even hold functions and be called.
console.log(arr);
arr[3](arr[2].name);
