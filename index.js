// your code goes here
let currentInput = '';
let operator = '';
let previousInput = '';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (value >= '0' && value <= '9') {
            currentInput += value;
        } else if (['+', '-', '×', '÷'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else if (value === '=') {
            if (operator && previousInput) {
                if (operator === '÷' && currentInput === '0') {
                    display.textContent = "Error";
                } else {
                    currentInput = eval(`${previousInput} ${operator === '×' ? '*' : operator} ${currentInput}`);
                    display.textContent = currentInput;
                }
                previousInput = '';
                operator = '';
            }
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '.') {
            if (!currentInput.includes('.')) {
                currentInput += value;
            }
        }

        if (value !== '=') {
            display.textContent = currentInput;
        }
    });
});
