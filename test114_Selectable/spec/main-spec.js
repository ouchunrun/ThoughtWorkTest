const main = require('../main/main');

describe('main()', () => {

	it("only check both the numbers and position are right situations.", () => {
		let givenNumber = "1234";
		let inputNumber = "1234";
		let result = main.bothCorrect(givenNumber, inputNumber);
		expect(result).toEqual("4A");
	});

	
	it("only check the input number whether correct.Exclude position", () => {
		let givenNumber = "1234";
		let inputNumber = "4321";
		let result = main.numberCorrect(givenNumber, inputNumber);
		expect(result).toEqual("4B");
	});


	it("check both the number and position", () => {
		let givenNumber = "1234";
		let inputNumber = "4321";
		let result = main.main(givenNumber, inputNumber);
		expect(result).toEqual("0A4B");
	});


	it("check both the number and position", () => {
		let givenNumber = "1234";
		let inputNumber = "5678";
		let result = main.main(givenNumber, inputNumber);
		expect(result).toEqual("0A0B");
	});


	it("check both the number and position", () => {
		let givenNumber = "1234";
		let inputNumber = "1324";
		let result = main.main(givenNumber, inputNumber);
		expect(result).toEqual("2A2B");
	})
});