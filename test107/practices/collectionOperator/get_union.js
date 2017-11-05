'use strict';

function get_union(collection_a, collection_b) {
    var result = collection_a;
    for(var item of collection_b){
		var hasItem = hasKey(result, item);
		if(!hasItem){
			result.push(item)
		}
    }
    return result;
}

function hasKey(result, item){
	for(var i of result){
		if(i==item){
			return true;
		}
	}
	return false;
}

module.exports = get_union;

