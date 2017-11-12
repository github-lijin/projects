$(function(){
    //划过课程库子项右箭头隐藏
	$(".kck-list li").hover(function(){
		$(".list-icon").hide();
	})

	//划过切换标签（第一种方法）
//	$(".kck-list li").each(function(index){
//		$(this).mouseover(function(){
//			$(".list-show").eq(index).show();
//		}).mouseout(function(){
//			$(".list-show").eq(index).hide();
//		})
//	})
	//划过切换标签（第二种方法）
	$(".kck-list li").each(function(index){
		$(this).hover(function(){
			$(".list-show").eq(index).show();
		},function(){
			$(".list-show").eq(index).hide();
		})
	})
	//划过list-show
	$(".list-show").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	
	//点击搜索按钮显示搜索框
	$(".search-icon").click(function(){
		$(".search-scale").css("transform","scaleX(1)");
	})
	//点击关闭搜索框关闭
	$(".close-icon").click(function(){
		$(".search-scale").css("transform","scaleX(0)");
	})
	//点击显示方式显示内容
	$(".xsfs span").each(function(index){
		$(this).click(function(){
			$(".hp").removeClass("xsnr");
			$(".xsfs span").removeClass("qh");
			$(".hp").eq(index).addClass("xsnr");
			$(".xsfs span").eq(index).addClass("qh");
		})
	})
	//划过li标签显示的内容
	$(".hp-ul li").each(function(index){
		$(this).hover(function(){
			$(".hgxs").eq(index).stop().slideDown();       //这里一定要加stop()阻止冒泡，要不然鼠标移开还会继续有一个动画效果!!!
			$(".lessonplay").eq(index).stop().fadeIn();
		},function(){
			$(".hgxs").eq(index).stop().slideUp();
			$(".lessonplay").eq(index).stop().fadeOut();
		})
	})
	//划过.sp-ul li标签显示动画
	$(".sp-ul li").each(function(index){
		$(this).hover(function(){
			$(".bjys").eq(index).stop().fadeIn();//这里一定要加stop()阻止冒泡，要不然鼠标移开还会继续有一个动画效果!!!
		},function(){
			$(".bjys").eq(index).stop().fadeOut();
		})
	})
	//滚动条距离顶部20px显示顶部图标
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$(".db").css({"opacity":1})	//这里一定要用opacity,用fadein()顶部图标隐藏的时候手机图标会往上跑，出现的时候会往下跑！！！
		}else{
			$(".db").css({"opacity":0})
		}
	})
	
	//点击返回顶部
	$(".db").click(function(){
		$("html,body").animate({
			scrollTop:0
		},200)
	})
});