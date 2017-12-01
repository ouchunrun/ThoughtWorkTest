'use strict';

function collect_min_number(collection) {
	//回调函数的返回值在下一次调用回调函数时作为 previousValue参数提供
    return collection.reduce(function(prev, next){
    	return prev<next?prev:next;
    });
}

module.exports = collect_min_number;

