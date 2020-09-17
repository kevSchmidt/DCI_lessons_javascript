// 1. Make an array of your "siblings" names or your favorite movie characters' names.
const siblings = ["Taka", "Ioannes", "Mauricio", "Claudinei"];
// 2. Make an array of your parent's names.
const parentName = ["Rainer", "Gaelle"];
// 3. Combine these two array.
let arrTotal = siblings.concat(parentName);
// 4. Add your pet's name.
arrTotal.push("Chanel");
// 5. Reverse the order of the array.
arrTotal.reverse();
// 6. Access one of your parents' name.
let mum = arrTotal[1];
// 7. Update the name of one of your parents.
mum = "Gaelle is my mother";
arrTotal[1] = mum;

// Reverse the string: “JavaScript”.
const str = "JavaScript";
let strToArr = str.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);
