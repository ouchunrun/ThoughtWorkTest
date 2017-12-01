'use strict';

function choose_common_elements(collection_a, collection_b) {
	let result = [];

	for(let i of collection_a){
		for(let j of collection_b){
			if(i == j) result.push(i);
		}
	}

	return result;
}

module.exports = choose_common_elements;
