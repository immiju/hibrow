$(document).ready(function(){

/* mobile-menu onoff */
$(".mobile-open").on("click",function(){
	$("#mobile-menu").addClass("on");
});
$(".mobile-close > i").on("click",function(){
	$("#mobile-menu").removeClass("on");
});


/* mobile-gnb 탭 */
$(".tablist").hide();
$(".tablist").first().show();
$(".gnb-tabs > li").first().addClass("select");
$(".mo-em").first().css("display","block");

$(".gnb-tabs > li").on("click",function(){
	var idx = $(this).index();

	$(".tablist").hide();
	$(".tablist").eq(idx).show();
	$(".gnb-tabs > li").removeClass("select");
	$(this).addClass("select");
	$(".mo-em").css("display","none");
	$(".mo-em").eq(idx).css("display","block");
});

/* sub-wrap 아코디언 메뉴 */
$(".sub-wrap > li > span").on("click",function(){
	if($(this).siblings("a").hasClass("open")==true){ //열려있으면
		$(".submenu").stop().slideUp(300);
		$(this).siblings(".submenu").stop().slideUp(300);
		$(this).siblings("a").removeClass("open");
		$(this).removeClass("fa-angle-up");
		$(this).addClass("fa-angle-down");
	}else{ //닫혀있으면
		$(".submenu").stop().slideUp(300);
		$(this).siblings(".submenu").stop().slideDown(300);
		$("a").removeClass("open");
		$(this).siblings("a").addClass("open");
		$(".sub-wrap > li > span").not(this).removeClass("fa-angle-up");
		$(".sub-wrap > li > span").not(this).addClass("fa-angle-down");
		$(this).removeClass("fa-angle-down");
		$(this).addClass("fa-angle-up");
	}
});

/* pc-submenu */
$("#pc-menu #gnb li").on("mouseover",function(){
	$(this).find(".submenu").stop().addClass("on");
});
$("#pc-menu #gnb li").on("mouseout",function(){
	$(this).find(".submenu").stop().removeClass("on");
}); 

new fullpage("#fullpage", {
	//이동
	menu: "#menu",
	anchors: ["sect1","sect2","sect3","sect4","sect5","sect6","sect7"],
	navigation: true,
	navigationPosition: "right",
	navigationTooltips: ["01","02","03","04","05","Board","Info"],
});


/* footer .sns hover */
$(".sns > li").on("mouseover",function(){
	$(this).addClass("on");
});
$(".sns").on("mouseout",function(){
	$(".sns > li").removeClass("on");
});


});