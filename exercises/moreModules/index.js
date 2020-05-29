console.log("--------------------------------- NEW TERMINAL -----------------");

const { prepareString } = require("./script");
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);

if (args.includes("--help")) {
  showHelp();
}

prepareString(args);
