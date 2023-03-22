console.log('test')

let firstNumber;
let operator;
let secondNumber;

//Add function
const add = (a,b) => a + b;

//Subtract function
const subtract = (a,b) => a - b;

//Multiply function
const multiply = (a,b) => a * b;

//Divide function
const divide = (a,b) => a / b;

//Operate function
const operate = function(firstNumber, operator,secondNumber) {
  if (operator === '+') {
    return add(firstNumber, secondNumber)
  } else if (operator === '-'){
    return subtract(firstNumber, secondNumber)
  } else if (operator === '*'){
    return multiply(firstNumber, secondNumber)
  } else if (operator === '/'){
    return divide(firstNumber, secondNumber)
  }
}