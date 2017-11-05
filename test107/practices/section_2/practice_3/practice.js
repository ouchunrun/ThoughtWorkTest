var result = [];
function count_same_elements(collection) {
    //第一步：遍历每个元素
  	for(var item of collection){
  		var itemSplit = item.split("");
  		if(itemSplit.length>1){
  			//第二步：对特殊元素进行分割处理
  			handleItem(itemSplit)
  		}else{
  			var jaduge = hasItem(result, item);
			if(jaduge){
				for(var j of result){
					if(j.name == item){
						j.summary +=1;
					}
				}
			}
			else{
				result.push({"name": item, "summary": 1});
			}
  		}
  	}
    return result;
}


//判断是否存在
function hasItem(result, item){
	for(var i of result){
		if(i.name == item){
			return true;
		}
	}
	return false;
}


function handleItem(itemSplit){
	var item = "";
	for(var i=2;i<itemSplit.length;i++){
		if(!isNaN(itemSplit[i])){
			item += itemSplit[i];
		}
	}
	var jaduge = hasItem(result, itemSplit[0]);
	if(jaduge){
		for(var j of result){
			if(j.name == itemSplit[0]){
				j.summary += parseInt(item);
			}
		}
	}
	else{
		result.push({"name": itemSplit[0], "summary": parseInt(item)});
	}

}


module.exports = count_same_elements;
