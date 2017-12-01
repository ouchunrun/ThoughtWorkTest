function collect_same_elements(collection_a, collection_b) {

    var result = collection_a.filter(match);
    function match(element, index, array){
        return judge(element, collection_b)
    }

    return result;   
}


function judge(element, collection_b){
    for(let i of collection_b[0]){
        if(element == i) return true;
    }
    return false;
}

module.exports = collect_same_elements;
