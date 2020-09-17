// HOW JAVASCRIPT (SYNCHRONOUS) DEAL WITH CALLBACKS (ASYNCHRONOUS)
// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("finished function");
}

function clickHandler() {
  console.log("click event!");
}

// listen for the click event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("finished execution");

// When we click during the 3s, 'click event!' appears after 'finished function' and 'finish execution':
// The Javascript engine won't look at the Event queue until the execution stack is finished.
