'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var result = [];
    for(var i in collectionA){
    	for(var j of objectB["value"]){
    		if(collectionA[i].key == j){
    			collectionA[i].count --;
    		}
    	}
    	result.push(collectionA[i])
    }
    return result;
}
