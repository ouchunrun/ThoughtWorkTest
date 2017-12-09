import Person from "../../src/practice_11/person.js";

class Teacher extends Person{
	constructor(id, name, age, klasses){
		super(id, name, age);
		this.klasses = klasses;
	}

	introduce() {
	  	if(this.klasses != undefined){
	  		let teachClass = "";
	  		let length = this.klasses.length;
	        for(let i in this.klasses){
	            teachClass += this.klasses[i].number;
	            if(i < length - 1){
	                teachClass += ", ";
	            }
	        }	
	    	return super.introduce() + " I am a Teacher. I teach Class " + teachClass + "."  ;
	  	} else{
	    	return super.introduce() + " I am a Teacher. I teach No Class." ;
	  	}
    }

    isTeaching(Student){
	  	for (var i = 0; i < this.klasses.length; i++) {
	  		if(this.klasses[i] == Student.klass){
	  			return true;
	  		}else{
	  			return false;
	  		}
	  	}
	}
}

module.exports = Teacher;

