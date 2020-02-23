// **Months**
// - Create a function that accepts a text from user and check if the user has entered a month name,
// if so print out that month and in which season it is.

// With switch case
console.log("------Months with switch------");
function isMonth(str) {
  str = str.toLowerCase().split(" ");
  console.log(str);
  const months = [
    "january",
    "february",
    "march",
    "april",
    "march",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  function season(value) {
    switch (value) {
      case "december":
      case "january":
      case "february":
        return "winter";
      case "march":
      case "april":
      case "may":
        return "spring";
      case "june":
      case "july":
      case "august":
        return "summer";
      case "september":
      case "october":
      case "november":
        return "fall";
      default:
        return "Sorry something went wrong";
    }
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < months.length; j++) {
      if (str[i].includes(months[j])) {
        let newString = `The month of ${str[i]} is in the ${season(str[i])}!`;
        return newString;
      }
    }
  }
}
console.log(isMonth("the best march the best"));

// With if else
console.log("------Months with if------");
function monthCheck(string) {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  let strToArray = string.toLowerCase().split(" ");
  let result = "";
  let counter = 0;
  let winter = ["december", "january", "february"];
  let spring = ["march", "april", "may"];
  let summer = ["jun", "july", "august"];
  let autumn = ["september", "october", "november"];
  const currentSeason = monthToLook => {
    let seasonName = "";
    if (winter.includes(monthToLook)) {
      seasonName = seasons[0];
    } else if (spring.includes(monthToLook)) {
      seasonName = seasons[1];
    } else if (summer.includes(monthToLook)) {
      seasonName = seasons[2];
    } else if (autumn.includes(monthToLook)) {
      seasonName = seasons[3];
    } else {
      seasonName = "Sorry something went wong";
    }
    return seasonName;
  };
  for (let i = 0; i < strToArray.length; i++) {
    if (months.includes(strToArray[i])) {
      let currentWord = strToArray[i];
      result += `You have entered ${currentWord}, which is in ${currentSeason(
        currentWord
      )}. `;
      counter++;
    }
  }
  if (counter == 0) {
    result = `Sorry, I didn't find any months in your text.`;
  }
  return result;
}
console.log(monthCheck("hi is jun"));
console.log(monthCheck("Hi hi is"));

// **Grades**
// - Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)
console.log("-----Grades version1------");
function grades(...args) {
  const array = args;
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / args.length;
  if (average < 70) {
    return `Your average is ${average}, you have F`;
  } else if (average >= 70 && average < 80) {
    return `Your average is ${average}, you have C`;
  } else if (average >= 80 && average < 85) {
    return `Your average is ${average}, you have B`;
  } else if (average >= 85 && average < 90) {
    return `Your average is ${average}, you have A`;
  } else if (average > 90) {
    return `Your average is ${average}, you have A+`;
  } else {
    console.log("Something went wrong");
  }
}
console.log(grades(80, 85, 78, 80, 80, 56));

// Version 2
console.log("------Grades version2------");
const studentDe = (...args) => {
  // let sum = 0;
  // let avg = 0;
  // console.log(args.length + " length");
  // sum = args.reduce((acc, cur) => acc + cur);
  // console.log(sum + " Sum");
  // avg = Math.floor(sum / args.length);
  // console.log(avg + " Avg");
  let notesResult = Math.floor(
    args.reduce((acc, cur) => acc + cur) / args.length
  );
  let result = "";
  if (notesResult > 90) {
    result = `Your average is ${notesResult}, you have A+`;
  } else if (notesResult >= 85 && notesResult <= 90) {
    result = `Your average is ${notesResult}, you have  A`;
  } else if (notesResult >= 80 && notesResult <= 84) {
    result = `Your average is ${notesResult}, you have B`;
  } else if (notesResult >= 70 && notesResult <= 79) {
    result = `Your average is ${notesResult}, you have C`;
  } else if (notesResult < 70) {
    result = `Your average is ${notesResult}, you have F`;
  } else {
    result = `Sorry something went wrong`;
  }
  return result;
};
console.log(studentDe(99, 74, 55, 80, 80, 98, 89));
