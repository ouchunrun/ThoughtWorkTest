'use strict';
var map_to_four_multiples_add_one = function(collection){
  	return collection.map(mapping);
};

function mapping(element, index, array){
	return element*4+1;
}

module.exports = map_to_four_multiples_add_one;
