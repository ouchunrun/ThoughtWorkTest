const main = require('../main/main');

describe('taxi fee', function () {
    it("The distance is less than 2 kilometers", () => {
    	let distance = 2;
    	let result = main(distance);
    	expect(result).toEqual(6);
    });

    it("the distance is 2 to 8 kilometters", () => {
    	let distance = 5;
    	let result = main(distance);
    	expect(result).toEqual(8.4);
    });

    it("the distance is more than 8 kilometters", () => {
    	let distance = 10;
    	let result = main(distance);
    	expect(result).toEqual(14);
    });

    it("Parking waiting", () => {
    	let distance = 10;
    	let waiting = 10;
    	let result = main(distance, waiting);
    	expect(result).toEqual(16);
    })
});
