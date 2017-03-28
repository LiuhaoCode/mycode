// JavaScript Document

// 背景图片随着滚动条移动
$(window).scroll(function(){
	$(".bigbgpic").css("background-position-y",$("body").scrollTop()/2);
})

// 添加背景颜色
var colors = ['#F03861','#17E7A4','#F9C535','#F87D09','#51DACF','#FF7676','#F03861','#17E7A4','#F87D09','#51DACF'];
var colorss = ['255,188,188','240,56,97','23,231,164','249,197,53','248,125,9','81,218,210','255,188,188','240,56,97','23,231,164'];
function color(obj){
	var i = 0;
	$(obj).each(function(){
		i++;
		$(this).css({background:colors[i]});
	})
}
color('.center div');

// 添加 透明背景
var n = 0;
$('.projects .silde div .box').each(function(){
	n++;
	$(this).css({background:"rgba("+ colorss[n] +",.6)"})
})

// 图片列表 批量添加
var pic = document.querySelectorAll('.Gallery ul li img');
for(var i = 0; i < pic.length; i++){
	pic[i].src = "images/g" + (i+1) + ".jpg";
}
var message = document.getElementsByClassName('message')[0];
var left = document.getElementsByClassName('left')[0];
setInterval(function(){
	message.style.height = left.offsetHeight + "px";
},20)