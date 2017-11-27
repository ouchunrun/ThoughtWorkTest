
module.exports = function main(number){
	let result = (number>=0)?output(number):retErr();;
	return result;
}


function output(number){
	let result = "";
	
	while(number>=0){
		if(number>2){
	        result += number.toString() +" bottles of beer on the wall, " + number.toString() +" bottles of beer.\n"+
	             	 "Take one down and pass it around, " + (number-1).toString() + " bottles of beer on the wall.\n";
		}else if(number == 2){
			result +="2 bottles of beer on the wall, 2 bottles of beer.\n" +
           			 "Take one down and pass it around, 1 bottle of beer on the wall.\n";
		}else if(number == 1){
			result +="1 bottle of beer on the wall, 1 bottle of beer.\n"+
	                  "Take one down and pass it around, no more bottles of beer on the wall.\n";
		}else if(number == 0){
			result += "No more bottles of beer on the wall, no more bottles of beer.\n"+
					  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
		}
		number--;
	}
	return result;
}


function retErr(){
	return "error";
}
