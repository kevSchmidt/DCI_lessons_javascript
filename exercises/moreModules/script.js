exports.prepareString = (str) => {
  const lowered = str.map((arg) => {
    const result = arg.toLowerCase();
    return result[0].toUpperCase() + result.slice(1);
  });
  console.log(lowered.join(" "));
};
