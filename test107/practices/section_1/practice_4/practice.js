function collect_same_elements(collection_a, object_b) {
 	let a = [];
 	let result = collection_a.filter(judge);

    function judge(element, index, array){
    	return getSameElement(element.key, object_b)
    }

    
    for(let i of result){
    	a.push(i.key)
    }
    return a;

}

function getSameElement(element, object_b){
    for(let i of object_b["value"]){
        if(element == i) return true;
    }
    return false;
}

module.exports = collect_same_elements;
