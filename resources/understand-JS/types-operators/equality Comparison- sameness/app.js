// COMPARISON OPERATORS
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // also true

/* 
 Two operators with the same level of Precedence, the Associativity of "less Than (<)" is left-to-right:
 ==> ((3 < 2) < 1) javascript start the operation from the left.
 ==> (false < 1)  javascript use Coercion because it has now a Boolean and a Number. 
 ==> (0 < 1) [false = 0, true = 1]
 ==> true
 */

// First log is true but also for different reasons:
// (1 < 2 < 3) ==> (true < 3) ==> (1 < 3) ==> true

var a = 0;
var b = false;

if (a == b) {
  console.log("They are equal!");
} else {
  console.log("Nope, not equal.");
}

if (a === b) {
  console.log("They are equal!");
} else {
  console.log("Nope, not equal.");
}

/* 
Strict Equality (===) and Strict Inequality (!==) doesn't use Coercion and avoid a lot of confusing bugs.
Examples:
(false == 0) => true
(null == 0) => false
(null < 1) => true
("" == 0) => true
("" == false) => true

(3 === 3) => true
("3" === "3") => true
("3" === 3) => false
*/

//   /!\ Coercion is dangerous if the user is not aware but can also be amazing!
