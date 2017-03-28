// JavaScript Document

//渐显效果
var bl = true;
	$(window).scroll(function(){
		var l = 0;
		if(bl){
				$("body > .box").each(function(){
				var $scrollTop = $(window).scrollTop();
				var $offsetTop = $("body > .box").eq(l).offset().top;
				if($scrollTop >= $offsetTop-600){
					$("body > .box").eq(l).css({opacity:1,top:0});
					console.log(1);
					if(l==8){
						bl = false;
					}
				}
				l++;
			})
		}else{
			return false;
		}
		
	})