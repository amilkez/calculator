const currentNumberEle = document.querySelector(".current-number");
const lastOperation = document.querySelector(".last-operation");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll("operator");
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

let displayNumber = "";
let operationResult = 0;

numbers.forEach((num) => {
	num.addEventListener("click", () => {
		displayNumber += num.textContent;
		currentNumberEle.textContent = displayNumber;
	});
});

pointBtn.addEventListener("click", () => {
	if (displayNumber.includes(".")) return;
	displayNumber += ".";
	currentNumberEle.textContent = displayNumber;
});

acBtn.addEventListener("click", () => {
	displayNumber = "";
	currentNumberEle.textContent = 0;
});

delBtn.addEventListener("click", () => {
	displayNumber = displayNumber.substring(0, displayNumber.length - 1);
	currentNumberEle.textContent = displayNumber;
});
