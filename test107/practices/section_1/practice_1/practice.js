function collect_same_elements(collection_a, collection_b) {
    let result = [];

    for(let item of collection_a){
    	if(include(collection_b,item)){
    		result.push(item);
    	}
    }

    return result;
}

function include(collection, itema){
    return collection.indexOf(itema)>-1?true:false;
}

module.exports = collect_same_elements;
