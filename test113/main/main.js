module.exports = function main(distance, waiting) {
    var fee = 6;
    fee += waiting?waiting*0.25:0;
	
	if(distance>2 && distance<8){
    	return fee+(distance-2)*0.8
    }else if(distance>=8){
    	return Math.round(fee+(distance-2)*0.8+(distance-7)*0.4);

    }
    return fee;
};