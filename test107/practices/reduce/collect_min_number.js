'use strict';

function collect_min_number(collection) {
  	var result = collection[0];
    for(var i of collection){
    	if(i<result){
    		result = i;
    	}
    }
    return result;
}

module.exports = collect_min_number;

