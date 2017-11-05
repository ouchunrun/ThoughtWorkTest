function collect_same_elements(collection_a, object_b) {
    var result = [];

	for(var itemA of collection_a){
		//字典取值直接获取键就能获取对应值
		//注意区别，of获取的是值，in获取的是索引
		for(var itemB of object_b["value"]){
			if(itemA == itemB){
				result.push(itemA)
			}
		}
	}
    return result;
}

module.exports = collect_same_elements;
