'use strict';
var number_map_to_word = function(collection){
    return collection.map(mapping);
};

function mapping(element, index, array){
	var item = "abcde";
	return item[index];
}

module.exports = number_map_to_word;
