'use strict';

function get_integer_interval_2(number_a, number_b) {
    let resultList = [];

    if(number_a<number_b){
        for(let i = number_a;i<=number_b;i++){
            resultList = arrayJoin(i, resultList);
        }
    }else if(number_a>number_b){
        for(let i = number_a;i>=number_b;i--){
            resultList = arrayJoin(i, resultList);
        }
    }else{
        resultList = arrayJoin(number_a, resultList);
    }

    return resultList;
}

function arrayJoin(i, resultList){
    if(i % 2 == 0){
        resultList.push(i);
    }
    return resultList
}

module.exports = get_integer_interval_2;
