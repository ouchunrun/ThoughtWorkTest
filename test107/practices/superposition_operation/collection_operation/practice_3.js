'use strict';

function hybrid_operation_to_uneven(collection) {
	var sum = 0;
	for(var i of collection){
		if(i%2!=0){
			sum  += i*3+5
		}
	}
	return sum;

}

module.exports = hybrid_operation_to_uneven;

