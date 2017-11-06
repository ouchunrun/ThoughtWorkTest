// 'use strict';
// var single_element = function(collection){
// 	var result = [];
// 	for(var i in collection){
// 		if(i%2!=0){
// 			var hasItem = jaudge(result,collection[i]);
// 			if(!hasItem){
// 				result.push(collection[i]);
// 			}
// 		}
// 	}
// 	console.log(result)
// 	return result;

// };

// //判断是否存在
// function jaudge(result,item){
// 	for(var i in result){
// 		if(result[i] == item){
// 			result.pop(result[i])  //存在的话，把元素删除
// 			return true;
// 		}
// 	}
// 	return false;
// }

// module.exports = single_element;

'use strict';
var single_element = function(collection){
	var even_collection = collection.filter(function(element, index) {
		return index % 2;
	});
	var len = even_collection.length;
	var result = [];
	for(var i =0; i < len; i ++){
		for(var j = 0; j < len; j ++){
			if(even_collection[i] == even_collection[j] && j != i){
			  break;
			}
			if( j == len - 1 ){
				result.push(even_collection[i]);
			}
		}
	}
	return result;
};
module.exports = single_element;
