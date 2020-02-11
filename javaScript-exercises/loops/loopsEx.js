// Addition. Write a program to add up the numbers 1 to 20.

let sumCounter = 0;
for (i = 1; i <= 20; i++) {
  sumCounter += i;
}
console.log(sumCounter);

// There are i bottles of beer on the wall. Write a program that will output,
// “There is one bottle of beer on the wall.” “There are two bottles of beer on the wall” up until there are five bottles.

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle of beer on the wall.`);
  } else {
    console.log(`There are ${i} bottles of beer on the wall.`);
  }
}

// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even.`);
  } else if (i % 2 == 1) {
    console.log(`${i} is odd.`);
  }
}

// 1, 2, 4, 8... 128
for (let i = 1; i <= 128; ) {
  console.log(i);
  i = i * 2;
}
// 0, 2, 4... 10
for (i = 0; i <= 10; ) {
  console.log(i);
  i += 2;
}

// 3, 6, 9 ... 15
for (i = 3; i <= 15; ) {
  console.log(i);
  i += 3;
}
// 9, 8, 7... 0
for (i = 9; i >= 0; i--) {
  console.log(i);
}
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(i);
  }
}
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let counter = 0;
for (let i = 0; i <= 4; ) {
  console.log(i);
  if (i == 4 && counter < 2) {
    i = 0;
    counter++;
  } else {
    i++;
  }
}

let Tbox = "@@@@@@";
for (let i = 0; i <= 5; i++) {
  console.log(Tbox.slice(i));
}
