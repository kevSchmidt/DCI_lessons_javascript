const add = () => {
  let a = +document.querySelector("#firstNumber").value;
  let b = +document.querySelector("#secondNumber").value;
  let result = a + b;

  document.querySelector("#sumResult").value = result;
};

const minus = () => {
  let a = +document.querySelector("#firstNumber").value;
  let b = +document.querySelector("#secondNumber").value;
  let result = a - b;

  document.querySelector("#sumResult").value = result;
};

const multiply = () => {
  let a = +document.querySelector("#firstNumber").value;
  let b = +document.querySelector("#secondNumber").value;
  let result = a * b;

  document.querySelector("#sumResult").value = result;
};

const divide = () => {
  let a = +document.querySelector("#firstNumber").value;
  let b = +document.querySelector("#secondNumber").value;
  let result = a % b;

  document.querySelector("#sumResult").value = result;
};
