'use strict';
const main = require('../main/main');

describe('99_bottles_of_beer', function () {

    // it('should print correct text', function () {

    //     //Spy用来追踪函数的调用历史信息（是否被调用、调用参数列表、被请求次数等）。
    //     //Spy仅存在于定义它的describe和it方法块中，并且每次在spec执行完之后被销毁。
    //     spyOn(console, 'log');
        
    //     //Spy常用的expect：
    //     //toHaveBeenCalled: 函数是否被调用
    //     //toHaveBeenCalledWith: 调用函数时的参数
    //     expect(console.log).toHaveBeenCalledWith(1);
    // });

    it('return when given the number more than 1', () => {

        //使用console.log输出
        let number = 99;
        let str = "";
        for(let i=number;i>1;i--){
            str += i +"bottles of beer on the wall, " + i +"bottles of beer.\n";
                  "Take one down and pass it around," + number-1 + "bottles of beer on the wall.;\n"
        }
        let result = main(number);
        expect(result).toEqual(str);
    });

    it('return when given the number equals to 1', () => {

        //使用console.log输出
        let number = 1;
        var str = "1 bottle of beer on the wall, 1 bottle of beer.\n"+
                  "Take one down and pass it around, no more bottles of beer on the wall.\n";
        let result = main(number);
        expect(result).toEqual(str);
    });

    it('return when given the number equals to 0', () => {

        //使用console.log输出
        let number = 0;
        var str = "No more bottles of beer on the wall, no more bottles of beer.\n"+
                  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        let result = main(number);
        expect(result).toEqual(str);
    });

     it('return when given the number less than 0', () => {

        //使用console.log输出
        let number = -1;
        let result = main(number);
        expect(result).toEqual("please given the number bigger than 0");
    });
    
});

