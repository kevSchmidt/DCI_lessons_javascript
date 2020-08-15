// ****MONTHS FUNCTION****

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
// With switch

function nameOfMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      console.log("This is not a num.");
  }
  return result;
}
console.log(nameOfMonth(2));
console.log(nameOfMonth(20));

// With if else
function nameOfTheMonthEasyVersion(num) {
  let result = "";
  let newNum = num - 1;
  if (num >= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "Sorry, it is not a month";
  }
  return result;
}
console.log(nameOfTheMonthEasyVersion(11));
