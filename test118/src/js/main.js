
// DOM操作实际都是异步的，当使用click时，其实还没有被真正插入到document中，所以其实绑定失败了
//动态添加的dom元素最好用事件代理来获取添加的元素

function Index(){
	this.dom = {
		preview: $(".preview"),
		wrapperUl: $(".wrapperUl"),
		addNew: $(".addNew"),
		delete: $(".delete"),
		allInpt: $(".form-control"),
	}
	this.bindEvent();
}

Index.prototype.bindEvent = function(){
	var self = this;
	var wrapperUl = self.dom.wrapperUl;
	// wrapperUl.html(" ");
	self.dom.addNew.on('click', function(){
		var prompt = window.prompt("请输入 '文本' 或 '日期' ", "");
		var textHtml = "";
		if(prompt == "文本"){	
			textHtml += "<li><input type='text' class='form-control' value='文本'><span class='delete'>×</span>";	
		}else if(prompt == "日期"){
			textHtml += "<li><input type='text' class='form-control' value='日期'><span class='delete'>×</span>";
		}else{
			alert("请按提示输入！！！");
			return;
		}
		wrapperUl.append(textHtml);
	});
	self.bindSign();
}

Index.prototype.bindSign = function(){
	var self = this;
	$(document).on('click', '.delete', function(){
	    var index = $(this).parents('li');
		index.remove();
	});
	self.dom.preview.on('click', function(){
		if(self.dom.preview.html() == "预览"){
			self.dom.preview.html("编辑");
			$(".delete").css('display', 'none');
			$(".form-control").attr("disabled", true);
		}else{
			self.dom.preview.html("预览");
			$(".delete").css('display', 'block');
			$(".form-control").attr("disabled", false);
		}	
	})
}

new Index();