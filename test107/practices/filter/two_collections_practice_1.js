'use strict';

function choose_common_elements(collection_a, collection_b) {
	var result = [];

	for(var i of collection_a){
		for(var j of collection_b){
			if(i == j){
				result.push(i);
			}
		}
	}

	return result;
}

module.exports = choose_common_elements;
