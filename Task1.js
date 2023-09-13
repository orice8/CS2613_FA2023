function is_factorial(x) {
	
	if (x < 0) { // case: x = negative
		return -1;
	} else {
		let counter = 1;
		let start = 1;
		while (start <= x) { //less than or equal to input value
			if (start == x) {
				return counter;
			} else {
				counter++;
				start = counter * start
			}
		}
	} 
	return 0;
}

console.log(is_factorial(4040))
