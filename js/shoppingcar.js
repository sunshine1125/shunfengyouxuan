//var arr1=[];
function weituo(father,son){
	father.on('click',son,function(){
		//购物车数量增加;
		var id = this.id
		//console.log(id);
		var first = $.cookie('goods')==null?true:false;//判断是否有cookie进行添加
		var same = false;//判断时候已经追加
		//是否是第一次添加
		if(first){
			//第一次添加,建立json结构。
			$.cookie('goods','[{id:'+id+',num:1}]',{expires:10,path:'/'});
			$.cookie('first','false',{expires:10,path:'/'});
			//arr1.push(id);
			//$.cookie('thing','arr1',{expires:10,path:'/'})
			
		}else{
			var str = $.cookie('goods');
			var arr = eval(str);
			//遍历所有对象。如果id相同，让该商品数量递增 ;
			for(var attr in arr){
				if(arr[attr].id == id){		
					arr[attr].num = arr[attr].num + 1;  //让json结构中num自增。
					var cookieStr = JSON.stringify(arr);//将json对象转换成字符串.
					$.cookie('goods',cookieStr,{expires:10,path:'/'});
					same = true;
				}
			}
			//如果id不同，重新建立商品对象;
			
			if(!same){
				var obj  = {id:id,num:1};
				arr.push(obj);
				//arr1.push(id);
				var cookieStr = JSON.stringify(arr);
				$.cookie('goods',cookieStr,{expires:10,path:'/'});
			}
		}
		sc_car();
		
		$('.cart-wrap').css('display','block');
		$('.cart-list').stop().animate({
			'right':'0'
		},1000,function(){
			
			//$('.cart-wrap').css('display','none');
			$('.cart-list').stop().animate({
			
				'right':'-101%'
			},1000);
		})
		
	})
}
	//购物车;
	function sc_car(){
		var sc_str = $.cookie('goods');
		if(sc_str){//如果购物车cookie不为空。
			var sc_obj = eval(sc_str);
			var sc_num = 0 ; 
			for(var i in sc_obj){
				sc_num = Number(sc_obj[i].num) + sc_num;
			}
			$('#cartNum').html(sc_num);
			$('#listCartNum').html(sc_num);
			$('#add-num').html(sc_num);
			$('.s-cart-num').html(sc_num);
			$('#scartNum').html(sc_num);
			$('#listCartNum1').html(sc_num);
			
			sc_msg();
		}
		
	}
		
	function sc_msg(){
		$.ajax({
			url:'data/shoppingcar.json',
			type:'GET',
			success:function(res){
				var sc_str = $.cookie('goods');
				if(sc_str){
					$('.noshop').css('display','none');
					$('.haveshop').css('display','block');
					var sc_obj = eval(sc_str);
					var sc_num = 0 ;
					var html = '';
					var phtml='';
					var shtml='';
					var price=0;
					for(var i in sc_obj){
						price+=parseInt(res[sc_obj[i].id].price)*sc_obj[i].num;
					}
					for(var i in sc_obj){	
						html+= '<li>';
						html+='<div class="l">';
						html+='<a href="details.html" target="_blank">';
						html+='<img src="'+res[sc_obj[i].id].url+'"/>';
						html+='</a>';
						html+='</div>';
						html+='<div class="c">';
						html+='<a href="#" title="'+res[sc_obj[i].id].title+'" alt="'+res[sc_obj[i].id].title+'" target="_blank">'+res[sc_obj[i].id].title+'</a>';
						html+='</div>';
						html+='<div class="r">';
						html+='<font>'+res[sc_obj[i].id].price+'</font>';
						html+='*'+sc_obj[i].num+'';
						html+='<br/>';
						html+='<a class="delgoods" id="'+res[sc_obj[i].id].id+'" href="javascript:;">删除</a>';
						html+='</div>';
						html+='</li>';
						
						phtml+= '<li>';
						phtml+='<div class="l">';
						phtml+='<a href="details.html" target="_blank">';
						phtml+='<img src="'+res[sc_obj[i].id].url+'"/>';
						phtml+='</a>';
						phtml+='</div>';
						phtml+='<div class="c">';
						phtml+='<a href="#" title="'+res[sc_obj[i].id].title+'" alt="'+res[sc_obj[i].id].title+'" target="_blank">'+res[sc_obj[i].id].title+'</a>';
						phtml+='</div>';
						phtml+='<div class="r">';
						phtml+='<font>'+res[sc_obj[i].id].price+'</font>';
						phtml+='*'+sc_obj[i].num+'';
						phtml+='<br/>';
						//phtml+='<a class="delgoods" id="'+res[sc_obj[i].id].id+'" href="javascript:;">删除</a>';
						phtml+='</div>';
						phtml+='</li>';
						
						shtml+='<div class="cartPInfo">';
						shtml+='<div class="clearit">';
						shtml+='<div class="pItem pCheckbox">';
	  	  				shtml+='<input name="cart_list" class="putong" value="danjian-0-8791" checked="" type="checkbox">';
						shtml+='</div>';
						shtml+='<div class="pItem pGoods">';
						shtml+='<div class="cart_pimg">';
						shtml+='<a target="_blank" title="'+res[sc_obj[i].id].title+'" href="details.html"><img src="'+res[sc_obj[i].id].url+'" width="60" height="60"></a>';
						shtml+='</div>';
						shtml+='<div class="cart_pname">'
						shtml+='<div>';
						shtml+='<a target="_blank" href="#">'+res[sc_obj[i].id].title+'</a>';
						shtml+='</div>';
						shtml+='</div>';
						shtml+='</div>';
						shtml+='<div class="pItem pPrice">';
						shtml+='<div style="position:relative;">';
						shtml+='<strong>'+res[sc_obj[i].id].price+'</strong>';
						shtml+='</div></div>';
						shtml+='<div class="pItem pPromotion"></div>';
						shtml+='<div class="pItem pQquantity">';
						shtml+='<div class="cartAmount">';
						shtml+='<a href="javascript:void(0);" class="cartCountBtn">-</a>'
						shtml+='<input value="'+sc_obj[i].num+'" class="amount" id="amountdanjian-0-8791" name="amount" type="text">';
						shtml+='<a href="javascript:void(0);" class="cartCountBtn">+</a>';
						shtml+='<input id="amountsdanjian-0-8791" value="1" type="hidden">';
						shtml+='</div></div>';
						shtml+='<div class="pItem pWeight">';
						shtml+='1.1kg<br>';
						shtml+='</div>';
						shtml+='<div class="pItem pSubtotal">';
						shtml+='<span id="total_price">'+res[sc_obj[i].id].price+'</span>';
						shtml+='</div>';
						shtml+='<div class="pItem pInventory">现货</div>';
						shtml+='<div class="pItem pOperator">';
						shtml+='<div style="display:none;" class="getfavok" id="getfavok8791">商品收藏成功</div>';
						shtml+='<a  href="javascript:void(0);">收藏</a>&nbsp;&nbsp;';
						shtml+='<a  class="del" id="'+res[sc_obj[i].id].id+'"  href="javascript:void(0)">删除</a>';
						shtml+='</div>';
						shtml+='</div>';
						shtml+='</div>';
					}
					$('#tEvent').html(phtml);
					$('#tEvent1').html(html);
					
					$('.cartItem').html(shtml);
					
					//$('#tEvent').find('.delgoods').click(del);
					$('#tEvent1').find('.delgoods').click(del);
					function del(){
						var str=$.cookie('goods');
						var obj=eval(str);
						var num=0;
						var arr1=str.split('},{');
						console.log($(this).get(0).id);
						for(var i=0;i<obj.length;i++){
							num++;
							if(obj[i].id==$(this).get(0).id){
								break;
							}
						}
						if((num-1)==0){
							var arr4=arr1.splice(num-1,1);
							var str2=arr1.toString();
							var arr2=arr1.join('},{');
							var str3="[{"+arr2;
							$.cookie('goods',str3,{expires:10,path:'/'});
						}else if((num-1)==obj.length-1){
							var arr4=arr1.splice(num-1,1);
							var str2=arr1.toString();
							var arr2=arr1.join('},{');
							var str3=arr2+"}]";
							$.cookie('goods',str3,{expires:10,path:'/'});
						}else{
							var arr4=arr1.splice(num-1,1);
							var str2=arr1.toString();
							var arr2=arr1.join('},{');
							$.cookie('goods',arr2,{expires:10,path:'/'});
						}
						console.log($.cookie('goods'));
						window.location.reload(true);
					}
					
					
					$('.del').click(function(){
						var str=$.cookie('goods');
						var obj=eval(str);
						var num=0;
						var arr1=str.split('},{');
						console.log($(this).get(0).id);
						for(var i=0;i<obj.length;i++){
							num++;
							if(obj[i].id==$(this).get(0).id){
								break;
							}
						}
						if((num-1)==0){
							var arr4=arr1.splice(num-1,1);
							var str2=arr1.toString();
							var arr2=arr1.join('},{');
							var str3="[{"+arr2;
							$.cookie('goods',str3,{expires:10,path:'/'});
						}else if((num-1)==obj.length-1){
							var arr4=arr1.splice(num-1,1);
							var str2=arr1.toString();
							var arr2=arr1.join('},{');
							var str3=arr2+"}]";
							$.cookie('goods',str3,{expires:10,path:'/'});
						}else{
							var arr4=arr1.splice(num-1,1);
							var str2=arr1.toString();
							var arr2=arr1.join('},{');
							$.cookie('goods',arr2,{expires:10,path:'/'});
						}
						console.log($.cookie('goods'));
						window.location.href='shop.html';
					})
					
					
				}else{
					$('.noshop').css('display','block');
					$('.haveshop').css('display','none');
				}
			}
		})
	
	
	}
	
	
		