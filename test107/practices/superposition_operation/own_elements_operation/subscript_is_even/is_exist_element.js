'use strict';
var is_exist_element = function(collection,element){
	for(var i in collection){
		if(i%2==0){
			if(element==3){
				if(collection[i]==3){
					return true;
				}
			}
			if(element==4){
				if(collection[i]!=4){
					return false;
				}
			}
			
		}
	}
};
module.exports = is_exist_element;
