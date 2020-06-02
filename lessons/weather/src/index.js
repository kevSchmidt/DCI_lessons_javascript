//console.log("Hi");
const weather = require("./lib/weather");
const args = process.argv.slice(2);
// npm start Berlin Germany
weather(args[0], args[1]).then(console.log).catch(console.error);
