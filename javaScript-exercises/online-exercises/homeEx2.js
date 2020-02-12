// A game of table tennis almost always sounds like Ping! followed by Pong!
// Therefore, you know that Player 2 has won if you hear Pong!as the last sound
// (since Player 1 didn't return the ball back).
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
// If win equals true, end the list with Pong!. If win equals false, end with Ping! instead.
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// You will always return the ball (i.e. the Pongs are yours). Player 1 serves the ball and makes Ping!.
// Return an array of strings.
// const pingPong = (arr, win) => {
//   let result = [];
const pingPong = (arr, win) => {
  let result = []; // we want the result in an array

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]) + result.push(" Pong!"); // we add "Pong!" after each "Ping!"
  }
  if (win) {
    // true by default (outside loop!!!)
    return result;
  } else {
    result.pop(); // remove last "Pong!"
    return result;
  }
};
console.log(pingPong(["Ping!"], true));
console.log(pingPong(["Ping!", "Ping!"], false));
console.log(pingPong(["Ping!", "Ping!", "Ping!"], false));

const pingPongBido = (arr, win) => {
  let result = [];
  arr.forEach(element => {
    result.push(element) + result.push("Pong");
  });
  return win ? result : result.slice(0, result.length - 1);
};
