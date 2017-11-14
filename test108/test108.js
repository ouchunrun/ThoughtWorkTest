/**
 * Created by OCR on 2017/11/14.
 */


$("body").on("click","#calculate", function () {
    //第一步：获取卷面所有有效答案并判空
    var score = 0;

    var UMLName = $("input[name='UMLName']").val();
    var OBJcharacter1 = $("input[name='OBJcharacter1']").val();
    var OBJcharacter2 = $("input[name='OBJcharacter2']").val();
    var OBJcharacter3 = $("input[name='OBJcharacter3']").val();
    if(UMLName==""||OBJcharacter1==""||OBJcharacter2==""||OBJcharacter3==""){
        alert("请完成填空题！");
        return;
    }

    var optionsRadios = $("input[name='optionsRadios']:checked").val();
    var javaSupport = $("input[name='javaSupport']:checked").val();
    if(optionsRadios==null||javaSupport==null){
        alert("请完成单选题！");
        return;
    }

    if($('input[name="granularity"]:checked').length==0||$('input[name="granular"]:checked').length==0){
        alert("请完成多选题！");
        return;
    }
    var granularityAnswer="";
    $('input[name="granularity"]:checked').each(function(){
        var granularity=$(this).val();
        granularityAnswer+=granularity;
    });

    var granularAnswer="";
    $('input[name="granular"]:checked').each(function(){
        var granular=$(this).val();
        granularAnswer+=granular;
    });

    var judge1 = $("input[name='judge1']:checked").val();
    var judge2 = $("input[name='judge2']:checked").val();
    if(judge1==undefined||judge2==undefined){
        alert("请完成判断题！");
        return;
    }

    var resume = $("#resume").val();
    if(resume==""){
        alert("请完成简答题！");
        return;
    }


    //计算分数
    if(UMLName=="统一建模语言"){
        score+=5;
    }
     if(OBJcharacter1=="封装性"){
        score+=5;
    }
     if(OBJcharacter2=="继承性"){
        score+=5;
    }
     if(OBJcharacter3=="多态性"){
        score+=5;
    }

    if(optionsRadios=="B"){
        score+=10;
    }
    if(javaSupport=="A"){
        score+=10;
    }

    if(granularityAnswer=="ABD"){
        score+=10;
    }
    if(granularAnswer=="ABC"){
        score+=10;
    }

    if(judge1==0){
        score+=10;
    }
    if(judge2==1){
        score+=10;
    }

    if(resume=="模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式：可以是物理实体；可以是某种图形；或者是另一种数学表达式。"){
        score+=20;
    }
    $("#score").append(score);
    alert("恭喜你完成试卷获得"+score+"分");

})
