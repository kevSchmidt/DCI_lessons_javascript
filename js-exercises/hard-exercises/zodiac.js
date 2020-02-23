// **Zodiac**
// - Creat a function that give your zodiac sign.

// First version
console.log("------Zodiac version1------");
function newObject(name, day, month, year) {
  let userDay = day;
  let userMonth = month;
  const userData = {
    userName: name,
    firstDay: day,
    firstMonth: month,
    firstYear: year
  };
  if (
    (userDay >= "19" && userMonth === "02") ||
    (userDay <= "20" && userMonth === "03")
  ) {
    console.log("Your sign is The Fish");
  } else if (
    (userDay >= "21" && userMonth === "03") ||
    (userDay <= "19" && userMonth === "04")
  ) {
    console.log("Your sign is The Ram");
  } else if (
    (userDay >= "21" && userMonth === "06") ||
    (userDay <= "22" && userMonth === "07")
  ) {
    console.log("Your sign is The Crab");
  } else if (
    (userDay >= "20" && userMonth === "04") ||
    (userDay <= "20" && userMonth === "05")
  ) {
    console.log("Your sign is The Bull");
  } else if (
    (userDay >= "23" && userMonth === "07") ||
    (userDay <= "22" && userMonth === "08")
  ) {
    console.log("Your sign is The Lion");
  } else if (
    (userDay >= "21" && userMonth === "05") ||
    (userDay <= "20" && userMonth === "06")
  ) {
    console.log("Your sign is The Twins");
  } else if (
    (userDay >= "23" && userMonth === "08") ||
    (userDay <= "22" && userMonth === "09")
  ) {
    console.log("Your sign is The Virgin");
  } else if (
    (userDay >= "23" && userMonth === "09") ||
    (userDay <= "22" && userMonth === "10")
  ) {
    console.log("Your sign is The Scales");
  } else if (
    (userDay >= "20" && userMonth === "01") ||
    (userDay <= "18" && userMonth === "02")
  ) {
    console.log("Your sign is The Water Bearer");
  } else if (
    (userDay >= "22" && userMonth === "11") ||
    (userDay <= "21" && userMonth === "12")
  ) {
    console.log("Your sign is The Archer");
  } else {
    console.log("Please enter a valid day or month");
  }
}
newObject(`Hadi`, `1`, `08`, `1989`);

// Second version
console.log("------Zodiac version2------");
function zodiac(name, day, month, year) {
  const lastDay = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  const signs = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn"
  ];
  const userData = {
    userName: name,
    firstDay: day,
    firstMonth: month,
    firstYear: year,

    newMeth: function() {
      if (this.firstDay > lastDay[this.firstMonth]) {
        return signs[this.firstMonth];
      } else {
        return signs[this.firstMonth - 1];
      }
    }
  };
  return `Hello ${name}! Your Zodiac sign is: ${userData.newMeth()}`;
}
console.log(zodiac("Kevin", 14, 02, 1993));

// Third version
console.log("------Zodiac version3------");
const zodiacObj = {
  // object with zodiac sign and their last days
  Capricorn1: 19,
  Aquarius: 19,
  Pisces: 18,
  Aries: 20,
  Taurus: 19,
  Gemini: 20,
  Cancer: 20,
  Leo: 22,
  Virgo: 22,
  Libra: 22,
  Scorpio: 22,
  Sagittarius: 21,
  Capricorn: 21
};
function calculate(name, day, month, year) {
  total = Object.entries(zodiacObj); // convert object into array
  // console.log(total);
  const userInput = {
    // link parameters(day, month) with our userInput
    userName: name,
    userDay: day,
    userMonth: month,
    userYear: year,
    method: function() {
      // inner function
      if (userInput.userDay > total[userInput.userMonth][1]) {
        // [1] -> we wanna have just the last day to compare
        return console.log(total[userInput.userMonth][0]); // [0] -> we don't wanna grab last days values
      } else {
        return console.log(total[userInput.userMonth - 1][0]); // if not: take the zodiac sign before
      }
    }
  };
  return userInput.method(); // inner function call
}
calculate("Kevin", 14, 02, 1993);
calculate("Mauricio", 27, 11, 1993);
calculate("Taka", 20, 04, 1993);
calculate("Hadi", 31, 12, 1990);
