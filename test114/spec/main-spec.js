const main = require('../main/main');

describe('main()', () => {

	//describe "The numbers and positions are correct" situation to correct position
	//describe "Correct number but incorrect position" situation to correct number

	it("Check no position is correct but all numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "4321";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("0A4B");
	});


	it("Check no position is correct but three numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "4326";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("0A3B");
	});


	it("Check no position is correct but two numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "4356";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("0A2B");
	});


	it("Check no position is correct but one number of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "4567";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("0A1B");
	});


	it("check both the numbers and position are not correct", () => {
		let givenNumber = "1234";
		let inputNumber = "5678";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("0A0B");
	});


	it("Check one position is correct and three numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1423";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("1A3B");
	});


	it("Check one position is correct and two numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1326";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("1A2B");
	});


	it("Check one position is correct and one numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1547";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("1A1B");
	});


	it("Check one position is correct and zero numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1678";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("1A0B");
	});


	it("Check two position are correct and two numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1243";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("2A2B");
	});


	it("Check two position are correct and one numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1263";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("2A1B");
	});


	it("Check two position are correct and no numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1278";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("2A0B");
	});

	//3A1B不存在

	it("Check three position are correct and no numbers of inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1238";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("3A0B");
	});



	it("Check all position are correct but none of the inputs are right", () => {
		let givenNumber = "1234";
		let inputNumber = "1234";
		let result = main(givenNumber, inputNumber);
		expect(result).toEqual("4A0B");
	})
});