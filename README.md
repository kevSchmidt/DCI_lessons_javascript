# JavaScript vanilla
Expressions:
- String expressions
- Mathematical expressions
- Boolean expressions: comparison operators
- Data type
- Conditional expressions: the ternary operator
Statements
- Definition of statement: `;`
- Hello world: `console.log(<expression>)`
- Comments
- Syntax Debugging I
Variables:
- Variables
- Declaration and assignment
- A word about naming conventions
- Empty variables
- Syntax debugging II
Basic String Methods:
- Converting case with:
  toUpperCase(), toLowerCase()
- Extracting parts of a string
- Checking if a string is inside another string: includes()
- Removing padding spaces: trim()
String:
- Getting the length of a string: length”
08/01/2020	“- Review: from 06/01/2020
Data types :
String:
- Escaping special chars
- Syntax debugging IV
- String interpolation: template literals, using expressions within strings
- Syntax debugging V: Unclosed qutation marks
- Syntax debugging VI: Unclosed brackets”"
Number:
- Combining strings and numbers with +
- Integers vs. Floats
- Converting strings into Numbers
- Using modulo”"
Math:
- Rounding up with `Math.ceil()`
- Rounding down with `Math.floor()`
- Maximum and minimum with `Math.max()`, `Math.min()`“”
Number Pitfalls:
- Dealing with NaN: `isNaN(<expression>)`, `typeof NaN`”
09/01/2020	“- Review: from 08/01/2020
Expressions:
- Data type: the unary operator `typeof`
Math:
- Getting random numbers with `Math.random()`
- Math.  (other Math methods explained by students)
Number Pitfalls:
- Very long numbers: `e`, rounding errors
- Dealing with rounding errors: `Number.prototype.toFixed()`
Logical Thinking I:
- Simple preposition analysis
- Logical operators
- Truth tables primer
*Boolean:
- Truthy and falsy values
- Type conversion
- Syntax debugging VII
- Short circuit assignment: Assigning variable fallback with `||`“”"
13/01/2020	“- Review from previous week
Boolean:
- Boolean inversion with `!`
Logical Thinking II:
- What is an Algorithm?
- Analyzing problems: Input and Output
- Coming up with solutions: writing algorithms”"
Decisions:
- Conditional algorithms
- The conditional statement: `if(<boolean>){ ... }`
- Syntax debugging VIII: Unclosed curly braces
- The default case: `else { ... }`”
14/01/2020	“Multiple choice:
- Testing multiple conditions: `else if (<boolean>){ ... }`
- Executing code based on a value: `switch(<expression>){ ... }`
- When to use: `switch` vs. `else if`
- Construction work at DCI shorter day at class
15/01/2020	“- Construction work at DCI - no class
- exercises reviewing the previous topics”
16/01/2020	“- Review from previous topics
Conditional Repetition:
- Repeating code blocks on a condition:
  `while(<boolean>){ ... }`, `do { ... } while (<boolean>);`
- Counting iterations: the counter variable, `++`, `--`
- Reading a program III (keeping track of state).
Numerical Repetition:
- Repeating code blocks a set number of times:
  `for(<initial state>, <end condition>, <step>){ ... }`
- Breaking out of a loop: `break;`
- Skipping an iteration: `continue;`
- Complex iterations: Nesting `for` loops
Array: Saving multiple values in one name
- Assigning array literals:
  `const <array name> = [<value 1>, <value 2>, ...]`
- Accessing array items with square brackets”
20/01/2020	“Array: Saving multiple values in one name
- Assigning array literals:
  `const <array name> = [<value 1>, <value 2>, ...]`
- Accessing array items with square brackets
- Re-assigning array items with square brackets
- `const`s and array items
Basic Array methods:
- Finding Items: `Array.prototype.indexOf(<item>)`
- Adding items: `Array.prototype.push()`, `Array.prototype.unshift()`
- Removing items: `Array.prototype.pop()`, `Array.prototype.shift()`
- Manipulating arrays: `Array.prototype.reverse()`“”"
21/01/2020	“Review from previous topics
Objects
- The type of an array: arrays are specific objects, `Array.isArray()`
Advanced Array methods:
- Converting an array to a different array: `Array.prototype.map(<function>)`
- Getting a subset of an array: `Array.prototype.filter(<function>)`“”
Declaring:
- Declaring a function: `function <name>(<parameters>){ ... }`
- Function parameters: Naming and order
22/01/2020	“Review from previous topics
Declaring:
- Functions declarations as values:
  `const <function name> = function(<parameters>){ ... }`
- Arrow function shorthand:
  `const <function name> = (<parameters>) => { ... }`
Advanced Array methods:
- Higher order functions II:
  “”Functions that accept function values (callbacks)“”
- Converting an array to a single value: `Array.prototype.reduce(<function>)`”
23/01/2020	“Review from previous topics
Declaring:
- Declaring a function: `function <name>(<parameters>){ ... }`
- Functions declarations as values:
  `const <function name> = function(<parameters>){ ... }`
Function Scope:
- Parameters scope
- Declaring variables in functions
- Global vs. Local scope: Variable reassignment in functions
- Reading a program IV (reading functions only when they are called)“”"
27/01/2020	“Review from previous topics
Clones vs. References:
- Shallow cloning objects and arrays: the spread operator `...`”
28/01/2020	“Review from previous topics (Functions, for loops, if else, methods, comparison...)
29/01/2020	“Review from previous topics (functions, methods)
Advanced Parameters:
- Default parameter values:
  `function(<parameter> = <default value>) { ... }`
- Variable number of arguments: Rest params - `...args`
”
30/01/2020	“Review from previous topics (functions, methods)
Advanced Parameters:
- Default parameter values:
  `function(<parameter> = <default value>) { ... }`
- Variable number of arguments: Rest params - `...args`
”
03/02/2020	“Review from previous topics (functions, methods, arrays, loops)
Block Scope:
- Scope definition: difference between `var`, `let`, `const`
Closure:
- Declaring functions inside functions
- Nested scopes: Accessing outer variables
- First definition of closure:
  “”A function that contains at least one variable, and one nested scope”"
- Encapsulation: Isolating scopes with IIFE vs. SIAF”
04/02/2020	“Review from previous topics 
Objects
- Object literals: Property definition
  `const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }`
- Accessing properties with bracket notation (no variables)
- Accessing properties with dot notation
Object Scope:
- Methods definition
- Using methods: Review of used methods so far
- Creating methods
Conversion and iterations:
- Iterating over objects: `for(let <property name> in <object name>){ ... }`
- Property names to array: `Object.keys(<object>)`
- Iterating over arrays: `for(let <value name> of <array name>){ ... }`
- Accessing properties with bracket notation (w. vars)
- Property values to array: `Object.values(<object>)`“”"
05/02/2020	“Review from previous topics: Objects
Objects
- Object literals: Property definition
`const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }`
- Accessing properties with bracket notation (no variables)
- Accessing properties with dot notation”
06/02/2020	Review from previous topics: objects, arrays, functions
10/02/2020	“Review from previous topics
Nesting arrays and objects:
- Nesting and iterating over objects in arrays
Clones vs. References:
- Simple values are always clones: String, Number, Boolean
- Objects are references by default: Array and object literals
- Shallow cloning objects and arrays: the spread operator `...`
- Deep cloning objects and arrays: recursive function
11/02/2020	“”"Nesting arrays and objects:
- Nesting and accessing arrays within each other
- Nesting and accessing objects in objects
- Nesting and accessing arrays in objects
- Nesting and iterating over objects in arrays”"
Destructuring:
- Extracting values from arrays: Array destructuring assignment
- Extracting values from objects: Object destructuring assignment
Advanced Array methods:
- Iterating over arrays: `Array.prototype.forEach(<function>)`
- JavaScript basic test”
12/02/2020	“Review from previous topics
Review of the Javascript basic test
Destructuring:
- Named function parameters with object destructuring
Object Scope:
- Object literal context: methods, `this` and `Function.prototype.bind()`“”
Classes: Manufacturing objects with the same structure
- Creating instances with the `new` keyword, The `Date` class
- Constructing an object: The `constructor()` method, instance and `this`
- Prototype methods: Adding custom methods to our class
- Creating subclasses with `extends` and `super()`
Advanced Array methods:
- Converting an array to a different array: `Array.prototype.map(<function>)`
- Converting an array to a single value: `Array.prototype.reduce(<function>)`
- Getting a subset of an array: `Array.prototype.filter(<function>)`
Logical Thinking III:
- Sorting arrays with `Array.prototype.sort(<function>)`”
13/02/2020	“Introduction: 3 types of errors (compilation, runtime, logic)
“”Runtime errors:
- Catching errors: `try { ... } catch (e) { ... }`
- Throwing runtime errors: `throw <expression>;`
- The error object (brief intro): `new Error(<message>);`“”
Review before javascript advanced test”
17/02/2020	“- JavaScript Advanced test
- Each student reviewing and working on the exercises from the test”
18/02/2020	“- Students working individually on exercises reviewing javascript and github 
- 1 on 1's with students after JavaScript advanced test”
19/02/2020	“- Students working individually on exercises reviewing javascript and github 
- 1 on 1's with students after JavaScript advanced test”
20/02/2020	“- GitHub review 
- Students working individually on exercises reviewing javascript and github
- 1 on 1's with students after JavaScript advanced test”
