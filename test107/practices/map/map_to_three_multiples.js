'use strict';
var map_to_three_multiples = function(collections){
    var result = [];

  	for(var i of collections){
  		var item = i*3
  		result.push(item)
  	}

    return result;
};

module.exports = map_to_three_multiples;
