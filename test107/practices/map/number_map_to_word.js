'use strict';
var number_map_to_word = function(collection){
    var result = [];
    var item = "abcde";
    for(var i in collection){
    	result.push(item[i])
    }
    return result;
};

module.exports = number_map_to_word;
