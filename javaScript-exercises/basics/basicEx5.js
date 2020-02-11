// Declare two variables: “a” with the value of true, and “b” with the value of false.
// Check the result of:
// a) a AND b.
let a = true;
let b = false;
console.log(a && b);

// b) a OR b.
console.log(a || b);

// NOT (a AND b).
console.log(!(a && b));

// Declare three more variables “x”, “y”, “z”. Give these variables number values. Check the result of whether:
// a) x is greater than z AND x is greater than y.
let x = 20;
let y = 2;
let z = 20;
console.log(x > z && x > y);

// b) x is NOT equal to y.
console.log(x !== y);

// c) z is less than y OR z is greater than x.
console.log(z < y || z > x);

// d) x is equal to z OR x is NOT equal to y.
console.log(x == z || x !== y);

// e) x is greater than or equal to 10 AND y is less than or equal to 10.
console.log(x >= 10 && y <= 10);

// f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.
console.log(x * z < 100 || x * y > 100);

// 1. Calculate the perimeter of a square. Assume each side is 4.75cm.
let squarePar = 4.75 * 4;
console.log(`The parameter of the square is ${squarePar}cm.`);

// 2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let triangleSide1 = 5;
let triangleSide2 = 6;
let triangleSide3 = 7;
let trianglePar = triangleSide1 + triangleSide2 + triangleSide3;
console.log(`The parameter of the triangles is ${trianglePar}cm.`);

// 3. Calculate the area of a square. Each side is 5cm.
let squareSide = 5;
let squareArea = squareSide * squareSide;
console.log(`The area of the square is ${squareArea}cm².`);

// 4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let triangleHeight = 4;
let triangleArea = (triangleSide3 * triangleHeight) / 2;
console.log(`The area of the triangle is ${triangleArea}cm².`);

// 5. Calculate the volume of a cube. Length of each side is 9cm.
let cubeLength = 9;
let cubeVolume = cubeLength * cubeLength * cubeLength;
console.log(`The volume of the cube is ${cubeVolume}cm³.`);

// 6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip.
let bills1 = 22.5 * 1.1;
let bills2 = 26.67 * 1.15;
let bills3 = 35.92 * 1.2;
console.log(`The first bill including tips is ${bills1.toFixed(2)}€.`);
console.log(`The second bill including tips is ${bills2.toFixed(2)}€.`);
console.log(`The third bill including tips is ${bills3.toFixed(2)}€.`);
