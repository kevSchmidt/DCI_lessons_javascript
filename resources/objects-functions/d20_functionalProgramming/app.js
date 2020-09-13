function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

// we pass a function as parameter to do what we want.
var arr2 = mapForEach(arr1, function (item) {
  return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
  return item > 2;
});
console.log(arr3);

// we have now 2 parameters for only one in mapForEach function.(fn(arr[i]))
var checkPastLimit = function (limiter, item) {
  return item > limiter;
};
// we check which item is greater than 1.
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// create a copy with bind with a default value of 1 for limiter
// => the array (fn(arr[i])) will be pass in item
console.log(arr4);

// we want to just pass a limiter
var checkLimitSimplified = function (limiter) {
  // we are creating an object that we copy with parameter preset
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};
var arr5 = mapForEach(arr1, checkLimitSimplified(2));
console.log(arr5);

// Functional Programming ==> we pass functions into functions to simplify the code.
