'use strict';

function compare_collections(collection_a, collection_b) {

	collection_a.reduce(function(prev, curv, curindex, self){
		if(prev != collection_b[curindex-1]) return false;
		return curv;
	})
	return true;
}

module.exports = compare_collections;


