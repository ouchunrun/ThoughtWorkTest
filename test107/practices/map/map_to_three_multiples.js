'use strict';
var map_to_three_multiples = function(collection){
    return collection.map(mapping);
};

function mapping(element, index, array){
	return element*3;
}

module.exports = map_to_three_multiples;
