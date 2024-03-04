let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
    displayValue += operator;
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}
