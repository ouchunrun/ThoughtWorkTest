// Write your cade below:


module.exports = function main(givNb, inptNb){
	printInfor(givNb, inptNb);

	let result = "";

	countA = bothCorrect(givNb, inptNb);
	countB = numberCorrect(givNb, inptNb);

	console.log(countA+countB)
	return countA+countB;
};

function bothCorrect(givNb, inptNb){
	let countA = 0;
	for(let i=0;i<givNb.length;i++){
		if(givNb[i] == inptNb[i]){
			countA++;
		}
	}
	return countA+"A";
}

function numberCorrect(givNb, inptNb){
	let countB = 0;
	for(let i in givNb){       
		for(let j in inptNb){  
			if(givNb[i] == inptNb[i]){
				break;
			}else if(givNb[i] == inptNb[j]){
				countB ++;
				break;  //默认重复的数字不予重复计算
			}
		}
	}
	return countB + "B";
}

function printInfor(givNb, inptNb){
	var str = "the numbers given by the system is " + givNb + "\n," +
	"the numbers you have inputs is "+ inptNb + "\n" +
	"you have got the Final achievement:\n";
	console.log(str);
}

