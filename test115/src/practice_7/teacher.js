import Person from "../../src/practice_7/person.js";

class Teacher extends Person{
	constructor(name, age, klass){
		super(name, age);
		this.klass = klass;
	}

	introduce(){
		if(this.klass != undefined){
	    	return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number + "." ;
	  	} else{
	    	return super.introduce() + " I am a Teacher. I teach No Class." ;
	  	}
	}

	introduceWith(studentJerry){
		if(this.klass.number == studentJerry.klass.number){
			return super.introduce() + " I am a Teacher. I teach "+ studentJerry.name +".";
		}else{
			return super.introduce() + " I am a Teacher. I don't teach "+ studentJerry.name +".";
		}
	}
}

module.exports =Teacher;