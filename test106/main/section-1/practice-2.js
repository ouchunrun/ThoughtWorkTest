'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result = [];

    for(var itemA of collectionA){
        //虽然实现了，但是这里三层循环复杂度太高，考虑优化
        var max = collectionB.length
    	for(var i=0;i<max;i++){
    		for(var itemB of collectionB[i]){
    			if(itemA === itemB){
    				result.push(itemA)
    			}
    		}
    	}
    }
    return result;
}
