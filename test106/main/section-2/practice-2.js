'use strict';

module.exports = function countSameElements(collection) {
	var result = [];

	for(var i in collection){
		var a = collection[i].split("-");
		if(a[1]){
			result.push({"key": a[0], "count": parseInt(a[1])});
		}
		else{
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


