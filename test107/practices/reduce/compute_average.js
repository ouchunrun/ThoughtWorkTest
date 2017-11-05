'use strict';

function compute_average(collection) {
    var sum = 0;
    for(var i of collection){
    	sum += parseInt(i);
    }
    return sum/(collection.length)
}

module.exports = compute_average;

