'use strict';

function get_letter_interval(number_a, number_b) {
    var data = "abcde";
    var result = [];
    var number_a = parseInt(number_a);
    var number_b = parseInt(number_b);

    if(number_a == number_b){
    	result.push(data[number_a-1])
    }
    else if(number_a < number_b){
    	for(var i=number_a;i<=number_b;i++){
    		result.push(data[i-1])
    	}
    }
    else{
    	for(var i=number_a;i>=number_b;i--){
    		result.push(data[i-1])
    	}
    }
    return result;
}

module.exports = get_letter_interval;
