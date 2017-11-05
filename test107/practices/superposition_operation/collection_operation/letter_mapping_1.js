'use strict';

function even_to_letter(collection) {
	var List = "abcdefghij";
	var result =[];
	for(var i in collection){
		if(collection[i]%2==0){
			result.push(List[i])
		}
	}
  	return result;
}

module.exports = even_to_letter;
