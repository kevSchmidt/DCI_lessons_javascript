// <!-- ----------------------------------------------- -->
// <!-- --------------if(<boolean>){ ... }------------- -->
// <!-- ----------------------------------------------- -->

let a, b, c;
a = true;
b = false;
c = true;
let counter = 0;
let logIn = false;
if (a == c && b) {
  console.log("True");
  counter = 2;
  logIn = true;
} else {
  console.log("Other condition");
  counter = 3;
  logIn = false;
}
console.log(logIn, counter);

// <!-- ----------------------------------------------- -->
// <!-- -----------switch(<expression>){ ... }--------- -->
// <!-- ----------------------------------------------- -->

const color = "Black";
switch (color) {
  case `Pink`:
    console.log(`cool`);
    break;
  case `Black`:
    console.log(`it is black`);
    break;
  case `white`:
    console.log(`it is white`);
    break;
  default:
    console.log(`No that is crazy`);
}

const month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("Mch");
    break;
  default:
    console.log("After Mch");
}

// <!-- ----------------------------------------------- -->
// <!-- ---------------switch vs. else if-------------- -->
// <!-- ----------------------------------------------- -->

const num = 5;
if (num <= 10 && num >= 0) {
  console.log("it is a num in the range of 1-10");
  if (num == 1) {
    console.log(num);
  }
  if (num == 2) {
    console.log(num);
  }
  if (num == 3) {
    console.log(num);
  }
  if (num == 4) {
    console.log(num);
  }
} else {
  console.log("it is not a num");
}

switch (num) {
  case 1:
    console.log(num);
    break;
  case 2:
    console.log(num);
    break;
  case 3:
    console.log(num);
    break;
  case 4:
    console.log(num);
    break;
  default:
    console.log("its not a number");
}
