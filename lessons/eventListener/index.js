// Events:
// User Events (interaction) and Browser Events (loading, etc..)

// Listening:
// Higher order functions

let divText = document.querySelector(".text");
const print = () => {
  divText.innerText = "I am onclick function from html!";
};

let btn = document.querySelector("#more");
btn.onclick = function () {
  divText.innerText = " I am onclick function from javascript!";
};

// Listening to user actions
// `EventTarget.addEventListener(<namespace>, <callback>)`

let header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "#eee";
});

function myFunction() {
  header.style.backgroundColor = "#fff";
}

header.addEventListener("mouseleave", myFunction);

// Mouse Events:
// `click`, `mouseenter`, `mouseleave`

// Keyboard Events:
// `keydown`,`keypress`, `keyup`

function keyUpFunction(e) {
  this.style.backgroundColor = "#fff";
  console.log(e);
  if (e.code === "KeyS") alert("You pressed S");
  // if (e.code === "Enter") addToList;
}

function keyDownFunction(e) {
  this.style.backgroundColor = "#fff";
}

function keyPressFunction(e) {
  this.style.backgroundColor = "lightblue";
}

let userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keypress", keyPressFunction);
