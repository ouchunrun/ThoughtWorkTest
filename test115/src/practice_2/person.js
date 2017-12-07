
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	//一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
	introduce(){
		return "My name is "+ this.name +". I am "+ this.age +" years old.";
	}
}

module.exports = Person;
