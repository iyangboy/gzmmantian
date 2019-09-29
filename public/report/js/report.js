(function(win,$){
	
	//获取产品的名称
	var productname = decodeURI(tools.getUrlParams("product_name"));
	
	$("title").html(productname);
	$(".report").find("span").html(productname);
	
	// 获取当前日期
	function getDate(){
		var date = new Date();                //得到当前日期原始模式
		var newyear = date.getFullYear();     //得到当前日期年份
		var newmonth = date.getMonth() + 1;   //得到当前日期月份（注意： getMonth()方法一月为 0, 二月为 1, 以此类推。）
		var day = date.getDate();            //得到当前某日日期（1-31）
		newmonth = (newmonth<10 ? "0"+newmonth:newmonth);  //10月以下的月份自动加0
		day = (day<10 ? "0"+day:day);  //10月以下的月份自动加0
		var newdate = newyear + "年" + newmonth + "月" + day +"日";
		return newdate;
	}
	
	$("#date").html(getDate());
	
	var juid = tools.getUrlParams("juid"),
		product_type = tools.getUrlParams("product_type"),
		lay;
	
	var json='{"app_version":"1.0","platform_type":"2","form_token":"taojinyun","version":"1.0","platform":"2","juid":"'+juid+'","login_token":"sdgfdhrt","product_type":"'+product_type+'"}';
	
	$.ajax({
	  type:"post",
	  url: tools.urls+"/zy/zyUserBorrow/zyUserCreditBook",
	  data:{
		record:json
	  },
	  dataType:"json",
	  beforeSend:function(){
		lay = layer.open({
			type: 2
			,content: '加载中',
			shadeClose:false
		});
	  },
	  success:function(data){
		  layer.close(lay);
		  var result = data.result,
			  dt = [],
			  num = [],
			  number1 = 0,
			  number2 = 0,
			  number3 = 0,
			  number4 = 0,
			  number5 = 0,
			  number6 = 0,
			  number7 = 0;
		  console.log(result);
		  $("#name").empty().append(result.name);
		  $("#idcard").empty().append(result.idcard);
		  $("#phone").empty().append(result.phone);
		  $("#number").empty().append(result.creditNo);
		  dt = result.creditInfo.split(",");
		  $.each(dt,function(index,el){
			  $(".dts").eq(index).html(el);
			  if(index<6){
				  if(el!=0){
					number1+=1;
				  }
			  }
			  if(index>=6&&index<9){
				  if(el!=0){
					number2+=1;
				  }
			  }
			  if(index>=9&&index<15){
				  if(el!=0){
					number3+=1;
				  }
			  }
			  if(index>=15&&index<23){
				  if(el!=0){
					number4+=1;
				  }
			  }
			  if(index>=23&&index<34){
				  if(el!=0){
					number5+=1;
				  }
			  }
			  if(index>=34&&index<39){
				  if(el!=0){
					number6+=1;
				  }
			  }
			  if(index>=39&&index<44){
				  if(el!=0){
					number7+=1;
				  }
			  }
		  });
		  $("#num1").html(number1);
		  $("#num2").html(number2);
		  $("#num3").html(number3);
		  $("#num4").html(number4);
		  $("#num5").html(number5);
		  $("#num6").html(number6);
		  $("#num7").html(number7);
		  $("#sum").html(number1+number2+number3+number4+number5+number6+number7);
	  },
	  error:function(data){
		  layer.close(lay);
	  }
	});
	
	
}(this,jQuery));