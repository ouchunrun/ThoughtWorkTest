'use strict';
var calculate_median = function(collection){
	var medium = 0;

	for(var i in collection){
		if(collection.length%2==0){
			medium = collection[collection.length/2];
		}else{
			var a = collection[parseInt(collection.length/2)-1]
			var b = collection[parseInt(collection.length/2)+1]
			medium = (a+b)/2
		}
	}
	return medium;
};
module.exports = calculate_median;
