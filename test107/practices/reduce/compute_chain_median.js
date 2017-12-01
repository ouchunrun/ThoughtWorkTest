'use strict';

function compute_chain_median(collection) {
    //分割、排序、转换为number类型
    collection = collection.split("->").sort(function(a, b){return a - b}).map(toNUmber);

    var len = collection.length;
    if(len%2){
    	   return collection[len/2];  
    }else{
    	  return (collection[len/2-1] + collection[len/2])/2;
    }
}

function toNUmber(v)
{
    return parseInt(v);
}

module.exports = compute_chain_median;