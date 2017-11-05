'use strict';

function choose_no_common_elements(collection_a, collection_b) {
	var result = [];

	for(var i of collection_a){
		var sameElment = jaudge(collection_b,i);
		if(!sameElment){
			result.push(i);
		}
	}
	return result;
}

function jaudge(collection_b,i){
	for(var j of collection_b){
		if(j == i){
			return true;
		}
	}
	return false;
}

module.exports = choose_no_common_elements;
