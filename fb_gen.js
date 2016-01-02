'use strict'

module.exports = function(seqLength) {
        var fenoArray = [ 0, 1 ];

        var numberOne = fenoArray[0];
        var numberTwo = fenoArray[1];

        var seqRemainder = seqLength - 2;

        var gen = generator();
        var sum = gen.next().value;

        function* generator() {	

	        while (true) {
		        if (sum) {
		            numberOne = numberTwo;
			        numberTwo = sum;		
		        }

		        yield numberOne + numberTwo;
	        }
        }

        for (var i=0; i < seqRemainder; i++) {
	        fenoArray.push(sum);
	        sum = gen.next().value;	        
        }

        return fenoArray;
    }
