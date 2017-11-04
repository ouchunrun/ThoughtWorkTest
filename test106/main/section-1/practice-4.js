'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
	var result = [];
	for(var itemA of collectionA){
		var indexAinB = itemA["key"]
		for(var itemB of objectB["value"]){
			if(indexAinB == itemB){
				result.push(indexAinB)
			}
		}
	}

    return result;
}
