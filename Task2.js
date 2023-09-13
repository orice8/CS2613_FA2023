const prompt = require('prompt-sync')();

function is_factorial(x) {
	
	if (x < 0) { // case: x = negative
		return console.log("${x} is a negative number.");
	} else {
		let counter = 1;
		let start = 1;
		while (start <= x) { //less than or equal to input value
			if (start == x) {
				return console.log("${x} is the factorial result of ${counter}.");
			} else {
				counter++;
				start = counter * start
			}
		}
	} 
	return console.log("${x} is not the factorial of another number.");
}

switch (prompt("Select a command:\n\tn: Check a value\n\tq: Quit\n")) {
	case "n":
		const number = prompt();
		console.log(is_factorial(number));
		break;
	case "q":
		process.exit(0);
	default:
		console.log("Unknown command!");
		break;
}
