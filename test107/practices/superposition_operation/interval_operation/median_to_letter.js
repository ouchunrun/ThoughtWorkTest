'use strict';
function median_to_letter(collection) {

  // 获取中位数，并向上取整，然后封装在数组中。
  var new_collection = [Math.ceil(compute_chain_median(collection))];
  // 直接获取对用的字母，注意函数返回的是一个数组。
  return number_map_to_word_over_26(new_collection)[0];
}

function compute_chain_median(collection) {
  //在这里写入代码
  if(typeof(collection) == "string"){
    collection = collection.split("->");
  }
  collection = collection.sort(function(a, b){return a - b});
  var len = collection.length;
  if(len%2){
  	return collection[parseInt(len/2)];  
  }else{
  	return (parseInt(collection[len/2-1]) + parseInt(collection[len/2]))/2;
  }
}



function num_to_word(num){
	var letter = "abcdefghijklmnoporstuvwxyz";
	var char = "";
	if(parseInt(num/26)){
		char += letter[parseInt(num/26)-1] + letter[num % 26];

	}else{
		char += letter[num];
	}
	return char
}

var number_map_to_word_over_26 = function(collection){
  var result = [];
  for(var i of collection){
  	result.push(num_to_word(i-1));
  }
  // var result = collection.map(num_to_word(currentValue));
  return result;
};



module.exports = median_to_letter;
