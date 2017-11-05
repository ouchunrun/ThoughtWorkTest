function collect_same_elements(collection_a, collection_b) {
    var result = [];

    for(var itemA of collection_a){
        //虽然实现了，但是这里三层循环复杂度太高，考虑优化
        var max = collection_b.length
    	for(var i=0;i<max;i++){
    		for(var itemB of collection_b[i]){
    			if(itemA === itemB){
    				result.push(itemA)
    			}
    		}
    	}
    }
    return result;
}

module.exports = collect_same_elements;
