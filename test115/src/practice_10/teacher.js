import Person from "../../src/practice_11/person.js";

class Teacher extends Person{
	constructor(id, name, age, klasses){
		super(id, name, age);
		this.klasses = klasses;
	}

	introduce() {
	  	if(this.klasses != undefined){
	    	return super.introduce() + " I am a Teacher. I teach Class " + this.klasses[0].number + ", "+ this.klasses[1].number + "."  ;
	  	} else{
	    	return super.introduce() + " I am a Teacher. I teach No Class." ;
	  	}
    }

    isTeaching(Student){
	  	for (var i = 0; i < this.klasses.length; i++) {
	  		if(this.klasses[i] == Student.klass){
	  			return true;
	  		}
	  	}
	}
}

module.exports = Teacher;

