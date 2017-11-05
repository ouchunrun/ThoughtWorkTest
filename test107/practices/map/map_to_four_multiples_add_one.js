'use strict';
var map_to_four_multiples_add_one = function(collection){
  	var result = [];

  	for(var i of collection){
  		var item = i*4+1
  		result.push(item)
  	}

    return result;
};

module.exports = map_to_four_multiples_add_one;
