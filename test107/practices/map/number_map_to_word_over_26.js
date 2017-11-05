'use strict';
var number_map_to_word_over_26 = function(collection){
    var result = [];
    var List = "abcdefghijklmnopqrstuvwxyz";
 
	for(var i of collection){
    	//自增
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
    }

    return result;
};

module.exports = number_map_to_word_over_26;
