'use strict';

function double_to_one(collection) {
	var result = [];
	get_number(collection, result);
	return result;

}

function get_number(item, result){
	if(typeof(item) == 'number'){
		return result.push(item);
	}else{
		for(var i of item){
			get_number(i, result);
		}
	}
}

module.exports = double_to_one;
