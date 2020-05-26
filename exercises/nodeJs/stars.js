module.exports = (stars = 10, header = "Hey") => {
  console.log(`${"*".repeat(stars)} \n ${header} \n${"*".repeat(stars)}`);
};
