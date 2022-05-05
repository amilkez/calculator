const currentNumberEle = document.querySelector(".current-number");
const lastOperationEle = document.querySelector(".last-operation");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const pointBtn = document.querySelector(".point");
const acBtn = document.querySelector(".ac");
const delBtn = document.querySelector(".del");
const equalsBtn = document.querySelector(".equal");

const add = (num1, num2) => {
	return num1 + num2;
};

const subtract = (num1, num2) => {
	return num1 - num2;
};

const divide = (num1, num2) => {
	return num1 / num2;
};

const multiply = (num1, num2) => {
	return num1 * num2;
};

const operate = (operator, num1, num2) => {
	switch (operator) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "/":
			return divide(num1, num2);
		case "*":
			return multiply(num1, num2);
		default:
			return "ERROR";
	}
};

let currentNumber = "";
let lastNumber = "";
let lastOperation = "";
let currentOperator = "";
let operationResult = 0;

numbers.forEach((num) => {
	num.addEventListener("click", () => {
		currentNumber += num.textContent;
		currentNumberEle.textContent = currentNumber;
	});
});

pointBtn.addEventListener("click", () => {
	if (currentNumber.includes(".")) return;
	currentNumber += ".";
	currentNumberEle.textContent = currentNumber;
});

acBtn.addEventListener("click", () => {
	currentNumberEle.textContent = 0;
	lastOperationEle.textContent = "";
	currentNumber = "";
	lastNumber = "";
	lastOperation = "";
	currentOperator = "";
	operationResult = 0;
});

delBtn.addEventListener("click", () => {
	currentNumber = currentNumber.substring(0, currentNumber.length - 1);
	currentNumberEle.textContent = currentNumber;
});

operators.forEach((operator) => {
	operator.addEventListener("click", () => {
		lastNumber = Number(currentNumber);
		currentOperator = operator.textContent;
		lastOperation = `${lastNumber} ${currentOperator}`;
		lastOperationEle.textContent = lastOperation;
		currentNumber = "";
	});
});

equalsBtn.addEventListener("click", () => {
	lastOperation = `${lastNumber} ${currentOperator} ${currentNumber}`;

	currentNumber = Number(currentNumber);
	operationResult = operate(currentOperator, lastNumber, currentNumber);
	lastNumber = operationResult;
	currentNumberEle.textContent = operationResult;
	lastOperationEle.textContent = lastOperation;
	currentNumber = lastNumber;
});
