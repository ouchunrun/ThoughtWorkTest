'use strict';

function choose_no_common_elements(collection_a, collection_b) {
	var result = [];

	for(var i of collection_a){
		if(jaudge(collection_b,i)) result.push(i);
	}
	return result;
}

function jaudge(collection_b,i){
	for(var j of collection_b){
		if(j == i) return false;
	}
	return true;
}

module.exports = choose_no_common_elements;
