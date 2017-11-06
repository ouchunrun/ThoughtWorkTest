'use strict';
function one_add_next_multiply_three(collection){
    var result = [];
    
    for(var i=0;i<collection.length-1;i++){
		var j = collection[parseInt(i)+1]
    	var num = collection[i]+j;
    	num = num*3
    	result.push(num);
    	
    }
    return result;
}
module.exports = one_add_next_multiply_three;
