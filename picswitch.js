(function($){
	$.fn.extend({
		picswitch:function(options){
		
			var defaults={
				piclist:$("ul"),
				timechange:3000	
			}
			var options = $.extend({},defaults, options); 

			return this.each(function(){
				$(this).append('<a class="pic_prev"></a><a class="pic_next"></a><ul class="check_point"><li class="check_point_li check_active"></li><li class="check_point_li"></li><li class="check_point_li"></li><li class="check_point_li"></li></ul>');

				var pic_next=$(".pic_next");
				var pic_prev=$(".pic_prev");
				var check_point=$(".check_point");
				var num=0;
				var accord;
				var li_length=options.piclist.find("li").length;
				
				autoplay();

				options.piclist.hover(function(){
					clearInterval(accord);
				},function(){
					autoplay();
				})

				pic_next.on('click',function(){
					if(num<li_length-1){
						num++;
					}else{
						num=0;
					}
					picactive();
				})
				pic_prev.on("click",function(){
					if(num==0){
						num=li_length-1;
					}else{
						num--;
					}
					picactive();
				})
				function picactive(){
					options.piclist.find("li").eq(num).show().siblings("li").hide();
					check_point.find("li").eq(num).addClass("check_active").siblings().removeClass("check_active");
				}
				function autoplay(){
					accord=setInterval(function (){
					if(num==li_length-1){
						num=0;
					}else{
						num++;
					}
					picactive();
				},options.timechange);
				}
			})	
		}
	})
})(jQuery)