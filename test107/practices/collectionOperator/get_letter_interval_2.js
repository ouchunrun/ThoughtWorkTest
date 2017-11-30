'use strict';


function get_letter_interval_2(number_a, number_b) {
    
    var result = [];
    var List = "abcdefghijklmnopqrstuvwxyz";
 
    if(number_a<=number_b){
    	for(var i=parseInt(number_a);i<=parseInt(number_b);i++){
	    	//自增
	    	result = transform(i, List, result);
	    }
    }else{
    	for(var i=parseInt(number_a);i>=parseInt(number_b);i--){
	    	//自减
	    	result = transform(i, List, result);
	    }
	    
    }
    return result;
}


function transform(i, List, result){
	if(i<=26){
		result.push(List[i-1])   			
	}else if(i<=52){
		var item = parseInt(i-27);
		item = "a"+List[item];
		result.push(item)
	}else{
		var item = parseInt(i-53);
		item = "b"+List[item];
		result.push(item)
	}
	return result;
}

module.exports = get_letter_interval_2;

