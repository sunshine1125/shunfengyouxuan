$(function(){
	
		/*头部*/
$('#top_out').load('ajax.html #top',topCallback);
function topCallback(){
	//sc_car();
	$('.topclose').click(function(){
	$('.toppromo').css('display','none');
	})
	
	function slide(a,b){
		a.mouseenter(function(){
			b.css('display','block');
		})
		a.mouseleave(function(){
			b.css('display','none');
		})
	}
	slide($('.tShow1'),$('.hdt'));
	slide($('.d6'),$('.d6 .dd'));
	
	$('.d6 .dd .off').click(function(){
		$('.d6 .dd').css('display','none');
	});
	$('.d6 .city_middle ul li').click(function(){
		$('.d6 .pshort .city_title1').html($(this).children().html());
	});
	
	slide($('.topTh .m1'),$('.topTh .m1 .dd1'));
	slide($('.topTh .m2'),$('.topTh .m2 .dd2'));
	slide($('.topTh .allCat'),$('.topTh .allCat .dd'));
	
	
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
		
		
	slide($('.dt'),$('#allSort'));
	slide($('#allSort'),$('#allSort'));
	
	//slide($('#booksort .item'),$('#booksort .item').find('.i-cm'));
	//slide($('#booksort .i-close'),$('#booksort .i-cm'));
	
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

$(document).scroll(function(){
	var top1=$(document).scrollTop();
	if(top1>800){
		$('.pDetail').addClass('pFixed');
		$('.p-buy-phone').css('display','block');
		$('.pTab').children().click(function(){
			$(document).scrollTop(800);
		})
	}else{
		$('.pDetail').removeClass('pFixed');
		$('.p-buy-phone').css('display','none');
	}
	$('.p-buy-phone').hover(function(){
		$(this).toggleClass('hover');
	});
});	
	
	$.ajax({
		type:"get",
		url:"data/pic.json",
		success:function(picres){
			var phtml='';
			var p1html='';
			//console.log(picres.length);
			for(var i=0;i<76;i++){
				phtml+='<img class="lazy" src="'+picres[i].url+'" style="margin:0px;display: inline; float:left;"/><br/>';
			}
			
			for(var i=76;i<picres.length;i++){
				p1html+='<img class="lazy" src="'+picres[i].url+'" style="margin:0px;display: inline; float:left;"/><br/>';
			}
			
			$('#pic').html(phtml);
			$('#pic1').html(p1html);
		}
	});
	
	
function comment(showNum){
	$.ajax({
		type:"get",
		url:"data/comment.json",
		dataType:'json',
		success:function(res){
			// var showNum=10;
             var resL=res.length;
             var pageNum=Math.ceil(resL/showNum)
			//alert(pageNum);
			$('#Pagination').pagination(pageNum,{
				num_edge_entries:1,
                num_display_entries:4,
                items_per_page:1,
                next_text:'下一页',
                prev_text:'上一页',
                callback:function(index){
                	var html='';
                	//console.log(index);
                	 //console.log(page*index+'~'+parseInt(page*(index+1)))
					for(var i=index*showNum;i<index*showNum+showNum;i++){
						//console.log(i);
					  if(i<res.length){
						html+='<li>';
						html+='<div class="user">';
						html+='<div class="uIcon">';
						html+='<img src="'+res[i].url+'" /></div>';
						html+='<div class="uName">'+res[i].name+'</div>';
						html+='<div class="uLevel">'+res[i].leval+'</div></div>';			
						html+='<div class="item">';	
						html+='<div class="topic">';
						html+='<span class="s">';
						html+='<b class="'+res[i].class+'"></b></span>';
						if(res[i].leval1){
							html+='<div class="ct">';
							html+='<a href="#" target="_blank">'+res[i].leval1+'</a></div>';
						}
						html+='<span class="t">'+res[i].t+'</span>';
						if(res[i].w){
							html+='<span class="w"><a href="#" target="_blank">'+res[i].w+'</a></span>';
						}
						html+='</div>';
						html+='<div class="itemCont">';
						html+='<dl class="c"><dt>评价内容：</dt><dd>'+res[i].dd+'</dd></dl></div>';
						html+='<div class="pLike">';
						html+='<a title="赞" href="javascript:void(0);" class="comment-like-sf "><b></b>赞</a></div></div>';
						html+='<div class="corner"><div class="aBg"></div><div class="aCt"></div></div></li>';		
					  }
				  	}
					
					$('#comment-lists-sf').html(html);
					
				}
			})
			
			
		}
	});
	
}
comment(10);
weituo($('#cart-add-btn-sf'),'.sale');
weituo($('#add-cart-r-btn-sf'),'.sale');

$('#cart-add-btn-sf')
	var sf=setInterval(details,3000);
	var dindex=0;
	var dli=$('#sfys-img-js').children();
	function details(){
		if(dindex==dli.length-1){
			dindex=0;
		}else{
			dindex++;
		}
		
		dli.eq(dindex).stop().fadeIn().siblings().fadeOut();
		$('.ysIcons').children().eq(dindex).children().addClass('cur');
		$('.ysIcons').children().eq(dindex).siblings().children().removeClass('cur')
	}
	
	//console.log($('.ysIcons').children().length);
	$('.ysIcons').children().mouseover(function(){
		$(this).siblings().children().removeClass('cur');
		$(this).children().addClass('cur');
		clearInterval(sf);
		dindex=$(this).index();
		dli.eq(dindex).stop().fadeIn().siblings().stop().fadeOut();
	});
	
	$('.ysIcons').children().mouseout(function(){
		//$(this).children().removeClass('cur');
		sf=setInterval(details,3000);
		
	});

	$('.pTab').children().eq(0).click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$('#div-detial').css('display','block');
		$('#div-params').css('display','none');
		$('#div-comment').css('display','block');
	});
	
	$('.pTab').children().eq(1).click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$('#div-detial').css('display','none');
		$('#div-params').css('display','block');
		$('#div-comment').css('display','block');
	});
	
	$('.pTab').children().eq(2).click(function(){
		$(this).addClass('curr').siblings().removeClass('curr');
		$('#div-detial').css('display','none');
		$('#div-params').css('display','none');
		$('#div-comment').css('display','block');
	});
	
	$('.clickShow').click(function(){
		$(this).children().toggleClass('hide').toggleClass('show');
		$('.a').toggle();
	});
	
	
	
	
	/*放大镜*/
	$('.mark_box').mousemove(function(event){
		var left,top;
		left=event.offsetX-$('.jqZoomLens').outerWidth()/2;
		top=event.offsetY-$('.jqZoomLens').outerHeight()/2;
		
		left=left<0?0:left;
		top=top<0?0:top;
		left=left>$('.mark_box').outerWidth()-$('.jqZoomLens').outerWidth()?$('.mark_box').outerWidth()-$('.jqZoomLens').outerWidth():left;
		top=top>$('.mark_box').outerHeight()-$('.jqZoomLens').outerHeight()?$('.mark_box').outerHeight()-$('.jqZoomLens').outerHeight():top;
		//console.log(left+"==="+top);
		$('.jqZoomLens').css('left',left);
		$('.jqZoomLens').css('top',top);
		//console.log($('.jqZoomLens').css('left')+"=="+$('.jqZoomLens').css('top'));
		
		var propLeft=left/($('.mark_box').outerWidth()-$('.jqZoomLens').outerWidth());
		var propTop=top/($('.mark_box').outerHeight()-$('.jqZoomLens').outerHeight());
		
		var ileft=-($('.bigimg').outerWidth()-$('.zoomdiv').outerWidth())*propLeft;
		var itop=-($('.bigimg').outerHeight()-$('.zoomdiv').outerHeight())*propTop;
		//console.log(ileft+"=="+itop);
		$('.bigimg').css('left',ileft);
		$('.bigimg').css('top',itop);
		
	});
	$('.mark_box').mouseover(function(){
		$('.jqZoomLens').css({
			'display':'block'
			
		});
		$('.zoomdiv').css('display','block');
	});
	
	$('.mark_box').mouseout(function(){
		$('.jqZoomLens').css('display','none');
		$('.zoomdiv').css('display','none');
	});
	
	
	var aimg=["http://p02.sfbest.com/2014/1700056683/middle_1700056683_1_1.jpg","http://p02.sfbest.com/2014/1700056683/middle_1700056683_2_2.jpg","http://p02.sfbest.com/2014/1700056683/middle_1700056683_3_3.jpg","http://p02.sfbest.com/2014/1700056683/middle_1700056683_4_4.jpg",
	"http://p02.sfbest.com/2014/1700056683/middle_1700056683_5_5.jpg","http://p02.sfbest.com/2014/1700056683/middle_1700056683_6_6.jpg"];
	$('#slideimg').children().mouseover(function(){
		var index=$(this).index();
		//alert(index);
		$(this).children().addClass('img-hover');
		$(this).siblings().children().removeClass('img-hover');
		$('#zoom-jpg').children().eq(1).get(0).src=aimg[index];
		$('.bigimg').get(0).src=aimg[index];
	});
	
	var imgindex=0;
	var imgtop=parseInt(($('#slideimg').css('top')));
	//alert(imgtop);
	$('#btn-forward').click(function(){
		if(imgtop==-60){
			//$(this).removeClass('disabled');
			$('#slideimg').stop().animate({
				'top':'0'
			});
		} 
		if(imgtop==0){
			$('#slideimg').css('top',0);
			//$(this).addClass('disabled');
		}
	});
	$('#btn-backward').click(function(){
		if(imgtop==0){
			//$(this).removeClass('disabled');
			$('#slideimg').stop().animate({
			
				'top':'-60'
			});
		}
		//console.log($(this));
		if(imgtop==-60){
			$('#slideimg').css('top','-60')
			//$(this).prev().removeClass('disabled');
			//$(this).addClass('disabled');
		}
	});
	
	
	
	/*尾部*/
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
		
		
		/*回到顶部  置顶菜单*/
		$(document).scroll(function(){
			//alert(111); cs ww
			var top=$(document).scrollTop();
			if(top>0){
				$('.bToTop').css('display','block');
			}else{
				$('.bToTop').css('display','none');
			}
			
			if(top>500){
				$('.r-filter').addClass('filterScroll');
			}else{
				$('.r-filter').removeClass('filterScroll');
			}
		});
		$('.bToTop').click(function(){
			$(document).scrollTop(0);
		});
	}

});