'use strict';

function hybrid_operation_to_uneven(collection) {
	var result = [];
	for(var i of collection){
		if(i%2!=0){
			var add = i*3+2
			result.push(add);
		}
	}
	return result;
}

module.exports = hybrid_operation_to_uneven;

