(function(win, $) {

	var $slider = $("#info"),
		into_from,
		lay,
		flag = 1;

	//随机数
	function rand(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	//随机金额
	var money = [1000, 2000, 5000, 10000, 20000, 50000],
		len = money.length;

	$(".money").each(function() {
		$(this).html(money[Math.floor(Math.random() * len)]);
	});

	//随机手机后四位
	$(".four-num").each(function(index, el) {
		$(this).html(rand(1000, 9999));
	})
	//滚动列表
	$("#info").slide({
		mainCell: ".info-bd ul",
		autoPlay: true,
		effect: "topMarquee",
		vis: 1,
		interTime: 100
	});

	//检验手机型号
	function checkMobile() {
		var u = navigator.userAgent;
		if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
			return 'android';
		} else if (u.indexOf("iPhone") > -1) {
			return 'iphone';
		} else if (u.indexOf("Windows Phone") > -1) {
			return 'wp';
		}
	}

	var mobileType = checkMobile(),
		laytpl = $("#layer-tpl").html(),
		laytpl2 = $("#layer-msg").html();

	$(".link").on("tap", function() {
		if (mobileType == "android") {
			window.location.href = "https://app.ipahc.com/s/ome6Y120";
		} else if (mobileType == "iphone") {
			window.location.href = "https://app.ipahc.com/s/EKrdn120";
		} else {
			window.location.href = "https://app.ipahc.com/s/ome6Y120";
		}
	})
	if (mobileType == "android") {
		into_from = 1;
	} else if (mobileType == "iphone") {
		into_from = 2;
	} else {
		into_from = 3;
	}
	var channel = tools.getUrlParams("channel");
	// 获取验证码
	$(".msg").on('click', function() {
		if (flag) {
			flag = 0;
			var _this = $(this);
			var phoneVal = $('#phone').val();

			if (tools.isPhoneNo(phoneVal)) {
				var json = '{"mobile":"' + phoneVal +
					'","device_id":"201901152257010339f4291d83b95897ec1738c174a81501072d3cac11bfaa","form_token":"265675A8775FC0F2E819526BAA5B096D","platform":"5","flag":"MSG_REG_","version":"1.0","juid":"3c5c6ffe31564f84b1a47e24f5c6f187","login_token":"310007d6f4854848a3f75b2a98814e34","product_type":"ppj"}';
				$.ajax({
					type: "post",
					url: tools.urls + "/zy/zyUser/sendsms",
					data: {
						record: json
					},
					dataType: "json",
					beforeSend: function() {
						lay = layer.open({
							type: 2,
							content: '加载中',
							shadeClose: false
						});
					},
					success: function(data) {
						flag = 1;
						layer.close(lay);
						if (data.code == "0000" && data.result.status == 1) {
							layer.open({
								content: laytpl,
								shadeClose: false,
								success: function(elem) {
									$("#tip").html("获取验证码成功");
									$(".layer-goto").on('tap', function() {
										_this.hide();
										$("#number").empty().show();
										var time = 120;
										var timer = setInterval(function() {
											if (time == 0) {
												clearInterval(timer);
												layer.open({
													content: laytpl2,
													shadeClose: false,
													success: function(elem) {
														$("#laymsg").html("验证码已过期，请重新获取");
														$(".layer-goto").on('tap', function() {
															_this.show();
															$("#number").hide();
															layer.closeAll();
														});
													}
												});
											} else {
												$("#number").html(time);
												time--;
											}
										}, 1000);
										layer.closeAll();
									})
								}
							});
						} else {
							layer.open({
								content: laytpl2,
								shadeClose: false,
								success: function(elem) {
									$("#laymsg").html(data.msg);
									$(".layer-goto").on('tap', function() {
										if (data.msg == "该手机号已注册!") {
											if (mobileType == "android") {
												window.location.href = "https://app.ipahc.com/s/ome6Y120";
												layer.closeAll();
											} else if (mobileType == "iphone") {
												window.location.href = "https://app.ipahc.com/s/EKrdn120";
												layer.closeAll();
											} else {
												window.location.href = "https://app.ipahc.com/s/ome6Y120";
												layer.closeAll();
											}
										} else {
											layer.closeAll();
										}
									})
								}
							});
						}
					},
					error: function() {
						flag = 1;
						layer.close(lay);
						mui.alert("请求超时，请刷新");
					}
				});
				flag = 1;
			} else {
				flag = 1;
				layer.open({
					content: laytpl2,
					shadeClose: false,
					success: function(elem) {
						$("#laymsg").html('手机号不正确');
						$(".layer-goto").on('tap', function() {
							layer.closeAll();
						})
					}
				});
			}
		} else {
			flag = 1;
		}
	});
	//注册
	$(".apply").on('tap', function(e) {
		var phoneVal = $('#phone').val(),
			regPassword = $("#password").val(),
			regPsd = $("#msg").val();
		if (flag) {
			flag = 0;
			//验证
			if (tools.isPhoneNo(phoneVal)) {
				if (regPsd != "") {

					var json = '{"mobile":"' + phoneVal + '","password":"' + regPassword + '","userChannel":"' + channel +
						'","device_id":"201901152257010339f4291d83b95897ec1738c174a81501072d3cac11bfaa","form_token":"265675A8775FC0F2E819526BAA5B096D","platform":"5","into_device":"265675A8775FC0F2E819526BAA5B096D","verify_code":"' +
						regPsd + '","version":"1.0","into_from":"' + into_from +
						'","juid":"3c5c6ffe31564f84b1a47e24f5c6f187","login_token":"310007d6f4854848a3f75b2a98814e34","product_type":"ppj"}';
					$.ajax({
						type: "post",
						url: tools.urls + "/zy/zyUser/register",
						data: {
							record: json
						},
						dataType: "json",
						beforeSend: function() {
							lay = layer.open({
								type: 2,
								content: '加载中',
								shadeClose: false
							});
						},
						success: function(data) {
							flag = 1;
							layer.close(lay);
							if (data && data != "") {
								if (data.code == "0000") {
									var msg = data.result;
									layer.open({
										content: laytpl,
										shadeClose: false,
										success: function(elem) {
											$("#tip").html("亲爱的用户,恭喜您获得20000元的额度");
											if (mobileType == "iphone") {
												$("#ios").html("，请用safari浏览器打开下载链接并下载");
											} else if (mobileType == "android") {
												$("#and").html("，请下载app进行提现");
											}
											$(".layer-goto").on("tap", function() {
												if (mobileType == "android") {
													window.location.href = "https://app.ipahc.com/s/ome6Y120";
													layer.closeAll();
												} else if (mobileType == "iphone") {
													window.location.href = "https://app.ipahc.com/s/EKrdn120";
													layer.closeAll();
												} else {
													window.location.href = "https://app.ipahc.com/s/ome6Y120";
													layer.closeAll();
												}
											})
										}
									});
								} else {
									layer.open({
										content: laytpl2,
										shadeClose: false,
										success: function(elem) {
											$("#laymsg").html(data.msg);
											$(".layer-goto").on('tap', function() {
												layer.closeAll();
											})
										}
									});
								}
							}
						},
						error: function() {
							flag = 1;
							layer.close(lay);
							mui.alert("请求超时，请刷新");
						}
					});
					flag = 1;
				} else {
					flag = 1;
					layer.open({
						content: laytpl2,
						shadeClose: false,
						success: function(elem) {
							$("#laymsg").html('验证码不能为空');
							$(".layer-goto").on('tap', function() {
								layer.closeAll();
							})
						}
					});
				}
			} else {
				flag = 1;
				layer.open({
					content: laytpl2,
					shadeClose: false,
					success: function(elem) {
						$("#laymsg").html('手机号不正确');
						$(".layer-goto").on('tap', function() {
							layer.closeAll();
						})
					}
				});
			}
		} else {
			flag = 1;
		}
	});
}(this, jQuery));
