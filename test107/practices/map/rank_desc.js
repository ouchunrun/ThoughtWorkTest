'use strict';
var rank_desc = function(collection){
    
    //sort排序 从小到大
    return collection.sort(function(a,b){return a>b?1:-1});
};

module.exports = rank_desc;
