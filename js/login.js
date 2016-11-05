$(function(){
	
	$('.loginnav').children().click(function(){
		var index=$(this).index();
		$(this).addClass('curr').siblings().removeClass('curr');
		$('.logincon').children().eq(index).css('display','block');
		$('.logincon').children().eq(index).siblings().css('display','none');
	});
	
	var flag=false;
	/*用户名*/
	$('#loginname').focus(function(){
		$(this).parent().removeClass('border').removeClass('border-error').addClass('border-ok');
		$('#sfbestNameErr').css('display','none').removeClass('error').html('');
	});
	
	$('#loginname').keyup(function(){
		var value=$(this).val();
		if(value){
			flag=true;
			$(this).next().removeClass('icon1').addClass('icon');
		}else{
			flag=true;
		}
	});
	
	$('#loginname').blur(function(){
		$(this).parent().removeClass('border-ok').removeClass('border-error').addClass('border');
	});
	
	
	/*密码*/
	$('#password').focus(function(){
		$(this).parent().removeClass('border').removeClass('border-error').addClass('border-ok');
		$('#sfbestPwdErr').removeClass('error').css('display','none').html('');
		
	});
	
	$('#password').keyup(function(){
		var value=$(this).val();
		if(value){
			flag=true;
			$(this).next().removeClass('icon2').addClass('icon');
		}else{
			flag=false;
		}
	});
	
	$('#password').blur(function(){
		$(this).parent().removeClass('border-ok').removeClass('border-error').addClass('border');
	});
	
	/*验证码*/
	$('#vcode').focus(function(){
		$(this).removeClass('code').removeClass('code-error').addClass('code-ok');
		$('#sfbestCodeErr').removeClass('error1').css('display','none').html('');
	});
	
	
	
	var i=2;
	var arr2=["c8xx","hqyb","xjq3","ecpc","crkb","cj7g","c69v","cqbe","e963","ebme","ym3e","egqj","ebqk","h8rj","ecvr","r7cg","ce8w","ycgm","hgbg"];
	$('#imgcode').click(function(){
		//alert(11);
		$('#imgcode').get(0).src="../images/img-registor/bg0"+i+".jpg";
		i++;
		if(i>=10){
		$('#code_img1').get(0).src="../images/img-registor/img/bg"+i+".jpg";
		}
		if(i==20){
		i=1;
		}
		$('#vcode').html('');
	});
	$('#vcode').blur(function(){
		var val=$(this).val();
		if(val){
			if(val!=arr2[i-2])
			{
				flag=true;
				$('#sfbestCodeErr').addClass('error1').css('display','block').html('验证码错误');
				$('#vcode').removeClass('code').removeClass('code-ok').addClass('code-error');
			}else{
				$(this).removeClass('code-ok').removeClass('code-error').addClass('code');
			}
			
		}else{
			$(this).removeClass('code-ok').removeClass('code-error').addClass('code');
		}
		
	});
	
	$('#btn_sub').click(function(){
		var value=$('#loginname').val();
		var value1=$('#password').val();
		var value2=$('#vcode').val();
		if(flag){
			var userID=$("input[name=username]").val();
	        var psw=$("input[name=password]").val();
	       $.ajax({
	           url:"http://datainfo.duapp.com/shopdata/userinfo.php",
	           type:"POST",
	           data:{
	               status:"login",
	               userID:userID,
	               password:psw
	           },
	           success: function (res) {
	               switch(res){
	                 	 case "0":alert("用户名不存在");break;
	                  	 case "2":alert("用户名密码不符");break;
	                  	 default:$.cookie('username',$('#loginname').val(),{expires:10,path:'/'});
	                  	 window.location.href="index.html";
	                  	 break;
                   
          		}
			}
         })

		}else if(!value){
			$('#sfbestNameErr').addClass('error');
			$('#loginname').parent().removeClass('border').removeClass('border-ok').addClass('border-error');
			$('#sfbestNameErr').css('display','block').html('请输入用户名');
		}
		if(value&&!value1){
			$('#sfbestPwdErr').addClass('error').css('display','block').html('请输入密码');
			$('#password').parent().removeClass('borde').removeClass('border-ok').addClass('border-error');
			
		}
		
		if(value&&value1&&!value2){
			$('#sfbestCodeErr').addClass('error1').css('display','block').html('请输入验证码');
			$('#vcode').removeClass('code').removeClass('code-ok').addClass('code-error');
			
		}
	});
	
})
