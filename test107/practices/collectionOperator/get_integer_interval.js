'use strict';

function get_integer_interval(number_a, number_b) {
  
    var result = [];
    if(number_a < number_b){
    	//自增的偶数区间]
    	for(var i=0;i<number_b;i++){
			result.push(i+1);
    	}
    }
    else if(number_a > number_b){
    	//自减的偶数区间
    	for(var i=number_a+1;i>1;i--){
			result.push(i-1);
    	}
    }
    else{
		result.push(number_a)
    }
    return result;
}


module.exports = get_integer_interval;

