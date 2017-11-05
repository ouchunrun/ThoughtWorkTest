'use strict';

function choose_no_repeat_number(collection) {
	var result = [];
	for(var item of collection){
		var hasItem = haskey(result, item)
		if(!hasItem){
			result.push(item);
		}
		
	}
	return result;
}

function haskey(result, item){
	for(var i of result){
		if(i == item){
			return true;
		}
	}
	return false;
}

module.exports = choose_no_repeat_number;
