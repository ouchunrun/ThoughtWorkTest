// module.exports = function Person(name, age){
// 	this.name = name;
// 	this.age = age;
// 	this.introduce = function(){
// 		return "My name is "+ this.name +". I am "+ this.age + " years old."
// 	}
// }


//注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

    //另外，方法之间不需要逗号分隔，加了会报错。
	introduce(){
		return "My name is "+ this.name +". I am "+ this.age + " years old.";
	}
}


module.exports = Person;