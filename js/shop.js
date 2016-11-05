$(function(){
	/*头部*/
$('#Top_out').load('head.html',TopCallback);
function TopCallback(){
	//sc_car();
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
}	

if($.cookie('goods')=='[{'){
		$.cookie('goods','',{expires:-1,path:'/'});
		$.cookie('first',{expires:-1,path:'/'});
		console.log($.cookie('goods'));
		$('.noshop').css('display','block');
		$('.haveshop').css('display','none');
}else{
	
	$('.noshop').css('display','none');
	$('.haveshop').css('display','block');
		sc_msg();
		sc_car();
		
	$('.goshop').click(function(){
		
		window.location.href="index.html";
	});
}


		
	$('.cartclear').click(function(){
		$.cookie('goods','',{expires:-1,path:'/'});
		window.location.href="shop.html";
		
	});
		
	
});


