function collect_same_elements(collection_a, collection_b) {
    let result = [];

    function include(collection, ch){
    	for(let item of collection){
    		if(item === ch){
    			return true;
    		}
    	}
    	return false;
    }

    for(let item of collection_a){
    	if(include(collection_b,item)){
    		result.push(item);
    	}
    }
    return result;
}

module.exports = collect_same_elements;
