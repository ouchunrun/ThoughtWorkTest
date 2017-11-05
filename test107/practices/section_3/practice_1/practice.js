function create_updated_collection(collection_a, object_b) {
    var result = [];
    for(var i in collection_a){
    	for(var j of object_b["value"]){
    		if(collection_a[i].key == j){
    			collection_a[i].count --;
    		}
    	}
    	result.push(collection_a[i])
    }
    return result;
}

module.exports = create_updated_collection;
