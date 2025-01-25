let currentInput = "";
let operator = null;
let previousInput = "";

function updateDisplay() {
  document.getElementById('display').value = currentInput || previousInput || "0";
}

function appendNumber(number) {
  if (currentInput.length < 15) {
    currentInput += number;
    updateDisplay();
  }
}

function appendOperator(op) {
  if (currentInput === "" && op !== '-') {
    return; // Prevent operator if no number is entered
  }
  if (previousInput && operator) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  previousInput = "";
  updateDisplay();
}

function calculate() {
  if (currentInput === "" || previousInput === "") return;

  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      if (currentInput === "0") {
        result = "Error";
      } else {
        result = parseFloat(previousInput) / parseFloat(currentInput);
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}
