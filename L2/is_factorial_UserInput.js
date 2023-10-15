const prompt = require('prompt-sync')({sigint: true});

function is_factorial(x) {
	
	if (x < 0) { // case: x = negative
		return `${x} is a negative number.`;
	} else {
		let counter = 1;
		let start = 1;
		while (start <= x) { //less than or equal to input value
			if (start == x) {
				return `${x} is the factorial result of ${counter}.`;
			} else {
				counter++;
				start = counter * start
			}
		}
	} 
	return `${x} is not the factorial of another number.`;
}

var newPrompt = "Select a command:\n\tn: Check a value\n\tq: Quit\n";

while (true) { //not empty

	var command = prompt(newPrompt);
	
	if (command === "n") {
		var number = prompt(); // get number to find factorial
		result = is_factorial(number); // print results
		console.log(result);
	} else if (command === "q"){
		break;
	} else {
		console.log("Unknown command!");
	}
	
	newPrompt = "New command: ";
}


		