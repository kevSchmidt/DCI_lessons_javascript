// ****PARSE EXPRESSIONS****

// The parseFloat() function: parses an argument (converting it to a string first if needed) and returns a floating point number.
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}
console.log(circumference("4.567abcdefgh")); // expected output: 28.695307297889173
console.log(circumference(4.567)); // expected output: 28.695307297889173

// The parseInt() function: parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}
console.log(roughScale(" 0xF", 16)); // expected output: 1500
console.log(roughScale("321", 2)); // expected output: 0

// ****MATHS EXPRESSIONS****

// The Math.ceil() function: always rounds a number up to the next largest whole number or integer.
console.log(Math.ceil(0.95)); // expected output: 1
console.log(Math.ceil(7.004)); // expected output: 8

// The Math.floor() function: returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95)); // expected output: 5
console.log(Math.floor(5.05)); // expected output: 5

// The Math.random() function: returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
// with approximately uniform distribution over that range which you can then scale to your desired range. The implementation selects
// the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3)); // expected output: 0, 1 or 2
console.log(getRandomInt(1)); // expected output: 0
console.log(Math.random()); // expected output: a number between 0 and 1

// The Math.max() function: returns the largest of zero or more numbers.
const array1 = [1, 3, 2];
console.log(Math.max(1, 3, 2)); // expected output: 3
console.log(Math.max(...array1)); // expected output: 3

// The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and
// can't be converted into one.
const array2 = [2, 3, 1];
console.log(Math.min(...array1)); // expected output: 1
console.log(Math.min(2, 3, 1)); // expected output: 1

// The Math.round() function returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9)); // expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // expected output: 6 6 5
