'use strict';
var rank_desc = function(collection){
    
    collection.sort(function(a,b){
    	return a>b?1:-1
    });
    return collection;
};

module.exports = rank_desc;
