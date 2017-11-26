module.exports = function main(number){
	let result = "";
	if(number>1){
		for(let i=number;i>1;i--){
            result += i +"bottles of beer on the wall, " + i +"bottles of beer.\n";
                  "Take one down and pass it around," + number-1 + "bottles of beer on the wall.;\n"
        }
	}else if(number == 1){
		result +="1 bottle of beer on the wall, 1 bottle of beer.\n"+
                  "Take one down and pass it around, no more bottles of beer on the wall.\n";
	}
	else if(number == 0){
		result += "No more bottles of beer on the wall, no more bottles of beer.\n"+
				  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
	}else{
		return "please given the number bigger than 0";
	}
	console.log(result)
	return result;
}