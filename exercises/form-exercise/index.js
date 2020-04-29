// We set our variable in the global environment
const inputOne = document.querySelector("#firstNumber");
const inputTwo = document.querySelector("#secondNumber");
const inputResult = document.querySelector("#sumResult");
const Btns = document.querySelectorAll(".myBtn");

Btns.forEach((elem) => {
  // add event on click
  elem.addEventListener("click", function (e) {
    // we want numbers
    let a = parseInt(inputOne.value);
    let b = parseInt(inputTwo.value);
    let result;

    // we select items by class name
    switch (elem.className) {
      case "myBtn add":
        result = a + b;
        break;
      case "myBtn subtract":
        result = a - b;
        break;
      case "myBtn divide":
        result = a / b;
        break;
      case "myBtn multiply":
        result = a * b;
        break;
    }

    inputResult.value = result;
  });
});
