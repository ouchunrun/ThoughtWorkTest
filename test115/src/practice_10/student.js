import Person from "../../src/practice_10/person.js";

class Student extends Person{
	constructor(id, name, age, klass){
		super(id, name, age);
		this.klass = klass;
	}

	introduce(){
		if(this.klass.leader){
			return super.introduce() + " I am a Student. I am Leader of Class "+ this.klass.number +".";
		}else{
			return super.introduce() + " I am a Student. I am at Class "+ this.klass.number +".";
		}
	}
}

module.exports = Student;