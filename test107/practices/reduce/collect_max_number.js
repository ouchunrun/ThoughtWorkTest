'use strict';

function collect_max_number(collection) {
    
    return collection.reduce(function(prev, next){
    	return prev>next?prev:next;
    })
 
}

module.exports = collect_max_number;
