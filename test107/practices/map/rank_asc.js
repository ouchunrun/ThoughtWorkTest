'use strict';
var rank_asc = function(collection){

     //从大到小排序
     collection.sort(function(a,b){
     	return a<b?1:-1
     });
    
    return collection;
};

module.exports = rank_asc;
