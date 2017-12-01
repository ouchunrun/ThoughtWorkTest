function collect_same_elements(collection_a, object_b) {
    var result = collection_a.filter(judge);

    function judge(element, index, array){
    	return getSameElement(element, object_b)
    }
    return result;
}

function getSameElement(element, object_b){
    for(let i of object_b["value"]){
        if(element == i) return true;
    }
    return false;
}

module.exports = collect_same_elements;
