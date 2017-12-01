'use strict';

function choose_divisible_integer(collection_a, collection_b) {
	var result = [];

	for(var i of collection_a){
		if(jaudge(collection_b,i)) result.push(i);
	}
	return result;
}

function jaudge(collection_b,i){
	for(var j of collection_b){
		if(i % j == 0) return true;
	}
	return false;
}

module.exports = choose_divisible_integer;
