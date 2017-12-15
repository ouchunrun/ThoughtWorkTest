"use strict";

let Student = require("../lib/student");
let Class = require("../lib/class");
let Score = require("../lib/score");

let allInfor = [];

function main() {
	console.log(`1. 添加学生
2. 生成成绩单
3. 退出`);

	let answer = require('cli-interact').question("请输入你的选择（1～3）：\n");
	switch(answer){
		case '1':
			addStudent();
			break;
		case '2':
			printInfor();
			break;
		case '3':
			process.exit(1);
	}
}


function addStudent(){
	let promot = require('cli-interact').question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：\n");
	
	if(judgeFormat(promot)){
		console.log("\n\n学生"+ promot.split(",")[0] + "的成绩被添加\n\n");
	}
	main();
}


function judgeFormat(promot){
	let arr = promot.split(",");
	if(arr.length != 8){
		let promot = require('cli-interact').question("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：\n");
		judgeFormat(promot);
	}else{
		let total = 0;
		for(var i = 4;i< 8 ;i++){
			total += parseInt(arr[i].split(":")[1]);
		}

		let average = total/4;

		let oneStudent = {};
		oneStudent["name"] = arr[0];
		oneStudent["studentId"] = arr[1];
		oneStudent["nation"] = arr[2];
		oneStudent["klass"] = arr[3];
		oneStudent["math"] = arr[4].split(":")[1];
		oneStudent["chinese"] = arr[5].split(":")[1];
		oneStudent["english"] = arr[6].split(":")[1];
		oneStudent["program"] = arr[7].split(":")[1];
		oneStudent["average"] = average;
		oneStudent["total"] = total;

		allInfor.push(oneStudent);   
		return true;
	}
}


function printInfor(){
	let promot = require('cli-interact').question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");
	judgePrintFormat(promot);
}


function judgePrintFormat(promot){
	let arr = promot.split(",");
	for(var i = 0;i<arr.length;i++){
		if(isNaN(parseInt(arr[i]))){
			let promot = require('cli-interact').question("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n");
			judgePrintFormat(promot);
		}
	}

	var scoreList = "\n\n成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n";
	
	for(let i = 0;i<arr.length;i++){
		for(let j = 0;j<allInfor.length;j++){
			if(allInfor[j].studentId == arr[i]){
				scoreList += allInfor[j].name + "|" + allInfor[j].math + "|" + allInfor[j].chinese + "|" + allInfor[j].english + "|" + allInfor[j].program + "|" + allInfor[j].average + "|" + allInfor[j].total + "\n";
				continue;
			}
		}
	}
	//   欧春润,201414600127,汉,1,数学:100,语文:99,英语:98,编程:100
	//   王志文,201414600132,汉,1,数学:99,语文:99,英语:98,编程:99

	scoreList += getAverageAndMedian(allInfor);
	console.log(scoreList);
}


function getAverageAndMedian(allInfor){
	console.log(allInfor);
	let allAverage = 0;
	let list = [];
	for(let k = 0;k<allInfor.length;k++){
		allAverage += parseInt(allInfor[k].total); 
		list.push(allInfor[k].total);
	}
	allAverage = allAverage / allInfor.length;

	list.sort();
	let median = 0;
	if(list.length % 2 == 0){
		median = (list[list.length/2-1] + list[list.length/2]) / 2;
	}else{
		let index = Math.ceil(list.length/2)
		median = list[index-1];
	}

	return "全班总分平均数："+ allAverage + "\n" + "全班总分中位数：" + median + "\n\n";
}

module.exports = main;