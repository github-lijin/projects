$(window).ready(function(){
	//导航栏
	var nav = {
		init:function(){
			var me = this;
			me.render();
			me.bind();
		},
		render:function(){
			var me = this;
			me.changeSkin = $('#changeSkin');
			me.sq = $(".sq");
			me.skinImg = $("#skin img");
			me.bsy = $(".bsy");
			me.news = $('#news');
			me.moreProducts = $("#moreProducts");
			me.camera = $(".camera");
			me.close = $(".close");
		},
		bind:function(){
			var me = this;
			me.changeSkin.click(function(){
				$("#skin").slideDown(300);
			});
			
			me.sq.click(function(e){
				$("#skin").slideUp(300);
				if (e.stopPropagation) {//阻止事件冒泡
					e.stopPropagation();//非IE浏览器
				} else{
					e.cancelBubble();//IE浏览器
				}
			});
			
			me.skinImg.click(function(){
				$('body').css({
					"background-image":"url("+$(this).attr('src')+")",
				});
				$('.logo>img').attr("src","img/logo_white_fe6da1ec.png");
				$(".nav>ul>li>a,.mysz a").css("color", "#FFFFFF");
				localStorage.setItem("bgImg",$(this).attr('src'));//把图片存入localStorage（设值）
			});
			var bgImg = localStorage.getItem("bgImg");//获取localstorge里的图片（取值）
			if (bgImg) {
				$("body").css("background-image","url("+bgImg+")");
				$(".logo>img").attr("src", "img/logo_white_fe6da1ec.png");
				$(".nav>ul>li>a,.mysz a").css("color", "#FFFFFF");
			};
			
			me.bsy.click(function(){
				$("body").css("backgroun-image","");
				$(".logo>img").attr("src", "img/bd_logo1_31bdc765.png"); //不使用皮肤的话就换成这张图片
				$(".nav>ul>li>a,.mysz a").css("color", "");
				localStorage.removeItem("bgImg");//删除localstrorage的值（图片）
			});
			
			me.news.click(function(){
				$("#message").toggle();
			});
			
			me.moreProducts.hover(function(){
				$("#products").show();
				$(this).css("background-color", "#F0F0F0");
			},function(){
				$("#products").hide();
				$(this).css("background-color", "#38f")
			});
			
			me.camera.click(function(){
				$(".zttp").show();
			});
			
			me.close.click(function(){
				$(".zttp").hide();
			});
		}
	};
	nav.init();
	
	//内容部分
	var banner = {
		init:function(){
			var me = this;
			me.render();
			me.bind();
		},
		render:function(){
			var me = this;
			menuLi = $(".menu li");
			mynav = $("#mynav");
			dh = $(".dh");
			setUp = $("#setUp");
			top = $(".top");
			tp1 = $(".tp1");
			tp2 = $(".tp2");
			tp8 = $(".tp8");
			ypss = $(".ypss");
			ypsx = $(".ypsx");
			ypfs = $(".ypfs");
			ypfx = $(".ypfx");
			epys = $(".epys");
			epyx = $(".epyx");
			epes = $(".epes");
			epex = $(".epex");
			epss = $(".epss");
			epsx = $(".epsx");
		},
		bind:function(){
			var me = this;
			menuLi.hover(function(){
				$(this).css("background-color","#E0E0E0");
			},function(){
				$(this).css("background-color","#fff");
			});

			menuLi.each(function(index){
				$(this).click(function(){
					$(".nr1").removeClass("content");
					$(".menu li").removeClass("follow");
					$(".nr1").eq(index).addClass("content");
					$(".menu li").eq(index).addClass("follow");
					$(this).css("background-color","#A8A8A8");
				})
			});

			mynav.hover(function(){
				$("tfz").show();
			},function(){
				$("tfz").hide();
			});
			
			dh.click(function(){
				$(".tjwz").slideToggle();
			});
			
			setUp.click(function(){
				$(".dypd").slideToggle();
			});
			
			$('.top').hover(function(){
				$(".hddb").show();
				$(".top-icon").hide();
				$(".top").css("background-color", "#E0E0E0");
			},function(){
				$(".hddb").hide();
				$(".top-icon").show();
				$(".top").css("background-color", "#FAFAFA");
			});

			tp1.hover(function(){
				$(".tp-lb-1").hide();
				$(".tjgz-1").show();
				$(".bgxq-1").show();
			},function(){
				$(".tp-lb-1").show();
				$(".tjgz-1").hide();
				$(".bgxq-1").hide();
			})
			
			tp2.mouseover(function(){
				$(".tp-lb-2").hide();
				$(".tjgz-2").show();
				$(".bgxq-2").show();
			}).mouseout(function(){
				$(".tp-lb-2").show();
				$(".tjgz-2").hide();
				$(".bgxq-2").hide();
			})
			
			tp8.hover(function(){
				$(".tp-lb-3").hide();
				$(".tjgz-13").show();
				$(".bgxq-13").show();
			},function(){
				$(".tp-lb-3").show();
				$(".tjgz-13").hide();
				$(".bgxq-13").hide();
			})
			
			ypss.hover(function(){
				$(".tjgz-3").show();
				$(".bgxq-3").show();
			},function(){
				$(".tjgz-3").hide();
				$(".bgxq-3").hide();
			})
			
			ypsx.hover(function(){
				$(".tjgz-4").show();
				$(".bgxq-4").show();
			},function(){
				$(".tjgz-4").hide();
				$(".bgxq-4").hide();
			})
			
			ypfs.hover(function(){
				$(".tjgz-5").show();
				$(".bgxq-5").show();
			},function(){
				$(".tjgz-5").hide();
				$(".bgxq-5").hide();
			})
			
			ypfx.hover(function(){
				$(".tjgz-6").show();
				$(".bgxq-6").show();
			},function(){
				$(".tjgz-6").hide();
				$(".bgxq-6").hide();
			})
			
			epys.hover(function(){
				$(".tjgz-7").show();
				$(".bgxq-7").show();
			},function(){
				$(".tjgz-7").hide();
				$(".bgxq-7").hide();
			})
			
			epyx.mouseover(function(){
				$(".tjgz-8").show();
				$(".bgxq-8").show();
			}).mouseout(function(){
				$(".tjgz-8").hide();
				$(".bgxq-8").hide();
			})
			
			epes.hover(function(){
				$(".tjgz-9").show();
				$(".bgxq-9").show();
			},function(){
				$(".tjgz-9").hide();
				$(".bgxq-9").hide();
			});
			
			epex.hover(function(){
				$(".tjgz-10").show();
				$(".bgxq-10").show();
			},function(){
				$(".tjgz-10").hide();
				$(".bgxq-10").hide();
			})
			
			epss.hover(function(){
				$(".tjgz-11").show();
				$(".bgxq-11").show();
			},function(){
				$(".tjgz-11").hide();
				$(".bgxq-11").hide();
			})
			
			epsx.hover(function(){
				$(".tjgz-12").show();
				$(".bgxq-12").show();
			},function(){
				$(".tjgz-12").hide();
				$(".bgxq-12").hide();
			})
			
			$(window).scroll(function(){
				if ($(window).scrollTop()>150) {
					$(".float-seach").fadeIn();
					$("#float-txt").focus();
				} else{
					$(".float-seach").fadeOut();
				}
			})
			
			$(window).scroll(function(){
				if ($(window).scrollTop()>100) {
					$(".top").fadeIn();
				} else{
					$(".top").fadeOut();
				}
			});
			
			$(".top").click(function(){
				$("html,body").animate({
					scrollTop : 0
				},200)
			});
		}
	};
	banner.init();
});
