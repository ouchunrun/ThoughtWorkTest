'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result = [];
    for(var i in collectionA){
    	for(var j of objectB["value"]){
    		if(collectionA[i].key == j){
    			//这里这个商啊，，，
    			collectionA[i].count =collectionA[i].count-parseInt(collectionA[i].count/3);
    		}
    	}
    	result.push(collectionA[i])
    }
    console.log(result)
    return result;
}
