'use strict';

function average_uneven(collection) {
	var sum = 0;
	var count = 0;
	for(var i of collection){
		if(i%2!=0){
			sum  += i;
			count += 1;
		}
	}
	var average = sum/count
	return average;
}

module.exports = average_uneven;
