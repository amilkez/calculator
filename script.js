const currentNumberEle = document.querySelector(".current-number");
const lastOperation = document.querySelector(".last-operation");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll("operator");
const point = document.querySelector(".point");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

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

numbers.forEach((num) => {
	num.addEventListener("click", () => {
		displayNumber += num.textContent;
		currentNumberEle.textContent = displayNumber;
	});
});

point.addEventListener(
	"click",
	() => {
		displayNumber += ".";
		currentNumberEle.textContent = displayNumber;
	},
	{ once: true }
);
