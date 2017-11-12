
$(document).ready(function() {

	//点击消息按钮显示消息框
	$("#news").click(function() {
		$("#message").toggle();
	});

	//点击换肤按钮显示图片
	$("#changeSkin").click(function() {
		$("#skin").slideDown(300);
	});

	//点击收起按钮收回
	$(".sq").click(function(e) {
		$("#skin").slideUp(300);
		if(e.stopPropagation) { //阻止事件冒泡
			e.stopPropagation() //非IE浏览器
		} else {
			e.cancelBubble = true; //IE浏览器
		}
	});

	//localStorage存储
	var bgImg = localStorage.getItem("bgImg"); //获取localstorge里的图片（取值）
	if(bgImg) {
		$("body").css("background-image", "url(" + bgImg + ")"); //("+bgImg+")里面必须是双引号
		$(".logo>img").attr("src", "img/logo_white_fe6da1ec.png"); //这里也要加上这句，要不然刷新就变回去了
		$(".nav>ul>li>a,.mysz a").css("color", "#FFFFFF"); //换肤之后导航栏和我的设置字体变为白色
	}

	//点击图片换肤
	$("#skin img").click(function() {
		$("body").css({
			"background-image": "url(" + $(this).attr('src') + ")", //利用src属性切换图片
		});
		$(".logo>img").attr("src", "img/logo_white_fe6da1ec.png"); //点击换肤百度logo就使用这张图片
		$(".nav>ul>li>a,.mysz a").css("color", "#FFFFFF"); //换肤之后字体变为白色
		localStorage.setItem("bgImg", $(this).attr('src')); //把图片存入localStorage（设值）
	})

	//点击不使用皮肤
	$(".bsy").click(function() {
		$("body").css("background-image", "");
		$(".logo>img").attr("src", "img/bd_logo1_31bdc765.png"); //不使用皮肤的话就换成这张图片
		$(".nav>ul>li>a,.mysz a").css("color", "");
		localStorage.removeItem("bgImg"); //删除localstrorage的值（图片）
	})
//
//	//划过设置显示#setbox
//	$("#set").hover(function() {
//		$("#setBox").show();
//	}, function() {
//		$("#setBox").hide();
//	});

	//划过更多产品显示二级菜单										
	$("#moreProducts").hover(function() {
		$("#products").show();
		$(this).css("background-color", "#F0F0F0");
	}, function() {
		$("#products").hide();
		$(this).css("background-color", "#38f")
	});

	//划过显示背景颜色
	$(".menu li").hover(function() {
		$(this).css("background-color", "#E0E0E0");
	}, function() {
		$(this).css("background-color", "#FFFFFF");
	});
	$(".menu li").click(function() {
		$(this).css("background-color", "#A8A8A8");
	});

	//划过我的导航显示隐藏添加、返利模式、置顶
	$("#mynav").hover(function() {
		$("#tfz").show();
	}, function() {
		$("#tfz").hide();
	});

	//点击我的导航显示添加网址
	$(".dh").click(function() {
		$(".tjwz").slideToggle();
	})

	//点击设置显示订阅频道
	$("#setUp").click(function() {
		$(".dypd").slideToggle();
	});

	//划过回到顶部显示
	$(".top").hover(function() {
		$(".hddb").show();
		$(".top-icon").hide();
		$(".top").css("background-color", "#E0E0E0");
	}, function() {
		$(".hddb").hide();
		$(".top-icon").show();
		$(".top").css("background-color", "#FAFAFA");
	});

	//点击切换内容
	$(".menu li").each(function(index) {
		$(this).click(function() {
			$(".nr1").removeClass("content");
			$(".menu li").removeClass("follow");
			$(".nr1").eq(index).addClass("content");
			$(".menu li").eq(index).addClass("follow");
		});
	});

	//第一排划过第一张图片的动漫显示添加关注和不感兴趣
	$(".tp1").hover(function(){
		$(".tp-lb-1").hide();
		$(".tjgz-1").show();
		$(".bgxq-1").show();
	},function(){
		$(".tp-lb-1").show();
		$(".tjgz-1").hide();
		$(".bgxq-1").hide();
	})

	//第一排划过第二张图片的电视剧显示添加关注和不感兴趣
	$(".tp2").mouseover(function() {
		$(".tp-lb-2").hide();
		$(".tjgz-2").show();
		$(".bgxq-2").show();
	}).mouseout(function() {
		$(".tp-lb-2").show();
		$(".tjgz-2").hide();
		$(".bgxq-2").hide();
	});

	//第二排划过第四张图片的电视剧显示添加关注和不感兴趣
	$(".tp8").mouseover(function() {
		$(".tp-lb-3").hide();
		$(".tjgz-13").show();
		$(".bgxq-13").show();
	}).mouseout(function() {
		$(".tp-lb-3").show();
		$(".tjgz-13").hide();
		$(".bgxq-13").hide();
	});

	//第一排划过第三张上面图片显示添加关注和不感兴趣
	$(".ypss").mouseover(function() {
		$(".tjgz-3").show();
		$(".bgxq-3").show();
	}).mouseout(function() {
		$(".tjgz-3").hide();
		$(".bgxq-3").hide();
	});

	//第一排划过第三张下面图片显示添加关注和不感兴趣
	$(".ypsx").mouseover(function() {
		$(".tjgz-4").show();
		$(".bgxq-4").show();
	}).mouseout(function() {
		$(".tjgz-4").hide();
		$(".bgxq-4").hide();
	});
	//第一排划过第四张上面图片显示添加关注和不感兴趣
	$(".ypfs").mouseover(function() {
		$(".tjgz-5").show();
		$(".bgxq-5").show();
	}).mouseout(function() {
		$(".tjgz-5").hide();
		$(".bgxq-5").hide();
	});
	//第一排划过第四张下面图片显示添加关注和不感兴趣
	$(".ypfx").mouseover(function() {
		$(".tjgz-6").show();
		$(".bgxq-6").show();
	}).mouseout(function() {
		$(".tjgz-6").hide();
		$(".bgxq-6").hide();
	});
	//第二排划过第一张上面图片显示添加关注和不感兴趣
	$(".epys").mouseover(function() {
		$(".tjgz-7").show();
		$(".bgxq-7").show();
	}).mouseout(function() {
		$(".tjgz-7").hide();
		$(".bgxq-7").hide();
	});
	//第二排划过第一张下面图片显示添加关注和不感兴趣
	$(".epyx").mouseover(function() {
		$(".tjgz-8").show();
		$(".bgxq-8").show();
	}).mouseout(function() {
		$(".tjgz-8").hide();
		$(".bgxq-8").hide();
	});
	//第二排划过第二张上面图片显示添加关注和不感兴趣
	$(".epes").mouseover(function() {
		$(".tjgz-9").show();
		$(".bgxq-9").show();
	}).mouseout(function() {
		$(".tjgz-9").hide();
		$(".bgxq-9").hide();
	});
	//第二排划过第二张下面图片显示添加关注和不感兴趣
	$(".epex").mouseover(function() {
		$(".tjgz-10").show();
		$(".bgxq-10").show();
	}).mouseout(function() {
		$(".tjgz-10").hide();
		$(".bgxq-10").hide();
	});
	//第二排划过第三张上面图片显示添加关注和不感兴趣
	$(".epss").mouseover(function() {
		$(".tjgz-11").show();
		$(".bgxq-11").show();
	}).mouseout(function() {
		$(".tjgz-11").hide();
		$(".bgxq-11").hide();
	});
	//第二排划过第三张下面图片显示添加关注和不感兴趣
	$(".epsx").mouseover(function() {
		$(".tjgz-12").show();
		$(".bgxq-12").show();
	}).mouseout(function() {
		$(".tjgz-12").hide();
		$(".bgxq-12").hide();
	});
	//点击相机显示上传图片栏
	$(".camera").click(function() {
		$(".zttp").show();
	})

	//点击上传图片的关闭
	$(".close").click(function() {
		$(".zttp").hide();
	})

	//距离顶部大于100px就显示否则隐藏
	 sskH=$(".ssk").offset().top;
	 
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$(".top").fadeIn();
		} else {
			$(".top").fadeOut();
		}
//		$(window).scrollTop() > 100?$(".top").fadeIn():$(".top").fadeOut();三木运算
	})
	
	
		//点击回到顶部												
	$(".top").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 200);
	});

	//输入框内容提交
	$("#btn").on("click", function() {
		var test = $("#txt").value
		if(null == test || "" == test) {
			$("#txt").focus();
		}
	})

});