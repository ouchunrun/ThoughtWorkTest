'use strict';
function map_to_even(collection){
    var result = [];
    for(var i of collection){
    	var item = i*2;
    	result.push(item)
    }
    return result;
}
module.exports = map_to_even;
