const datbase = require('../main/datbase');
var inputs = datbase.inputs;
var	loadAllItems = datbase.loadAllItems; 
var	loadPromotions = datbase.loadPromotions;
var	list = [];
var	expectText = "***<没钱赚商店>购物清单***\n";

module.exports = function main() {
	for(var i of inputs){
		var item = {};
		var	judge = isNotExist(i); //判断该商品是否已计算
		var	weigh = i.split("-");  //split()分割
		if(judge){
			if(weigh[1]){  //如果是称重商品
				var length = weigh[1];
			}
			else{
				var length = getLength(i);	//计算每件商品个数
			}	
			item["barcode"] = weigh[0];
			item["number"] = length;
			list.push(item);
		}	

	}
	// console.log(list)
	/**********以上部分构造了一个新数组，存放商品条形码和数量，形式如下*************/
	/*
		[ 
			{ barcode: 'ITEM000001', number: 5 },
		    { barcode: 'ITEM000003', number: 2 },
		    { barcode: 'ITEM000005', number: 3 } 
	    ]
	*/
	printDetailedList();
};


//打印购物单
function printDetailedList(){
	var str = "";
		summary = 0;
		save = 0;

	for(var i in list){
		var discount = judgeIsDiscount(list[i].barcode);  //判断是否是打折商品

		//打折商品
		for(var j in loadAllItems){
			var number = list[i].number
			if(discount){
				number = list[i].number-1;
			}
			var total = number*loadAllItems[j].price;

			if(list[i].barcode == loadAllItems[j].barcode){
				
				if(discount){
					str += "名称："+ loadAllItems[j].name +"，数量：1"+loadAllItems[j].unit+"\n";
					save += loadAllItems[j].price;
				}

				summary += total;
				var price = loadAllItems[j].price;
				// price.toFixed(2); JavaScript 保留两位小数的实现方法:
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


//判断购买商品的个数
function getLength(barcode){
	var length = 0;
	for(var i of inputs){
		if(i == barcode){
			length++;
		}
	}
	return length;
}


//该商品是否已存在，已判断过？
function isNotExist(barcode){
	for(var i in list){
		if(list[i].barcode == barcode){
			return false;
		}
	} 
	return true;
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