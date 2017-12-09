$(window).scroll(function(event) {
    var scrollHeight = $(window).scrollTop();
    //console.log(scrollHeight);
    if(scrollHeight>200){
    	$(".xcx_module_jianjie .jianjie_content_list").eq(1).find(".jianjie_content_box").addClass("active");
    }
    if(scrollHeight>800){
    	$(".xcx_module_gongneng .gongneng_content_list").eq(0).find(".gongneng_content_item").addClass("active");
    }
    if(scrollHeight>1000){
    	$(".xcx_module_gongneng .gongneng_content_list").eq(1).find(".gongneng_content_item").addClass("active");
    }
});
$(function(){
	$(".xcx_module_jianjie .jianjie_content_box").on("mouseenter",function(){
		if($(this).hasClass("cur")){return;}
		$(".xcx_module_jianjie .jianjie_content_box").removeClass('cur');
		$(this).addClass("cur");
	});
	$(".xcx_module_jianjie .jianjie_content_list").eq(0).find(".jianjie_content_box").addClass("active");
    $(".nav_wrap .xcx_gongneng_a").on("click",function(){
        var $li = $(this).closest(".xcx_gongneng_li");
        if($li.hasClass("current")){
            $li.removeClass("current");
        }else{
            $li.addClass("current");
        }
    });
});