'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result = [];

  for(var item of collectionA){
  	var jaduge = hasItem(result, item);
  	if(jaduge){
  		for(var i in result){
  			if(result[i].key == item){
  				result[i].count += 1;
  			}
  		}
  	}
  	else{
  		result.push({"key":item, "count": 1});
  	}
  }

  //判断集合c中元素与B相对应
  for(var j in result){
  	for(var i of objectB["value"]){
  		if(result[j].key==i){
  			//这是用了双等号，犯了个错
  			result[j].count = parseInt(result[j].count)-parseInt(result[j].count/3);
  		}
  	}
  }
  return result;
}


//判断是否存在
function hasItem(result, item){
	for(var i in result){
		if(result[i].key == item){
			return true;
		}
	}
	return false;
}