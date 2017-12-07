
class Class{
	constructor(number){
		this.number = number;
	}

	assignLeader(student){
		if(student.klass.number == this.number){
	        this.leader = student;
	    } else {
	        this.leader = null;
	        console.log("It is not one of us.");
	    }
	}

	appendMember(student){
		student.klass = this;
	}

	getDisplayName() {
	    return "Class " + this.number;
	}

	isIn(){

	}
}

module.exports = Class;
