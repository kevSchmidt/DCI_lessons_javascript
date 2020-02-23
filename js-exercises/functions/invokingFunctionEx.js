// **Musical notes**
// - Create a function that returns its enharmonic equivalent. The examples below should make this clear.
// **Examples**
// getEquivalent("D#") ➞ "Eb"
// getEquivalent("Gb") ➞ "F#"
// getEquivalent("Bb") ➞"A#"
// **Notes**
// Note names will always be a capital letter followed by either # or b.
// Remember that the note after G is A and vice versa.
console.log("------Musical Notes------");
const getEquivalent = note => {
  const FIRST_NOTE = ["C#", "D#", "F#", "G#", "A#", "K#"];
  const SECOND_NOTE = ["Db", "Eb", "Gb", "Ab", "Bb", "Kk"];
  let index = null;
  const newArray = FIRST_NOTE.concat(SECOND_NOTE);
  if (typeof note === "undefined" || note.length == 0) {
    return `Please insert a value..`;
  } else {
    if (newArray.includes(note)) {
      index = newArray.indexOf(note);
    } else {
      return `This is not a valid note..`;
    }
    if (index >= FIRST_NOTE.length) {
      index -= SECOND_NOTE.length;
      return `The equivalent value for ${note} is ${FIRST_NOTE[index]}`;
    } else {
      index;
      return `The equivalent value for ${note} is ${SECOND_NOTE[index]}`;
    }
  }
};
/* const getEquivalent = note => { 
  let array = note;
  result = "";
  const firstNote = ["C#", "D#", "F#", "G#", "A#"];
  const secondNote = ["Db", "Eb", "Gb", "Ab", "Bb"];
  for (let i = 0; i < firstNote.length; i++) {
    for (let j = 0; j < secondNote.length; j++) {
      if (array.includes(firstNote[i])) {
        result = secondNote[i];
      } else if (array.includes(secondNote[j])) {
        result = firstNote[j];
      } else {
        continue;
      }
    }
  }
  return result;
};*/
console.log(getEquivalent("C#"));
console.log(getEquivalent("Gb"));
console.log(getEquivalent("Bb"));
console.log(getEquivalent("Db"));

// 1. Write a function add that uses a closure that performs addition on arguments in two separate function calls.
console.log("------Exercise------");

const add = a => {
  return b => {
    return a + b;
  };
};
console.log(add(3)(4));
// 2. Write a function multiplier that uses a closure to perform multiplication. The outer function should be stored in a variable which is then called.
function multiplier(num) {
  return x => x * num; // inner function
}
const times = multiplier(2);
console.log(times(5)); // function call separated --> more secured (num = 2 and x = 5)

// **Retire**
// - Write a function that accepts several parameters and
// calculates the number of money that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// **Example**
// A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
// How much money will she have saved until she retires? Output: $30000
console.log("------Retire------");
((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    console.log(`You are already retired !`);
  } else {
    let yearsToSave = retirementAge - currentAge;
    // console.log(yearsToSave + ` years to go`);
    let monthsToSave = yearsToSave * 12;
    // console.log(monthsToSave + ` months to go`);
    let amountSavedByMonths = (monthlyWage * percentage) / 100;
    let totalSaved = amountSavedByMonths * monthsToSave;
    console.log(
      `You will be really old in ${yearsToSave} years and you will have to save ${totalSaved} in your bank.`
    );
  }
})(40, 65, 2000, 5);
