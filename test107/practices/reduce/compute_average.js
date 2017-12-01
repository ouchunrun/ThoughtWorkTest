'use strict';

function compute_average(collection) {
    var sum = collection.reduce(function(prev, current,currentIndex, self){
    	return prev+current;
    });
    return sum/(collection.length);
}

module.exports = compute_average;

