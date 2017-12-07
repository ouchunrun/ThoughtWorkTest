class Class{
	constructor(number){
		this.number = number;
	}

	getDisplayName(){
		return "Class " + this.number;
	}

	assignLeader(student){
		if(student.klass.number == this.number){
	        this.leader = student;
	    } else {
	        this.leader = null;
	    }
	}
}

module.exports = Class;
