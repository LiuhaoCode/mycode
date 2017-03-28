// JavaScript Document

// 全屏轮播 
$('.list div .right').click(function () {  
    $(".list ul").stop().animate({marginLeft:"-100%"},1000, function () {  
        $(".list ul>li").eq(0).appendTo($(".list ul"));  
        $(".list ul").css('marginLeft','0px');  
    });  
})  
$('.list div .left').click(function () {  
    $(".list ul").css('marginLeft','-100%');  
    $(".list ul>li").eq(2).prependTo($(".list ul"));  
    $(".list ul").stop().animate({marginLeft:"0px"},1000);  
}) 
	    
// 三图 轮播
$('.silde .button .right').click(function () {  
    $(".silde .sildes").stop().animate({marginLeft:"-33.33333%"},600, function () {  
        $(".silde .sildes>div").eq(0).appendTo($(".silde .sildes"));  
        $(".silde .sildes").css('marginLeft','0px');  
    });  
})  
$('.silde .button .left').click(function () {  
    $(".silde .sildes").css('marginLeft','-33.333333%');  
    $(".silde .sildes>div").eq(8).prependTo($(".silde .sildes"));  
    $(".silde .sildes").stop().animate({marginLeft:"0px"},600);  
}) 
    