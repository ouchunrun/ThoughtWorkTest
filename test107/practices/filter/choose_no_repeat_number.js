'use strict';

function choose_no_repeat_number(collection) {
	var result = collection.filter(haskey);
	return result;
}

function haskey(element, index, self){
	//indexOf只返回元素在数组中第一次出现的位置，
	//如果与元素位置不一致，说明该元素在前面已经出现过，是重复元素
	return self.indexOf(element) == index;
}

module.exports = choose_no_repeat_number;
