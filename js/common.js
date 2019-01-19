$(function() {
	var h_str,tab_l,data_href,body_str,body_l,screen_width,sumWidth=0;
	var tab_width=$(".page-tab .tab-title").width();
	screen_width=$(window).width();
	$(window).resize(function(){
		tab_width=$(".page-tab .tab-title").width();
		screen_width=$(window).width();
	})
	//点击最外层链接
	$(".nav-tree li>a").click(function(){

		if($(this).siblings('dl').hasClass("nav-child")){
			//有子节点
			$(this).siblings("dl").slideToggle("slow");
			$(this).parent("li").siblings("li").children("dl").slideUp("slow");
			if($(this).parent("li").hasClass("nav-itemed")){
				$(this).parent("li").removeClass("nav-itemed");
			}else{
				$(this).parent("li").addClass("nav-itemed");
			}
			$(this).parent("li").siblings("li").removeClass("nav-itemed");
		}else{
			//没有子节点
			$(this).parent("li").children("a").css({"background-color":"#009688","color":"#fff"});
			$(this).parent("li").siblings("li").children("a").css({"background-color":"transparent","color":"rgba(255,255,255,.7)"});
			$(this).parent("li").siblings("li").find("dd").removeClass("nav-current");
			//页面标签数据
			data_href=$(this).attr("data-href");
			h_str='<li data-href="'+data_href+'"><span>'+
			$(this).text()+'</span><span class="glyphicon glyphicon-remove btn-sm" aria-hidden="true">'+
			'</span></li>';
			//去除重复数据
			var no_have=true;
			tab_l=$(".page-tab .tab-title li").length;
			for(var i=0;i<tab_l;i++){
				if($(".page-tab .tab-title li").eq(i).attr("data-href")==data_href){
					$(".page-tab .tab-title li").eq(i).addClass("current");
					$(".page-tab .tab-title li").eq(i).siblings("li").removeClass("current");
					no_have=false;
				}

			}
			//增加新数据
			if(no_have){
					$(".page-tab .tab-title").append(h_str);
					$(".page-tab .tab-title li").removeClass("current");
					$(".page-tab .tab-title li").last().addClass("current");

					//判断里面内容是否超出范围
					sumWidth=0;
					$(".page-tab .tab-title li").each(function(){
						sumWidth += $(this).outerWidth();
						});
					console.log(tab_width);
					console.log(sumWidth);
					if(tab_width<=sumWidth){
						var d_value=tab_width-(sumWidth+100);
						
						$(".page-tab .tab-title").css("margin-left",d_value+"px");
					}
					//判断里面内容是否超出范围结束
				}
			//页面标签数据结束
			//main-body里面的内容添加
			body_str='<div class="main-item main-item-show"><iframe class="main-iframe" src="'+data_href+'"></iframe></div>';
			//去除重复数据
			var no_body_have=true;
			body_l=$(".main-body .main-item").length;
			for(var i=0;i<body_l;i++){
				if($(".main-body .main-item").eq(i).children(".main-iframe").attr("src")==data_href){
					$(".main-body .main-item").eq(i).addClass("main-item-show");
					$(".main-body .main-item").eq(i).siblings(".main-item").removeClass("main-item-show");
					no_body_have=false;
				}

			}
			//增加新数据
			if(no_body_have){
					$(".main-body").append(body_str);
					$(".main-body .main-item").removeClass("main-item-show");
					$(".main-body .main-item").last().addClass("main-item-show");				
				}
			//main-body里面的内容添加结束
			//小屏幕判断
			if(screen_width<768){
				$(".nav-aside").hide();
			}
		}	

	})
	$(document).on('click','li.nav-itemed>dl>dd>a',function (){
		if($(this).siblings('dl').hasClass("nav-child")){
				if($(this).parent("dd").hasClass("nav-itemed")){
					$(this).parent("dd").removeClass("nav-itemed");
				}else{
					$(this).parent("dd").addClass("nav-itemed");
				}
				$(this).parent("dd").siblings("dd").removeClass("nav-itemed");
				$(this).siblings('dl').slideToggle("slow");	
				$(this).parent("dd").siblings("dd").children("dl").slideUp("slow");	
			}else{
				$(this).parent("dd").addClass("nav-current");
				$(this).parent("dd").siblings("dd").removeClass("nav-current");
				$(this).parents("li").siblings("li").children("dl").children("dd").removeClass("nav-current");
				$(this).parents("li").siblings("li").children("dl").children("dd").children('dl').children('dd').removeClass("nav-current");
				$(this).parents("li").siblings("li").children("a").css({"background-color":"transparent","color":"rgba(255,255,255,.7)"});
				if($(this).parent("dd").siblings("dd").children('dl').hasClass("nav-child")){
					$(this).parent("dd").siblings("dd").children('dl').children('dd').removeClass("nav-current");
				}
				//页面标签数据
			data_href=$(this).attr("data-href");
			h_str='<li data-href="'+data_href+'"><span>'+
			$(this).text()+'</span><span class="glyphicon glyphicon-remove btn-sm" aria-hidden="true">'+
			'</span></li>';
			//去除重复数据
			var no_have=true;
			tab_l=$(".page-tab .tab-title li").length;
			for(var i=0;i<tab_l;i++){
				if($(".page-tab .tab-title li").eq(i).attr("data-href")==data_href){
					$(".page-tab .tab-title li").eq(i).addClass("current");
					$(".page-tab .tab-title li").eq(i).siblings("li").removeClass("current");
					no_have=false;
				}
			}
			//增加新数据
			if(no_have){
					$(".page-tab .tab-title").append(h_str);
					$(".page-tab .tab-title li").removeClass("current");
					$(".page-tab .tab-title li").last().addClass("current");
					//判断里面内容是否超出范围
					sumWidth=0;
					$(".page-tab .tab-title li").each(function(){
						sumWidth += $(this).outerWidth();
						});
					console.log(tab_width);
					console.log(sumWidth);
					if(tab_width<=sumWidth){
						var d_value=tab_width-(sumWidth+100);
						
						$(".page-tab .tab-title").css("margin-left",d_value+"px");
					}
					//判断里面内容是否超出范围结束
				}
			//页面标签数据结束
			//main-body里面的内容添加
			body_str='<div class="main-item main-item-show"><iframe class="main-iframe" src="'+data_href+'"></iframe></div>';
			//去除重复数据
			var no_body_have=true;
			body_l=$(".main-body .main-item").length;
			for(var i=0;i<body_l;i++){
				if($(".main-body .main-item").eq(i).children(".main-iframe").attr("src")==data_href){
					$(".main-body .main-item").eq(i).addClass("main-item-show");
					$(".main-body .main-item").eq(i).siblings(".main-item").removeClass("main-item-show");
					no_body_have=false;
				}

			}
			//增加新数据
			if(no_body_have){
					$(".main-body").append(body_str);
					$(".main-body .main-item").removeClass("main-item-show");
					$(".main-body .main-item").last().addClass("main-item-show");				
				}
			//main-body里面的内容添加结束
			//小屏幕判断
			if(screen_width<768){
				$(".nav-aside").hide();
			}
			}	
	});
	$(document).on('click','dd.nav-itemed>dl>dd>a',function(){
		$(this).parent("dd").addClass("nav-current");
		$(this).parent("dd").siblings("dd").removeClass("nav-current");
		$(this).parent("dd").parents('dd.nav-itemed').siblings("dd").removeClass("nav-current");
		$(this).parent("dd").parents('dd.nav-itemed').siblings("dd").children("dl").children("dd").removeClass("nav-current");
		$(this).parent("dd").parents("li.nav-itemed").siblings("li").children("dl").children("dd").removeClass("nav-current");
		$(this).parent("dd").parents("li.nav-itemed").siblings("li").children("dl").children("dd").children('dl').children('dd').removeClass("nav-current");
		$(this).parent("dd").parents("li.nav-itemed").siblings("li").children("a").css({"background-color":"transparent","color":"rgba(255,255,255,.7)"});
		//页面标签数据
			data_href=$(this).attr("data-href");
			h_str='<li data-href="'+data_href+'"><span>'+
			$(this).text()+'</span><span class="glyphicon glyphicon-remove btn-sm" aria-hidden="true">'+
			'</span></li>';
			//去除重复数据
			var no_have=true;
			tab_l=$(".page-tab .tab-title li").length;
			for(var i=0;i<tab_l;i++){
				if($(".page-tab .tab-title li").eq(i).attr("data-href")==data_href){
					$(".page-tab .tab-title li").eq(i).addClass("current");
					$(".page-tab .tab-title li").eq(i).siblings("li").removeClass("current");
					no_have=false;
				}
			}
			//增加新数据
			if(no_have){
					$(".page-tab .tab-title").append(h_str);
					$(".page-tab .tab-title li").removeClass("current");
					$(".page-tab .tab-title li").last().addClass("current");
					//判断里面内容是否超出范围
					sumWidth=0;
					$(".page-tab .tab-title li").each(function(){
						sumWidth += $(this).outerWidth();
						});
					console.log(tab_width);
					console.log(sumWidth);
					if(tab_width<=sumWidth){
						var d_value=tab_width-(sumWidth+100);
						
						$(".page-tab .tab-title").css("margin-left",d_value+"px");
					}
					//判断里面内容是否超出范围结束
				}
			//页面标签数据结束
			//main-body里面的内容添加
			body_str='<div class="main-item main-item-show"><iframe class="main-iframe" src="'+data_href+'"></iframe></div>';
			//去除重复数据
			var no_body_have=true;
			body_l=$(".main-body .main-item").length;
			for(var i=0;i<body_l;i++){
				if($(".main-body .main-item").eq(i).children(".main-iframe").attr("src")==data_href){
					$(".main-body .main-item").eq(i).addClass("main-item-show");
					$(".main-body .main-item").eq(i).siblings(".main-item").removeClass("main-item-show");
					no_body_have=false;
				}

			}
			//增加新数据
			if(no_body_have){
					$(".main-body").append(body_str);
					$(".main-body .main-item").removeClass("main-item-show");
					$(".main-body .main-item").last().addClass("main-item-show");				
				}
			//main-body里面的内容添加结束
			//小屏幕判断
			if(screen_width<768){
				$(".nav-aside").hide();
			}
	})
	/*点击上面导航*/
	var d_href, left_href,body_src;
	$(document).on('click','.page-tab .tab-title li',function(){
		
		$(this).addClass("current");
		$(this).siblings("li").removeClass("current");
		d_href=$(this).attr("data-href");
		
		$(".nav-tree li").each(function(){
			//.nav-tree li是否有分支
			if($(this).children("dl").length==1){

				$(this).children("dl").children("dd").each(function(){
					//.nav-tree li dl dd是否有分支
					if($(this).children("dl").length==1){
						//循环最后一层dd
						$(this).children("dl").children("dd").each(function(){
							$(this).removeClass("nav-current");
							left_href=$(this).children("a").attr("data-href");
							if(left_href==d_href){	
								$(this).addClass("nav-current");
								
								
							}
						})
					}else{
						$(this).removeClass("nav-current");
						//.nav-tree li dl dd没有分支
						left_href=$(this).children("a").attr("data-href");
						if(left_href==d_href){	
							$(this).addClass("nav-current");
						}
						
					}
				})
			}else{
				$(this).children("a").css({"background-color":"transparent","color":"rgba(255,255,255,.7)"});
				//.nav-tree li没有分支
				left_href=$(this).children("a").attr("data-href");
				if(left_href==d_href){	
					$(this).children("a").css({"background-color":"#009688","color":"#fff"});
				}
			}
		})

		//main-body内容的展示
		$(".main-body .main-item").each(function(){
			body_src=$(this).children(".main-iframe").attr("src");
			$(this).removeClass("main-item-show");
			if(body_src==d_href){
				$(this).addClass("main-item-show");
			}
		})
	})
	//点击关闭关闭导航
	var next_len,prev_href,next_href,self_href;
	//定义函数，判断定位右侧导航值
	function getHref(sourcehref){
		
		$(".nav-tree li").each(function(){
			//.nav-tree li是否有分支
			if($(this).children("dl").length==1){

				$(this).children("dl").children("dd").each(function(){
					//.nav-tree li dl dd是否有分支
					if($(this).children("dl").length==1){
						//循环最后一层dd
						$(this).children("dl").children("dd").each(function(){
							$(this).removeClass("nav-current");
							left_href=$(this).children("a").attr("data-href");
							if(left_href==sourcehref){	
								$(this).addClass("nav-current");
								
							}
						})
					}else{
						$(this).removeClass("nav-current");
						//.nav-tree li dl dd没有分支
						left_href=$(this).children("a").attr("data-href");
						if(left_href==sourcehref){	
							$(this).addClass("nav-current");
							
						}
						
					}
				})
			}else{
				$(this).children("a").css({"background-color":"transparent","color":"rgba(255,255,255,.7)"});
				
				//.nav-tree li没有分支
				left_href=$(this).children("a").attr("data-href");
				
				if(left_href==sourcehref){	
					
					$(this).children("a").css({"background-color":"#009688","color":"#fff"});
					
					
				}
			}
		})
	}
	//定义函数，判断定位右侧导航值结束
	//删除功能实现
	var location_href,r_width,margin_left_l;
	$(document).on('click','.page-tab .tab-title li span.glyphicon',function(e){
		e.stopPropagation();
		r_width=$(this).parent('li').outerWidth();
		next_len=$(this).parent('li').next("li").length;
		location_href=$(this).parent('li').attr("data-href");
		//判断删除元素后边是否有li元素
		if(next_len==1){
			
			next_href=$(this).parent('li').next("li").attr("data-href");
			$(this).parent('li').next("li").addClass('current');
			$(this).parent('li').next("li").siblings("li").removeClass('current');
			getHref(next_href)
		}else{
			
			prev_href=$(this).parent('li').prev("li").attr("data-href");
			$(this).parent('li').prev("li").addClass('current');
			$(this).parent('li').prev("li").siblings("li").removeClass('current');
			getHref(prev_href)
		}
		
		margin_left_l=parseInt($(".page-tab .tab-title").css("margin-left"));
		
		if((margin_left_l+r_width)<0){
			
			$(".page-tab .tab-title").css("margin-left",margin_left_l+r_width+"px");
			

		}else{
			$(".page-tab .tab-title").css("margin-left",0+"px");
		}
	
		$(this).parent('li').remove();
		//main-body内容的展示
		$(".main-body .main-item").each(function(){

			body_src=$(this).children(".main-iframe").attr("src");

			if(body_src==location_href){
				
				if(next_len==1){
					$(this).next(".main-item").addClass("main-item-show");
					$(this).next(".main-item").siblings(".main-item").removeClass("main-item-show");
				}else{
					$(this).prev(".main-item").addClass("main-item-show");
					$(this).next(".main-item").siblings(".main-item").removeClass("main-item-show");
				}
				$(this).remove();
			}
		})

	})
	//右侧关闭按钮功能实现
	//关闭当前标签
	$(".tab-close li").first().click(function(){
		$(".page-tab .tab-title li").each(function(){
			if($(this).index()==0){
				return true;
			}else{
					if($(this).hasClass("current")){
					
						next_len=$(this).next("li").length;
						//判断删除元素后边是否有li元素
						if(next_len==1){
							
							next_href=$(this).next("li").attr("data-href");
							$(this).next("li").addClass('current');
							
							$(".main-body .main-item").eq($(this).index()+1).addClass("main-item-show");
							getHref(next_href)
						}else{
							
							prev_href=$(this).prev("li").attr("data-href");
							$(this).prev("li").addClass('current');
							
							getHref(prev_href);
							$(".main-body .main-item").eq($(this).index()-1).addClass("main-item-show");						
						}
					$(".main-body .main-item").eq($(this).index()).remove();
					$(this).remove();
					return false;

				}
			}
		})
	})
	//关闭其他标签
	$(".tab-close li").eq(1).click(function(){
		$(".page-tab .tab-title li").each(function(){
			if($(this).index()==0){
				return true;}
			if(!$(this).hasClass("current")){
				$(this).remove();	
			}
		})
		//main-body内容的展示
		$(".main-body .main-item").each(function(){
			
			if($(this).index()==0){
				
				return true;
			}
			if(!$(this).hasClass("main-item-show")){
				$(this).remove();	
			}
			
		})
	})

	//关闭所有标签
		$(".tab-close li").last().click(function(){

			$(".page-tab .tab-title li").each(function(){

				if($(this).index()==0){
					self_href=$(this).attr("data-href");
					$(this).addClass("current");
					getHref(self_href);
					return true;
				}
				
				$(this).remove();
			})
		//main-body内容的展示
		$(".main-body .main-item").each(function(){
			
			if($(this).index()==0){
				$(this).addClass("main-item-show");
				return true;
			}
			$(this).remove();
		})


		})
	//点击头部左侧箭头
	$(".pagetabs .glyphicon-menu-left").click(function(){
		$(".page-tab .tab-title").css("margin-left",0+"px");
	})
	//手机模式被点击之后
	$("#must_icon").click(function(){
		$(".nav-aside").show();
	})

})