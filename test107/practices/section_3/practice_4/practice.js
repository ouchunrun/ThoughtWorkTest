function create_updated_collection(collection_a, object_b) {
    var result = [];

  for(var item of collection_a){
  	var itemSplit = item.split("-");
  	
  	if(itemSplit[1]){
  		result.push({"key":itemSplit[0], "count": itemSplit[1]});
  	}
  	else{
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
  	}
  	

  //判断集合c中元素与B相对应
  for(var j in result){
  	for(var i of object_b["value"]){
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

module.exports = create_updated_collection;
