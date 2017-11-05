'use strict';

function choose_multiples_of_three(collection) {
	var result = [];
	for(var i of collection){
		if(i % 3 == 0){
			result.push(i)
		}
	}
	return result;
}

module.exports = choose_multiples_of_three;
