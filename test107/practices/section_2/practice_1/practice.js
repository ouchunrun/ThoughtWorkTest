
function count_same_elements(collection) {
    var result = [];

	for(var i in collection){
		var jaduge = hasItem(result, collection[i]);
		
		if(jaduge){
			for(var j of result){
				if(j.key == collection[i]){
					j.count +=1;
				}
			}
		}
		else{
			result.push({"key": collection[i], "count": 1});
		}
	}
    return result;
}

//判断是否存在
function hasItem(result, item){
	for(var i of result){
		if(i.key == item){
			return true;
		}
	}
	return false;
}


module.exports = count_same_elements;
