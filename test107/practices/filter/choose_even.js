'use strict';

function choose_even(collection) {
	var result = collection.filter(isOdd);
	return result;
}

function isOdd(element, index, array){
	return (element % 2 == 0)?true:false;
}

module.exports = choose_even;
