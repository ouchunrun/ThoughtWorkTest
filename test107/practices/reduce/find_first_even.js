'use strict';

function find_first_even(collection) {
   
    for(var i of collection){
    	if(i % 2 == 0){
    		return i
    	}
    }
}

module.exports = find_first_even;

