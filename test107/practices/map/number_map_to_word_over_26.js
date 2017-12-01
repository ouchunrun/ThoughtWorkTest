'use strict';

module.exports = function number_map_to_word_over_26(collection){
    return collection.map(mapping);
};

function mapping(element, index, self){
	let List = "abcdefghijklmnopqrstuvwxyz";
	if(element<=26){
		return List[element-1];  			
	}else if(element<=52){
		var item = parseInt(element-27);
		item = "a"+List[item];
		return item;
	}else{
		var item = parseInt(element-53);
		item = "b"+List[item];
		return item;
	}
}

