'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
    if(number_a < number_b){
    	//自增的偶数区间
    	for(var i=number_a;i<=number_b;i++){
    		if(i%2==0){
    			result.push(i);
    		}
    	}
    } else if(number_a > number_b){
    	//自减的偶数区间
    	for(var i=number_a;i>number_b;i--){
    		if(i%2==0){
    			result.push(i);
    		}
    	}
    }else{
    	//只含此偶数数字的数组[偶数]
    	if(number_a%2==0){
    		result.push(number_a)
    	}
    	
    }
    return result;
}

module.exports = get_integer_interval_2;

