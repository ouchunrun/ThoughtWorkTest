'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  for(var i of collection_b){
  	for(var j of collection_a){
  		if(parseInt(i)==parseInt(j)){
  			result.push(i)
  		}
  	}
  }
  return result;
}

module.exports = get_intersection;
