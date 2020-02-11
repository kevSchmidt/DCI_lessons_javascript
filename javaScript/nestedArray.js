//-----------------------------------------------Nested arrays---------------------------------------------------------//

// accessing individual value
const family = [
  [`Ali`, 22, `teacher`],
  [`Olga`, 40, `Chef`]
]; // family[1][0] -> Olga

const arr = [
  [2, 3, 4],
  [5, 6],
  [8, 9, 10]
]; // arr[0][2] -> 4

// With for()
console.log("-----------With for()----------------");
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // [j] is looping inside of [i]
    console.log(arr[i][j]); // print out all individual index
  }
}

console.log("Push an array inside an array :");
let newArr = [];
for (i = 0; i <= 5; i++) {
  for (j = 0; j <= 2; j++) {
    newArr.push([i]);
  }
}
console.log(newArr);

// With .forEach()
console.log("------------With .forEach()-------------");
family.forEach(array => array.forEach(element => console.log(element)));

// With .map()
console.log("-------------With .map()----------------");
family.map(array => array.map(element => console.log(element)));

// With for of
console.log("-------------With for of----------------");
for (let array of family) {
  for (let element of array) {
    console.log(element);
  }
}
