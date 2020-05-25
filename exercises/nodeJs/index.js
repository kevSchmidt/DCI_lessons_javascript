console.log("--------------------------- NEW TERMINAL ------------------");

const args = process.argv.slice(2);
const star = "*";

function superHeader(numInput = 10, textInput = "Hey") {
  const stars = star.repeat(numInput);
  console.log(`
  ${stars}
  ${textInput}
  ${stars}
  `);
}
superHeader(args[0], args[1]);

// ========== Alex ===

console.log("------ ALEX -----");

const configs = process.argv.slice(2);
const char = "*";
function superAlex(numInput = 10, textInput = "Hey") {
  let stars = char.repeat(numInput);
  let text = textInput;
  configs.forEach((elem) => {
    if (elem / elem === 1) {
      stars = char.repeat(elem);
    } else {
      text = elem;
    }
  });
  console.log(`
    ${stars}
    ${text}
    ${stars}
`);
}

superAlex(10, "hey");

// ========== Mauricio ===

console.log("--------- MAURICIO ---------");

// const args = process.argv.slice(2);
stars = "*";
space = "\xa0";
centerText = 0;
function nodeJS(times = 10, word = "hey") {
  if (args.length == 0 || args.length == 1) {
    centerText = times / word.length - 1;
    console.log(
      `${stars.repeat(times)}\n ${space.repeat(
        centerText
      )}${word.toUpperCase()} \n${stars.repeat(times)}`
    );
  } else {
    centerText = args[0] / 2 - args[1].length / 2;
    console.log(
      `${stars.repeat(args[0])}\n ${space.repeat(
        centerText
      )}${args[1].toUpperCase()} \n${stars.repeat(args[0])}`
    );
  }
}
nodeJS();
