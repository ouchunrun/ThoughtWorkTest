'use strict';
function map_to_even(collection){
    return collection.map(mapping);
}

function mapping(element, index, array){
	return element*2;
}

module.exports = map_to_even;
