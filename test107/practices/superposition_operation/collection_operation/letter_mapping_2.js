'use strict';

function average_to_letter(collection) {
	var List = "abcdefghij";
	var sum = 0;
	for(var i in collection){
		sum+=parseInt(collection[i]);
	}
	//js 向上和向下取整Math.ceil(x)，Math.floor(x)
	var a = Math.ceil(sum/collection.length)-1;  
	return List[a]
}

module.exports = average_to_letter;

