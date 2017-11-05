function collect_same_elements(collection_a, object_b) {
    var result = [];
	for(var itemA of collection_a){
		var indexAinB = itemA["key"]
		for(var itemB of object_b["value"]){
			if(indexAinB == itemB){
				result.push(indexAinB)
			}
		}
	}

    return result;
}

module.exports = collect_same_elements;
