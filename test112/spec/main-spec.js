const main = require('../main/main');

describe('pos', function () {
    let inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];

    it("Initialize the array to the specified format", () => {
        let initialList = [ 
            { barcode: 'ITEM000001', number: 5 },
            { barcode: 'ITEM000003', number: 2 },
            { barcode: 'ITEM000005', number: 3 } 
        ]
        let result = main.main(inputs);
        expect(result).toEqual(initialList);
    });
    

    it("Judge whether the product is already exist", () => {
        let initialList = [ 
            { barcode: 'ITEM000001', number: 5 },
            { barcode: 'ITEM000003', number: 2 },
            { barcode: 'ITEM000005', number: 3 } 
        ]
        let result = main.isNotExist("ITEM000001", initialList);
        expect(result).toEqual(true);
    });


    it("Judge the number of goods purchased", () => {
        let result = main.getLength("ITEM000001", inputs);
        expect(result).toEqual(5);
    });
    

    it("Judge Judge whether it is a favorable commodity", () =>{
        let result = main.judgeIsDiscount("ITEM000000");
        expect(result).toEqual(true);
    })


    it('should print finall text', function () {

        spyOn(console, 'log');

        main.discountAndPrint(inputs);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });

});
