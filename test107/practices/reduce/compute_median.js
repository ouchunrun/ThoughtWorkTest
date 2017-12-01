'use strict';

function compute_median(collection) {
    collection = collection.sort(function(a, b){return a - b});

    var len = collection.length;
    if(len%2){
         return collection[parseInt(len/2)];  
    }else{
        return (collection[len/2-1] + collection[len/2])/2;
    }
}

module.exports = compute_median;