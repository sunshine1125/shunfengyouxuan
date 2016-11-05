$(function(){
	
	$('#regper').click(function(){
		$(this).addClass('reg_show');
		$('#regcom').removeClass('reg_show');
		$('#perDiv').css('display','block');
		$('#comDiv').css('display','none');
	
	});
	$('#regcom').click(function(){
		$(this).addClass('reg_show');
		$('#regper').removeClass('reg_show');
		$('#comDiv').css('display','block');
		$('#perDiv').css('display','none');
	
	});
	
	
var arr1=[/^[1]\d{10}$/,/[a-zA-Z0-9_]{5,19}$/];
/*用户名*/
$('#userMam').focus(function(){
	$(this).next().removeClass('regOk');
	$(this).parent().removeClass('defaultBorder').removeClass('errorBorder').addClass('okBorder');
	$(this).parent().next().removeClass('regInput').removeClass('reg_error').addClass('reg_error1');
	var font=$('<font class="f_0">请输入正确的手机号码</font>');
	$(this).parent().next().html(font);
});


$('#userMam').blur(function(){
	var value=$('#userMam').val();
	if(value){
		if(arr1[0].test(value)){
			flag=true;
			$(this).next().addClass('regOk');
			$(this).parent().next().html('');
			$.cookie('username',value,{expires:10,path:'/'});
		}else{
			$(this).parent().removeClass('okBorder').addClass('errorBorder');
			$(this).parent().next().removeClass('reg_error1').addClass('reg_error');
			var font=$('<font class="f_0">请输入正确的手机号码</font>');
			$(this).parent().next().html(font);
		}
	}else{
		$(this).parent().next().html('');
		$(this).parent().removeClass('errorBorder').removeClass('okBorder').addClass('defaultBorder');
	}
	
});

/*密码*/
$('#password').focus(function(){
	$(this).next().removeClass('regOk');
	$(this).parent().removeClass('defaultBorder').removeClass('errorBorder').addClass('okBorder');
	$(this).parent().next().removeClass('regInput').removeClass('reg_error').addClass('reg_error2');
	var font=$('<font class="f_1">6-20位字符，可使用数字、字母、下划线。不建议使用纯数字或字母组合</font>');
	$(this).parent().next().html(font);
	
});
var flag=false;
$('#password').keyup(function(){
	
	var value=$('#password').val();
	if(value.length<=6){
		flag=false;
		$(this).next().removeClass('regOk');
		$('#pwdStrong').find('.em1').removeClass('ok').addClass('default');
		$('#pwdStrong').find('.em2').removeClass('ok').addClass('default');
		$('#pwdStrong').find('.em3').removeClass('ok').addClass('default');
		$(this).parent().next().html('');
		$(this).parent().removeClass('okBorder').addClass('defaultBorder');
		$(this).parent().next().removeClass('regInput').removeClass('reg_error').removeClass('reg_error2');
	}
	if(value.length>6){
		if(!/[a-zA-Z0-9_]$/.test(value)){
			$(this).next().removeClass('regOk');
			$(this).parent().removeClass('defaultBorder').removeClass('okBorder').addClass('errorBorder');
			$(this).parent().next().removeClass('reg_error2').addClass('reg_error');
			var font1=$('<font class="f_1">密码只能为6-20位字母数字下划线组合</font>');
			$(this).parent().next().html(font1);
			flag=false;
		}else{
			flag=true;
			$(this).next().addClass('regOk');
			if(/^(?![^a-zA-Z]+$)(?!\D+$)(?![^_]+$).{5,19}$/.test(value)){
				//alert(111);
				$('#pwdStrong').find('.em1').removeClass('default').addClass('ok');
				$('#pwdStrong').find('.em2').removeClass('default').addClass('ok');
				$('#pwdStrong').find('.em3').removeClass('default').addClass('ok');
				$(this).parent().removeClass('okBorder').addClass('defaultBorder');
				$(this).parent().next().removeClass('regInput').removeClass('reg_error').removeClass('reg_error2');
			}else if(/^[\d]+$/.test(value)||/^[a-zA-Z]+$/.test(value)||/^[_]+$/.test(value)){
				//alert(322);
					$('#pwdStrong').find('.em2').removeClass('ok').addClass('default');
					$('#pwdStrong').find('.em3').removeClass('ok').addClass('default');
					$('#pwdStrong').find('.em1').removeClass('default').addClass('ok');
					$(this).parent().removeClass('errorBorder').removeClass('okBorder').addClass('defaultBorder');
					$(this).parent().next().removeClass('regInput').removeClass('reg_error').addClass('reg_error2');
					$(this).parent().next().html('密码太简单，建议使用数字、字母、下划线组合');
				}else{
						$('#pwdStrong').find('.em1').removeClass('default').addClass('ok');
						$('#pwdStrong').find('.em2').removeClass('default').addClass('ok');
						$('#pwdStrong').find('.em3').removeClass('ok').addClass('default');
						$(this).parent().next().html('');
						$(this).parent().removeClass('errorBorder').removeClass('okBorder').addClass('defaultBorder');
						$(this).parent().next().removeClass('reg_error2').removeClass('reg_error');
					}
		}
	}
	
});

$('#password').blur(function(){
	var value=$('#password').val();
	if(value){
		if(flag){
			$(this).next().addClass('regOk');
			$(this).parent().removeClass('okBorder').addClass('defaultBorder');
			$(this).parent().next().removeClass('regInput').removeClass('reg_error').removeClass('reg_error2');
		}else{
			$(this).parent().removeClass('okBorder').addClass('errorBorder');
			$(this).parent().next().removeClass('reg_error2').addClass('reg_error');
			var font=$('<font class="f_1">密码只能为6-20位字母数字下划线组合</font>');
			$(this).parent().next().html(font);
		}
	}else{
		$(this).parent().next().html('');
		$(this).parent().removeClass('okBorder').addClass('defaultBorder');
		$(this).parent().next().removeClass('regInput').removeClass('reg_error').removeClass('reg_error2');
	}
});
	
	/*确认密码*/
$('#password2').focus(function(){
	$(this).next().removeClass('regOk');
	$(this).parent().removeClass('defaultBorder').removeClass('errorBorder').addClass('okBorder');
	$(this).parent().next().removeClass('regInput').removeClass('reg_error').addClass('reg_error1');
	var font=$('<font class="f_0">请再次输入密码</font>');
	$(this).parent().next().html(font);
});

$('#password2').blur(function(){
	var value1=$('#password').val();
	var value2=$('#password2').val();
	if(value2){
		if(value2==value1){
			flag=true;
			$(this).next().addClass('regOk');
			$(this).parent().next().html('');
		}else{
			$(this).parent().removeClass('okBorder').addClass('errorBorder');
			$(this).parent().next().removeClass('reg_error1').addClass('reg_error');
			var font=$('<font class="f_0">两次输入不一致，请重新输入</font>');
			$(this).parent().next().html(font);
		}
	}else{
		$(this).parent().next().html('');
		$(this).parent().removeClass('errorBorder').removeClass('okBorder').addClass('defaultBorder');
	}
	
});

/*验证码*/
var i=2;
var arr2=["c8xx","hqyb","xjq3","ecpc","crkb","cj7g","c69v","cqbe","e963","ebme","ym3e","egqj","ebqk","h8rj","ecvr","r7cg","ce8w","ycgm","hgbg"];
$('#huan').click(function(){
	//alert(2136);
	//console.log($('#code_img1').get(0).src);
	$('#code_img1').get(0).src="../images/img-registor/bg0"+i+".jpg";
	i++;
	if(i>=10){
	$('#code_img1').get(0).src="../images/img-registor/bg"+i+".jpg";
	}
	if(i==20){
	i=1;
	}
	$('#auth_code').html('');
});
$('#auth_code').focus(function(){
	//alert(111);
	$(this).next().removeClass('regOk1');
	$(this).removeClass('defaultBorder').removeClass('errorBorder').addClass('okBorder');
	$('#auth_codeErr').removeClass('regInput').removeClass('reg_error').addClass('reg_error1');
	var font=$('<font class="f_0">请输入验证码</font>');
	$('#auth_codeErr').html(font);
});

$('#auth_code').keyup(function(){
	var value3=$('#auth_code').val();
	if(value3){
		$(this).removeClass('okBorder').removeClass('errorBorder').addClass('defaultBorder');
		$('#auth_codeErr').removeClass('regInput').removeClass('reg_error').removeClass('reg_error1');
		$('#auth_codeErr').html('');
	
	if(value3.length==4){
		console.log(value3+"=="+arr2[i-2]);
		if(value3==arr2[i-2]){
			flag=true;
			$(this).next().addClass('regOk1');
			$(this).removeClass('okBorder').removeClass('errorBorder').addClass('defaultBorder');
			$('#auth_codeErr').removeClass('regInput').removeClass('reg_error').addClass('reg_error1');
		}
	}else if(value3.length>4){
			i++;
			if(i>=10){
				$('#code_img1').get(0).src="../images/img-registor/bg"+i+".jpg";
			}
			if(i==20){
				i=1;
			}
			$(this).html('');
		}else{
			$(this).next().removeClass('regOk1');
		}
	}
});
$('#auth_code').blur(function(){
	var value3=$('#auth_code').val();
	if(value3){
		if(flag){
			$(this).next().addClass('regOk');
			$('#auth_codeErr').html('');
			$(this).removeClass('errorBorder').removeClass('okBorder').addClass('defaultBorder');
				$('#auth_codeErr').removeClass('regInput').removeClass('reg_error').removeClass('reg_error1');
		}else{
				$(this).removeClass('okBorder').addClass('errorBorder');
				$('#auth_codeErr').removeClass('reg_error1').addClass('reg_error');
				var font=$('<font class="f_0">验证码不正确</font>');
				$('#auth_codeErr').html(font);
		}	
	}else{
		$('#auth_codeErr').html('');
		$(this).removeClass('errorBorder').removeClass('okBorder').addClass('defaultBorder');
		$('#auth_codeErr').removeClass('regInput').removeClass('reg_error').removeClass('reg_error1');
		
	}
	
});

$('#reg_per_data').click(function(){
	if(flag){
		var userID=$("input[name=userMam]").val();
        var psw=$("input[name=password]").val();
       $.ajax({
           url:"http://datainfo.duapp.com/shopdata/userinfo.php",
           type:"POST",
           data:{
               status:"register",
               userID:userID,
               password:psw
           },
           success: function (res) {
               switch(res){
                   case "0":alert("用户名重名，请重新设置");break;
                   case "1":window.location.href="index.html";break;
                   case "2":alert("我们的系统出了一些意外");break;
                   
          		}
			}
         })

	}else{
		$('#userMam').parent().removeClass('defaultBorder').addClass('errorBorder');
		$('#userMamErr').addClass('reg_error');
		$('#userMamErr').html('请输入手机号码');
		$('#password').parent().removeClass('defaultBorder').addClass('errorBorder');
		$('#passwordErr').addClass('reg_error');
		$('#passwordErr').html('请输入登录密码');
		$('#password2').parent().removeClass('defaultBorder').addClass('errorBorder');
		$('#password2Err').addClass('reg_error');
		$('#password2Err').html('请再次输入密码');
		$('#auth_code').removeClass('defaultBorder').addClass('errorBorder');
		$('#auth_codeErr').addClass('reg_error');
		$('#auth_codeErr').html('请输入验证码');
	}
});

	var j=2;
	$('#changeimg').click(function(){
	//alert(2136);
	//console.log($('#code_img1').get(0).src);
	$('#cpycode_img').get(0).src="../images/img-registor/bg0"+j+".jpg";
	j++;
	if(j>=10){
	$('#cpycode_img').get(0).src="../images/img-registor/bg"+j+".jpg";
	}
	if(j==20){
	j=1;
	}
});

});
