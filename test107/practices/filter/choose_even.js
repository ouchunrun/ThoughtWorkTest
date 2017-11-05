'use strict';

function choose_even(collection) {
	var result = [];
	for(var i of collection){
		if(i % 2 == 0){
			result.push(i);
		}
	}
	return result;
}

module.exports = choose_even;
