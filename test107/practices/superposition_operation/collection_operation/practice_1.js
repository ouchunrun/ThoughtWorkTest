'use strict';

function hybrid_operation(collection) {
	var sum = 0;
	for(var i of collection){
		sum +=i*3+2
	}
	return sum;
 
}

module.exports = hybrid_operation;

