//1. Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
// Declare another variable and assign the second item of the array as a value.
var euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
var firstVar = euroCities[1];

//2. Change the first item in the array to “Berlin”.
euroCities[0] = "Berlin";
console.log(euroCities);

//3. Print the length of the array “euroCities”.
console.log(euroCities.length);

//4. Remove the last item of the array “euroCities”.
euroCities.pop();
console.log(euroCities);

//5. Use an array method to add “Budapest” to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities);

//6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
var asianCities = ["Hong Kong", "Pekin", "Hanoi", "Tokyo", "Kyoto"];
console.log(euroCities);

//7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let newArr = asianCities.splice(1, 3);
console.log(newArr);

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
let intArr = [2, 4, 5, 7];
let result = 0;
let product = 1;
for (let i = 0; i < intArr.length; i++) {
  result += intArr[i]; //2
  product *= intArr[i];
}
console.log(
  `The sum for your Array is ${result}, The product for your Array is ${product}.`
);

// Hello Frien Create an array filled with your friends’ and family’s names. Loop over the array and greet each friend e.g. Hello Maria!
// Hello Mike! etc. Bonus: Print the indexes of each item in the array.
// Expected output example: Mike is at index 1 of my friends array.
const names = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hello ${names[i]}, and he is index ${i} of Names array`);
}

// City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: “Berlin, Paris, Prague, Rome”.
const cityNames = ["Berlin", "Paris", "Madrid", "Dubai", "Rome"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    cityNamesStr += ".";
  } else {
    cityNamesStr += ", ";
  }
}
console.log(cityNamesStr);

// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
// Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
let numArr = [2, 3, 1, 4, 5]; // expect 1, 4, 2, 3, 6
let int = 0;
let newNumArr = [];
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(newNumArr);

// Capitalize. Create a program that capitalizes the first letter of each element in an array of names.
// Examples:[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“cynthia”, “karen”, “jaNe”, “carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const arrNames = ["SARA", "aLi", "naNCy"];
for (let i = 0; i < arrNames.length; i++) {
  arrNames[i] =
    arrNames[i][0].toUpperCase() + arrNames[i].substring(1).toLocaleLowerCase();
}
console.log(arrNames);
