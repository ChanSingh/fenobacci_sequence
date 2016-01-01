'use strict'

var numberOne = 0;
var numberTwo = 1;

function* generator() {	

	while (true) {
		if (sum) {
			numberOne = numberTwo;
			numberTwo = sum;		
		}

		yield numberOne + numberTwo;
	}

}

var gen = generator();
var sum = gen.next().value;

for (var i=0; i < 30; i++) {
	console.log(sum);
	sum = gen.next().value;
}
