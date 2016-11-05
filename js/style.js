$(function(){
	
$('#top_out').load('ajax.html #top',topCallback);
function topCallback(){
	//sc_car();
	$('.topclose').click(function(){
	$('.toppromo').css('display','none');
	})
	$('.tShow1').mouseover(function(){
		$('.hdt').css('display','block');
	});
	$('.tShow1').mouseout(function(){
		$('.hdt').css('display','none');
	});
	
	$('.d6').mouseover(function(){
		$('.d6 .dd').css('display','block');
	});
	$('.d6').mouseout(function(){
		$('.d6 .dd').css('display','none');
	});
	
	$('.d6 .dd .off').click(function(){
		$('.d6 .dd').css('display','none');
	});
	//console.log($('.d6 .city_middle ul li').children());
	$('.d6 .city_middle ul li').click(function(){
		//console.log($(this).children().html());
		$('.d6 .pshort .city_title1').html($(this).children().html());
	});
	
	
	$('.topTh .m1').mouseover(function(){
		$('.topTh .m1 .dd1').css('display','block');
	});
	$('.topTh .m1').mouseout(function(){
		$('.topTh .m1 .dd1').css('display','none');
	});
	
	$('.topTh .m2').mouseover(function(){
		$('.topTh .m2 .dd2').css('display','block');
	});
	$('.topTh .m2').mouseout(function(){
		$('.topTh .m2 .dd2').css('display','none');
	});
	
	$('.topTh .allCat').mouseover(function(){
		$('.topTh .allCat .dd').css('display','block');
	});
	$('.topTh .allCat').mouseout(function(){
		$('.topTh .allCat .dd').css('display','none');
	});


	if($.cookie('username')){
		$('.loginsuc').css('display','block');
		$('.loginsuc').find('.logininfo').html($.cookie('username')+',欢迎您！');
		$('.nologin').css('display','none');
	}else{
		$('.loginsuc').css('display','none');
		$('.nologin').css('display','block');
	}
	$('.loginsuc').find('.login_out').click(function(){
		$.cookie('username','',{expires:-1,path:'/'});
		$('.loginsuc').css('display','none');
		$('.nologin').css('display','block');
	});



	$('#keyword').focus(function(){
		$(this).val('');
	});
	
	$('#keyword').blur(function(){
		$(this).val('大闸蟹');
	});
	
	$('#topCart').mouseover(function(){
		$(this).css({
			'height':'40',
			/*'border-bottom':'0',*/
			'box-shadow': '0 0 5px #dadada',
			/*'box-shadow-bottom':'none'*/
		})
		$('#cart_lists').css({
			'display':'block',
			'box-shadow': '0 0 5px #dadada',
			'box-shadow-top':'none',
			/*'border-top':'0',*/
			'background':'#fff'
			});
			if($('#cartNum').html()==0){
				$('.floatcar1').css('display','block');
				$('.yespro').css('display','none');
			}else{
				$('.floatcar1').css('display','none');
				$('.yespro').css('display','block');
				
			}
			sc_msg();
	});
	
	$('#topCart').mouseout(function(){
		$(this).css({
			'height':'33',
			'box-shadow': 'none'
		})
		$('#cart_lists').css({
			'display':'none',
			});
	});
	
	$('#booksort .item').mouseover(function(){
		$(this).find('.i-cm').css('display','block');
	});
	$('#booksort .item').mouseout(function(){
		$(this).find('.i-cm').css('display','none');
	});
	
	$('#booksort .i-close').click(function(){
		$('#booksort .i-cm').css('display','none');
	});
}

if($.cookie('goods')=='[{'){
		$.cookie('goods','',{expires:-1,path:'/'});
		$.cookie('first',{expires:-1,path:'/'});
		console.log($.cookie('goods'));
}else{
		sc_msg();
		sc_car();
		
}


//console.log($('#s-cart-add').html());

	/*焦点轮播图*/
	var bannertimer=setInterval(bannerslide,3000);
	var s=$("#indexbg");
	var p=s.children();
	var ali=$('#ol').children();
	var cloneli=ali.eq(0).clone(true);//复制第一个li
	$('#ol').append(cloneli);//把复制的li添加到ol后面
	var bli=$('#ol').children();
	var clonep=p.eq(0).clone(true);//复制第一个p
	s.append(clonep);////把复制的p添加到div后面
	var p1=s.children();
	s.css('width','p1.length*p1[0].offsetWidth');
	$('#lunboNum').children().eq(0).addClass('cur');
	var bannerindex=0;
	//console.log(index);
	function bannerslide(){
		if(bannerindex==bli.length-1){
			//console.log(11);
			bannerindex=1;
			$('#ol').css('left','0');
			
		}else{
			//console.log(22);
			bannerindex++;
			if(bannerindex==bli.length-1){
				$('#lunboNum').children().eq(0).siblings().removeClass('cur');
				$('#lunboNum').children().eq(0).addClass('cur');
			}
		}
		//console.log(index);
		$('#lunboNum').children().eq(bannerindex).siblings().removeClass('cur');
		$('#lunboNum').children().eq(bannerindex).addClass('cur');
		var width=-bannerindex*bli.eq(0).outerWidth()+"px";
		//console.log(width);
		var width1=-bannerindex*p1.eq(0).outerWidth()+"px";
		$('#ol').stop().animate({
			left:width
		});
		s.stop().animate({
			left:width1
		});
	}
	
	$('#lunboNum').children().mouseover(function(){
		clearInterval(bannertimer);
		bannerindex=$(this).index();
		$('#lunboNum').children().removeClass('cur');
		$(this).addClass('cur');
		var width=-bannerindex*bli.eq(0).outerWidth()+"px";
		var width1=-bannerindex*p1.eq(0).outerWidth()+"px";
		$('#ol').stop().animate({
			left:width
		});
		s.stop().animate({
			left:width1
		});
	});
	$('#lunboNum').children().mouseout(function(){
		bannertimer=setInterval(bannerslide,3000);
	});

	$('.rSide').children().mouseenter(function(){
		$(this).addClass('layer').siblings().removeClass('layer');
		$(this).parent().addClass('hover');
	});
	/*优选必买*/
	$('#bigPerfect').children().mouseenter(function(){
		var index=$(this).index();
		//console.log(index);
		var btn=$('.gBtn').eq(index);
		//console.log(btn);
		btn.stop().animate({
			'top':220
		});
	});
	$('#bigPerfect').children().mouseleave(function(){
		var index=$(this).index();
		var btn=$('.gBtn').eq(index);
		btn.stop().animate({
			'top':260
		});
	});
	
	
	
	$('#smallPerfect').children().mouseenter(function(){
		var index1=$(this).index();
		var btn1=$('.bbtm').eq(index1);
		//console.log($('#smallPerfect .gbtn'));
		btn1.stop().animate({
			'top':160
		});
	});
	$('#smallPerfect').children().mouseleave(function(){
		var index1=$(this).index();
		var btn1=$('.bbtm').eq(index1);
		btn1.stop().animate({
			'top':210
		});
	});
	
weituo($('#bigPerfect'),'.mustbuy');	
weituo($('#smallPerfect'),'.mustbuy');
	/*优选必买  end*/
	/*抢购*/
	$.ajax({
		url:"data/pro.json",
		type:'GET',
		success:function(res){
			var html='';
			for(var i=0;i<res.length;i++){
				html+='<li><div class="pImg"><a href="details.html" title="'+res[i].title+'" target="_blank" ><img src="'+res[i].url+'" title="'+res[i].title+'"/></a></div><div class="title-a"><a title="'+res[i].title+'">'+res[i].name+'</a></div><div class="price"><b>'+res[i].price+'</b><span><a class="rushBuy" id="'+res[i].id+'" href="javascript:;">抢购</a></span></div></li> ';
			}
			$('#noeCon').html(html);
		}
	})
	//页面刷新时获取购物车数量;

weituo($('#noeCon'),'.rushBuy');
	
	/*抢购 end*/
	
	/*中间*/
	$.ajax({
		url:"data/img.json",
		type:'get',
		success:function(res){
			fn_succ1(0,8,$('#floor-gap-1'),res);
			fn_succ1(8,16,$('#floor-gap-2'),res);
			fn_succ1(16,24,$('#floor-gap-3'),res);
			fn_succ1(24,32,$('#floor-gap-4'),res);
			fn_succ1(32,40,$('#floor-gap-5'),res);
			fn_succ1(40,48,$('#floor-gap-6'),res);
			fn_succ1(48,res.length,$('#floor-gap-7'),res);
			
			var pricelist1=$(".price_list1");
			pricelist1.mouseover(function(){
				$(this).find('.gou').stop().animate({
					'top':136
				});
				
			});
			pricelist1.mouseout(function(){
				$(this).find('.gou').stop().animate({
					'top':161
				});
			});
		}
	});
	
	function fn_succ1(start,end,yuansu,res){
		var html='';
		for(var i=start;i<end;i++){
			html+='<li class="price_list1"><div class="pImg"><a href="details.html" target="_blank" title="'+res[i].title+'"><img src="'+res[i].url+'" style="display:inline;" title="'+res[i].title+'" class="lazy"/></a><div class="gBtn p-btn gou" style="top:161px;"><a href="javascript:;" class="rebuy" id="'+res[i].id+'">加入购物车</a></div></div><div class="title-a"><a href="#" target="_blank" title="'+res[i].title+'">'+res[i].name+'</a></div><div class="price"><b>'+res[i].price+'</b></div></li>';
		}
		yuansu.html(html);
	}
	
	weituo($('#floor-gap-1'),'.rebuy');
	weituo($('#floor-gap-2'),'.rebuy');
	weituo($('#floor-gap-3'),'.rebuy');
	weituo($('#floor-gap-4'),'.rebuy');
	weituo($('#floor-gap-5'),'.rebuy');
	weituo($('#floor-gap-6'),'.rebuy');
	weituo($('#floor-gap-7'),'.rebuy');
	/*中间end*/
	/*底部左侧小轮播图*/
	var aal=$('#lunbo').children();
	var $lr=aal.eq(1).clone(true);
	var $lf=aal.eq(0).clone(true);
	$('#lunbo').append($lf);
	$('#lunbo').prepend($lr);
	var bl=$('#lunbo').children();
	
	$('#slide').mouseenter(function(){
		$('.btn_next').css('display','block')
		$('.btn_prev').css('display','block');
	});
	
	$('#slide').mouseleave(function(){
		$('.btn_next').css('display','none');
		$('.btn_prev').css('display','none');
	});
	
	var n=0;
	$('#ar').click(function(){
		if(n==bl.length-2){
			n=1;
			$('#lunbo').css('left','0');
		}else{
			n++;
		}
		var left=-n*bl.eq(0).outerWidth()+"px";
		$('#lunbo').stop().animate({
			left:left
		});
		
	});
	$('#al').click(function(){
		if(n==0){
			n=bl.length-3;
			//var left2=-(bl.length-2)*bl.eq(0).outerWidth()+"px";
			$('#lunbo').css('left','-340px');
		}else{
			n--;
		}
		var left1=-n*bl.eq(0).outerWidth()+"px";
		$('#lunbo').stop().animate({
			left:left1
		});
	});
		/*底部左侧小轮播图 end*/
		/*底部中间小轮播图*/
	var m=0;
	var dli=$('#topList').children();
	setInterval(function(){
		if(m==dli.length/2-1){
			m=1;
			$('#topList').css('top',0);
		}else{
			m++;
		}
		var top=-m*130+"px";
		$('#topList').stop().animate({
			top:top
		});
	},8000);
	
	/*底部中间小轮播图end*/
	
	$('#store-selector1 .text').mouseenter(function(){
		
		$('#store-selector1 .content').css('display','block');
		$.ajax({
			url:'data/footer.json',
			type:'get',
			success:function(resp){
				var prov='';
				for(var s=0;s<resp.length;s++){
					prov+='<li><a href="javascript:;">'+resp[s].province1+'</a></li>';
				}
				$('#foot_one').html(prov);
				//console.log($('#foot_one').children().length);
			}
		})
	});
	$('#store-selector1 .content').mouseenter(function(){
		$(this).css('display','block');
		$(this).next().css('display','block');
	});
	/*$('#store-selector1 .content').mouseleave(function(){
		$('#store-selector1 .text').css({
			'height':22,
			'border-bottom':'1px solid #cecbce'
		});
		$(this).css('display','none');
	});*/
	$('#store-selector1').find('.close').click(function(){
		$(this).prev().css('display','none');
		$(this).css('display','none');
	});
	
	var index=0;
	function find(showNum){
		$.ajax({
			url:"data/findgoods.json",
			type:'GET',
			dataType:'json',
			success:function(resg){
				var pageNum=Math.ceil(resg.length/showNum);
				if(index==pageNum-1){
					index=0;
				}else{
					index++;
				}
				var goods='';
				for(var i=index*showNum;i<(index+1)*showNum;i++){
					if(i<resg.length){
						goods+='<span class="myajaxspan" style="display:inline"><a href="details.html" target="_blank"><img src="'+resg[i].url+'"/><div class="ushadow" style="display:none"><div class="us_content"><div class="us_title">'+resg[i].title+'</div><div class="us_foot">'+resg[i].foot+'</div></div></div></a></span>';
					}
				}
				$('#findGoods').html(goods);
				$('.myajaxspan').hover(function(){
					$(this).find('.ushadow').toggle();
				});
			}	
		})
	}
	find(4);
	$('#change').click(function(){
		find(4);
	});
	
	
	
	
	$('#footer_out').load('ajax.html #fs',footCallback);
	function footCallback(){
			/*右侧滑动导航*/
			sc_car();
			$('#side_cart').mouseover(function(){
				$('.cart-wrap').css('display','block');
				$('.cart-list').stop().animate({
					right:'0'
				},1000);
				
				if($('#scartNum').html()==0){
					$('.cart-shopping').css('bottom','152');
					$('.cart-arr').css('bottom','10');
					$('.floatcar1').css('display','block');
					$('.yespro').css('display','none');
				}else{
					$('.cart-shopping').css('bottom','50');
					$('.cart-arr').css('bottom','110');
					$('.floatcar1').css('display','none');
					$('.yespro').css('display','block');
					
				}
			sc_msg();
			});
			$('#side_cart').mouseout(function(){
				$('.cart-wrap').css('display','none');
				$('.cart-list').stop().animate({
					right:'-101%'
				},1000);
			});
			
		function slide1(a,b,c){
			$(a).mouseover(function(){
				$(b).css('display','block');
				$(c).stop().animate({
					right:'0'
				},1000);
			});
			
			$(a).mouseout(function(){
				$(b).css('display','none');
				$(c).stop().animate({
					right:'-101%'
				},1000);
			});
			
		}
		//slide1('#side_cart','.cart-wrap','.cart-list');
		slide1('.cart-wrap','.cart-wrap','.cart-list');
		slide1('#side_guang','#history_con','.his-list');
		slide1('#history_con','#history_con','.his-list');
		slide1('#side_app','.appInfo','.appItem');
		slide1('.appInfo','.appInfo','.appItem');
		
		
		/*回到顶部*/
		$(document).scroll(function(){
			//alert(111); cs ww
			var top=$(document).scrollTop();
			if(top>0){
				$('.bToTop').css('display','block');
			}else{
				$('.bToTop').css('display','none');
			}
		});
		$('.bToTop').click(function(){
			$(document).scrollTop(0);
		});
	}

	
	
	/*倒计时*/
	
	var hour1=parseInt($('#nowHour1').html());
	var hour2=parseInt($('#nowHour2').html());
	var min1=parseInt($('#nowMin1').html());
	var min2=parseInt($('#nowMin2').html());
	var second1=parseInt($('#nowSecond1').html());
	var second2=parseInt($('#nowSecond2').html());
	
	var timer=setInterval(time,1000);
	function time(){
		//alert(11);
		if(second2>0){
		second2--;
		}else{
			if(second1==0&&second2==0&&min1==0&&min2==0&&hour1==0&&hour2==0){
				clearInterval(timer);
			}else if(second1>0&&second2==0){
				second2=9;
				second1--;
			}else if(min2>0&&second1==0&&second2==0){
				second1=5;
				second2=9;
				min2--;
			}else if(min1>0&&min2==0&&second1==0&&second2==0){
				second1=5;
				second2=9;
				min2=9;
				min1--;
			}else if(hour2>0&&min1==0&&min2==0&&second1==0&&second2==0){
				second1=5;
				second2=9;
				min2=9;
				min1=5;
				hour2--;
			}else if(hour1>0&&hour2==0&&min1==0&&min2==0&&second1==0&&second2==0){
				second1=5;
				second2=9;
				min2=9;
				min1=5;
				hour2=9;
				hour1--;
			}
		}
		//time();
		$('#nowHour1').html(hour1);
		$('#nowHour2').html(hour2);
		$('#nowMin1').html(min1);
		$('#nowMin2').html(min2);
		$('#nowSecond1').html(second1);
		$('#nowSecond2').html(second2);
	}
	
});