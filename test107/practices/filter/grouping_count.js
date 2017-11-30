'use strict';

function grouping_count(collection) {
	var result = {};

	for(var item of collection){
		var hasItme = jaudge(result, item);		
		result[item] = hasItme?result[item]+1:1;
	}
	return result;
}

function jaudge(result, item){
	//注意为0 的可能取值：undefiend,null,0,false，[],{}等
	if(result[item]){
		return true;
	}
	return false;
}

module.exports = grouping_count;
