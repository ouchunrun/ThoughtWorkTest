const datbase = require('../main/datbase');

var	loadAllItems = datbase.loadAllItems; 
var	loadPromotions = datbase.loadPromotions;
var	expectText = "***<没钱赚商店>购物清单***\n";

function main(inputs) {
	let	list = [];
	for(var i of inputs){
		var	judge = isNotExist(i, list);  
		initializingArray(judge, i, inputs, list)  
	}
	return list;
};

//该商品是否已存在
function isNotExist(barcode, list){
	for(var i in list){
		if(list[i].barcode == barcode){
			return true;
		}
	} 
	return false;
}

//初始化数组
function initializingArray(judge, i, inputs, list){
	var item = {};
	var length;
	var	weigh = i.split("-");  //split()分割

	if(!judge){
		length = weigh[1]?weigh[1]:getLength(i, inputs);	
		item["barcode"] = weigh[0];
		item["number"] = parseInt(weigh[1]?weigh[1]:getLength(i, inputs));
		list.push(item);
	}	
}

//判断购买商品的个数
function getLength(barcode, inputs){
	var length = 0;
	for(var i of inputs){
		if(i == barcode){
			length++;
		}
	}
	return length;
}


//打印购物单
function discountAndPrint(inputs){
	let list = main(inputs);
	var str = "",
		summary = 0,
		save = 0;

	for(var i in list){
		var discount = judgeIsDiscount(list[i].barcode);  //判断是否是打折商品

		for(var j in loadAllItems){
			var number = discount?list[i].number-1:list[i].number;
			var total = number*loadAllItems[j].price;

			if(list[i].barcode == loadAllItems[j].barcode){
				
				if(discount){
					str += "名称："+ loadAllItems[j].name +"，数量：1"+loadAllItems[j].unit+"\n";
					save += loadAllItems[j].price;
				}

				summary += total;
				var price = loadAllItems[j].price;
				expectText += "名称："+ loadAllItems[j].name + "，数量：" + list[i].number + loadAllItems[j].unit +
							"，单价："+ price.toFixed(2) + "(元)，小计：" + total.toFixed(2) +"(元)\n";
				
			}
		}		
	}

 	expectText += "----------------------\n挥泪赠送商品：\n";
 	expectText += str;
 	expectText += "----------------------\n";
 	expectText += "总计："+ summary.toFixed(2) +"(元)\n";
 	expectText += "节省："+ save.toFixed(2) +"(元)\n";
 	expectText += "**********************";
 	console.log(expectText)
}


//判断是否是优惠商品
function judgeIsDiscount(barcode){
	for(var discountBarcode of loadPromotions[0].barcodes){
		if(barcode == discountBarcode){
			return true;
		}
	}
	return false;
}

module.exports.main = main;
module.exports.isNotExist = isNotExist;
module.exports.getLength = getLength;
module.exports.judgeIsDiscount = judgeIsDiscount;
module.exports.discountAndPrint = discountAndPrint;