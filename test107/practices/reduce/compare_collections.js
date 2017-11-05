'use strict';

function compare_collections(collection_a, collection_b) {
	for(var i=0;i<collection_a.length-1;i++){
		if(collection_a[i] != collection_b[i]){
			return false;
		}
	}
	return true;
}

module.exports = compare_collections;


