mui('body').on('tap','a',function(){
	document.location.href=this.href;
})
 $(".yijian-a div").on('tap',function(){

    $(this).addClass("change").siblings().removeClass("change");
    });