'use strict';
var even_asc_odd_desc = function(collection){
	var odd = [];
	var even = [];
	for(var i of collection){
		if(i%2==0){
			odd.push(i);
		}
		else{
			even.push(i);
		}
	}
	odd.sort(function(a,b){return a>b?1:-1});//从小到大排序
	even.sort(function(a,b){return a<b?1:-1});//从大到小排序
	var result = odd.concat(even) //链接两个数组
	return result;
};
module.exports = even_asc_odd_desc;
