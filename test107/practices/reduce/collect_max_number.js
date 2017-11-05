'use strict';

function collect_max_number(collection) {
    var result = 0;
    for(var i of collection){
    	if(i>result){
    		result = i;
    	}
    }
    return result;
}

module.exports = collect_max_number;
