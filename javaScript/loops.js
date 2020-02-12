//-------------------------------------------------While------------------------------------------------------//

console.log("With while :");
let x = 7;
while (x <= 10) {
  console.log(x);
  x++;
} // print numbers from x to 10

let y = 1;
let result = 1;
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9 = ${result}`);
  y++;
} // print table of 9

let count = 3;
while (count >= 0) {
  console.log(`this num is ${count}`);
  count--;
} // print numbers from count to 0

//----------------------------------------------------Do--------------------------------------------------------//

console.log("With do :");
let a = 98;
do {
  console.log(a);
  a++;
} while (a <= 100); // print numbers from a to 100

let zara = 2;
do {
  console.log(`there is ${zara} on the line.`);
  zara--;
} while (zara >= 0); // print string until zara = 0

//-----------------------------------------------------For--------------------------------------------------------//

console.log("With for :");
for (let i = 0; i <= 5; i++) {
  console.log(i);
} // print numbers from i to 5

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} // print even numbers from i to 10

for (run = 100; run <= 500; ) {
  console.log(run);
  run += 100;
} // print numbers from run to 500 with increment of 100

for (let b = 0; b <= 100; b++) {
  if (b == 5) {
    break;
  }
  console.log(b);
} // print numbers from b to 100 and stop at b = 5

let result2 = 0;
for (let c = 1; c <= 3; c++) {
  for (let j = 1; j <= 10; j++) {
    result2 = c * j;
    console.log(`${c} * ${j} = ${result2}`);
  }
} // print tables 1 -> 3

let str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(`The ${i} letter is ${str[i]}`);
} // print letters
