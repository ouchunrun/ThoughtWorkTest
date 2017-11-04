'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
	var result = [];

	for(var itemA of collectionA){
		//字典取值直接获取键就能获取对应值
		//注意区别，of获取的是值，in获取的是索引
		for(var itemB of objectB["value"]){
			if(itemA == itemB){
				result.push(itemA)
			}
		}
	}
    return result;
}
