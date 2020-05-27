// ===== Export single element ===

/*
exports.sum = (a, b) => a + b ;
*/

// ===== Export an Object ===

/*
module.exports = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
};
*/

// ===== Export an Object with variables ===

sum = (a, b) => a + b;
sub = (a, b) => a - b;
multi = (a, b) => a * b;
module.exports = {
  sum,
  sub,
  multi,
};
