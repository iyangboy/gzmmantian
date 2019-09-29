(function(win,$){
	var data = ["答：我们平台对下单的用户，会进行征信查询和评估，评估收取199元评估费用，评估费用说明在评估页有详细标注和说明，请认真仔细阅读评估服务协议和代扣服务协议。本平台承诺并保证，收取费用后，不再收取除利息和违约金以外的额外服务费用。"
	,"答：请绑定一张常用的储蓄卡，本平台目前仅支持17家合作银行，请在银行列表查看，绑定银行卡过程中，会进行验证银行卡是否有效，通过发送短信，来验证银行卡是有效的储蓄卡，否则无法验证通过。"
	,"答：首先需要下载并注册本平台app，然后需要填写个人资料进行实名认证和个人信息填写，银行卡验证。完善资料后，选取额度和期限进行下单确认，订单确认后需要进行评估，评估通过后，如果您的征信和信誉良好，且没有不良借款记录，通过本平台人工审核后，会在7个工作日内进行放款。"
	,"答：贷款成功需要满足3个条件：1.个人资料完善 2.订单创建成功且评估完成 3.评分后积分达到600分以上"
	,"答：如果不满足本平台的贷款条件，通过评估后，我们会通过大数据风控为您推荐其他合作平台为您提供贷款，您可以在订单页面，点击订单进行查看推荐平台，合作平台不会再收取评估费用，本平台保证支付评估费用后一定能借到款。"
	,"答：如果您的征信很差，也是可以贷到款的，我们通过大数据人工智能风控为您匹配最适合您的贷款平台，您可以在我们推荐的合作平台进行借款，合作平台会进行放款。"
	,"答：如果您在本平台和我们的推荐合作平台均未借款成功，可以在本平台的“求助反馈”提交借款失败的图片，请上传不少于5张且不少于5家平台的借款失败截图和您的手机号码，我们会进行人工审核审核通过后，我们会退还服务费用。"
	,"答：贷款利息是根据您的选择的贷款期限和贷款金额而定，贷款分期是根据您选择的期限而定。"
	,"答：您通过本平台的评估和人工审核后，且征信评分600分以上，本平台会在3个工作日内，将贷款金额转入您绑定的银行卡内，请3个工作日内保持手机畅通，我们会随时与您沟通；如果您的征信评分低于600分，请您选择我们的推荐平台进行借款。"
	,"答：当您的借款期限到时间后，请确保绑定的银行卡内大于或等于您借款的金额和利息的总和的金额，我们会从您绑定银行卡内扣除。如果扣款失败，请保持手机畅通，我们会有工作人员与您沟通。"
	]
	//获取产品的名称
	var product_type = decodeURI(tools.getUrlParams("product_name")),
		qq = tools.getUrlParams("qq");
	
	$("title").html(product_type);
	$(".robot-hd").find("span").html(product_type.substr(0,1));
	console.log(product_type,qq);
	if(qq){
		$(".rgfw").empty().append("QQ:"+qq);
	}
	// 获取时间
	function getTime(){
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		if (month < 10) month = "0" + month;
		var day = now.getDate();
		if (day < 10) day = "0" + day;
		var hours = now.getHours();
		if (hours < 10) hours = "0" + hours;
		var minutes = now.getMinutes();
		if (minutes < 10) minutes = "0" + minutes;
		var str = year+"-"+month+"-"+day+" "+hours+":"+minutes;
		$("#time").html(str);
	}
	
	var $bd = $("#bd"),
		listTpl1 = $("#list-tpl1").html(),
		listTpl2 = $("#list-tpl2").html(),
		M = Mustache;
	
	$(".robot-item").on('click',function(){
		var str = $(this).text(),
			index = $(this).index();
		
		$bd.append(M.render(listTpl1,str));
		$bd.append(M.render(listTpl2,data[index]));
		var div = document.getElementById('scrolldIV');

		div.scrollTop = div.scrollHeight;
		
	})
	
	$(".btn").on('click',function(){
		var str = $(".ipt").val();
		if(str){
			$bd.append(M.render(listTpl1,str));
			if(qq&&qq!=""){
				$bd.append(M.render(listTpl2,"小"+product_type.substr(0,1)+"不会了,请联系QQ:"+qq));
			} else {
				$bd.append(M.render(listTpl2,"小"+product_type.substr(0,1)+"不会了。"));
			}
			$(".ipt").val("");
			var div = document.getElementById('scrolldIV');
			div.scrollTop = div.scrollHeight;
		} else {
			alert("不能发送空消息");
		}
	});
	
// 	$(".rgfw").on('click',function(){
// 		mui.alert("请联系客服qq："+qq+"",' ','确定','');
// 	});
	
	getTime();
}(this,jQuery));