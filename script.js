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
		case "add":
		case "+":
			return add(num1, num2);
		case "subtract":
		case "-":
			return subtract(num1, num2);
		case "divide":
		case "/":
			return divide(num1, num2);
		case "multiply":
		case "*":
			return multiply(num1, num2);
		default:
			return "ERROR";
	}
};
