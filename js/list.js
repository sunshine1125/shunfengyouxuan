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

/*content*/
$('.v-show').click(function(){
	$(this).prev().children().find('.yin').toggleClass('hide');
	//console.log($(this).children().html());
	if($(this).prev().children().find('.yin').hasClass('hide')){
		//alert(111);
		$(this).children().removeClass('s-less').addClass('s-more');
		$(this).children().html('<b></b>更多');
	}else{
		//alert(222);
		$(this).children().removeClass('s-more').addClass('s-less');
		$(this).children().html('<b></b>收起');
	}
		
});


$('#store-selector .text').mouseenter(function(){
		//$('#store-selector1').find('.close').css('display','block');
		$('#store-selector .content').css('display','block');
		$.ajax({
			url:'data/footer.json',
			type:'get',
			success:function(resp){
				//alert(111);
				var prov='';
				for(var s=0;s<resp.length;s++){
					prov+='<li><a href="javascript:;">'+resp[s].province1+'</a></li>';
				}
				$('#foot_one').html(prov);
				//console.log($('#foot_one').children().length);
			}
		})
	});
	$('#store-selector .content').mouseenter(function(){
		$(this).css('display','block');
		$(this).next().css('display','block');
	});
	
	$('#store-selector').find('.close').click(function(){
		$(this).prev().css('display','none');
		$(this).css('display','none');
	});
	
	/*$('#store-selector .content').mouseleave(function(){
		$(this).css('display','none');
		//$(this).next().css('display','none');
	});*/
	
weituo($('.eache'),'.sale');
	/*分页*/
	var index=0;
	function imgList(showNum){
		$.ajax({
			url:"data/imglist.json",
			type:'GET',
			dataType:'json',
			success:function(res){
				var pageNum=Math.ceil(res.length/showNum);
				//console.log(pageNum);
				$('#pages').pagination(pageNum,{
				num_edge_entries:1,
                num_display_entries:4,
                items_per_page:1,
                next_text:'下一页',
                prev_text:'上一页',
                callback:function(index){
				var html='';
				for(var i=index*showNum;i<(index+1)*showNum;i++){
					if(i<res.length){
						html+='<li  class="slide">';
						html+='<div class="l-wrap">';
						html+='<span class="icon-cx">';
						if(res[i].src){
							html+='<img src="'+res[i].src+'">';
						}
						html+='</span>';
						html+='<div class="pic">';
						html+='<a class="trackref" href="details.html" target="_blank">';
						html+='<img class="lazy" style="display: inline;" src="'+res[i].url+'" alt="'+res[i].title+'" title="'+res[i].title+'" width="210" height="210"/>';
						html+='</a>';
						html+='</div>';
						html+='<div class="price">';
						html+='<span>';
						html+='<span class="p-now">';
						html+='￥<strong>'+res[i].price+'</strong>';
						html+='</span>';
						html+='<span class="p-nor"></span>';
						if(res[i].active){
							html+='<span class="active">'+res[i].active+'</span>';
						}
						html+='</span>';
						html+='</div>';
						html+='<div class="title-c">';
						html+='<a class="trackref" href="#" title="'+res[i].title+'" target="_blank"></a>';
						html+='</div>';
						html+='<div class="comment">';
						html+='<a href="#" target="_blank">'+res[i].comment+'</a>';
						html+='<div class="owner_shop_list">自营</div>';	
						html+='</div>';
						html+='<div class="action">';
						html+='<div class="p-num">';
						html+='<span>';
						html+='<input class="numberInp" value="1" type="text"/>';
						html+='</span><span><a class="p-add">+</a><a class="p-reduce disable">-</a></span></div>';
						html+='<div class="p-btn">';
						html+='<a class="rbuy" id="'+res[i].id+'" href="javacsript:;">加入购物车</a></div>';
						html+='<span class="clear"></span></div></div></li>';
					}//if end
				}//for end
					$('.list-all').html(html);
					$('.slide').mouseover(function(){
						$(this).addClass('curr');
					})
					$('.slide').mouseout(function(){
						$(this).removeClass('curr');
					})
				}
          	})
		   }
		});
	}
	imgList(32);
	weituo($('.list-all'),'.rbuy');
	//console.log($('.n').html())
	var index1=0;
	function iList(showNum){
		$.ajax({
			url:"data/imglist.json",
			type:'GET',
			dataType:'json',
			success:function(res){
				var pageNum=Math.ceil(res.length/showNum);
				if(index1==pageNum-1){
					index1=0;
				}else{
					index1++;
				}
				var html='';
				for(var i=index1*showNum;i<(index1+1)*showNum;i++){
					if(i<res.length){
						html+='<li  class="slide">';
						html+='<div class="l-wrap">';
						html+='<span class="icon-cx">';
						if(res[i].src){
							html+='<img src="'+res[i].src+'">';
						}
						html+='</span>';
						html+='<div class="pic">';
						html+='<a class="trackref" href="../details/details.html" target="_blank">';
						html+='<img class="lazy" style="display: inline;" src="'+res[i].url+'" alt="'+res[i].title+'" title="'+res[i].title+'" width="210" height="210"/>';
						html+='</a>';
						html+='</div>';
						html+='<div class="price">';
						html+='<span>';
						html+='<span class="p-now">';
						html+='￥<strong>'+res[i].price+'</strong>';
						html+='</span>';
						html+='<span class="p-nor"></span>';
						if(res[i].active){
							html+='<span class="active">'+res[i].active+'</span>';
						}
						html+='</span>';
						html+='</div>';
						html+='<div class="title-c">';
						html+='<a class="trackref" href="#" title="'+res[i].title+'" target="_blank"></a>';
						html+='</div>';
						html+='<div class="comment">';
						html+='<a href="#" target="_blank">'+res[i].comment+'</a>';
						html+='<div class="owner_shop_list">自营</div>';	
						html+='</div>';
						html+='<div class="action">';
						html+='<div class="p-num">';
						html+='<span>';
						html+='<input class="numberInp" value="1" type="text"/>';
						html+='</span><span><a class="p-add">+</a><a class="p-reduce disable">-</a></span></div>';
						html+='<div class="p-btn">';
						html+='<a class="rbuy" id="'+res[i].id+'" href="javacsript:;">加入购物车</a></div>';
						html+='<span class="clear"></span></div></div></li>';
					}//if end
				}//for end
					$('.list-all').html(html);
		   }
		});
	}
	$('.prev').click(function(){
		console.log(index);
		if(index1==0){
			index1=0;
			$('.prev').css('background-position','-36px -124px');
			$('.next').css('background-position','-36px -14px');
		}else{
			index1--;
			if(index1==2){
				$('.next').css('background-position','-54px -124px');
			}
		}
		$('.n').html(index1+1);
		iList(32);
	})
	$('.next').click(function(){
		
		if(index1==2){
			$('.next').css('background-position','-54px -124px');
			index1=2;
		}else{
			index1++;
			$('.prev').css('background-position','-18px -14px');
		}
		if(index1==0){
			$('.prev').css('background-position','-36px -124px');
		}
		console.log(index1)
		$('.n').html(index1+1);
		iList(32);
	})

	
/*左侧菜单*/
$('.catitem').click(function(){
	$(this).toggleClass('curr').siblings().removeClass('curr');
})
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



})