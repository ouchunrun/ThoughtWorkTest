'use strict';

function amount_even(collection) {
	var sum = 0;
	for(var i of collection){
		if(i%2==0){
			sum  += i
		}
	}
	return sum;
}

module.exports = amount_even;
