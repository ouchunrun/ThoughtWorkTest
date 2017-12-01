'use strict';

function choose_multiples_of_three(collection) {
	var result = collection.filter(multiples);
	return result;
}

function multiples(element, index, array){
	return (element % 3 == 0)?true:false;
}

module.exports = choose_multiples_of_three;
