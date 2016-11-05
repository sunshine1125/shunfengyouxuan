jQuery.setCookie=function(keyName,keyVal,expDate,path){
		    document.cookie= keyName+"="+keyVal+";expires="
				          +expDate+";path="+path;
				//console.log("cookie is ok ");
		}
jQuery.getCookie=function(keyName){
		   var val="";
		   var cookies = document.cookie;
			 // alert(cookies)
			 //对所有的cookie进行切片，以;+空格 为分隔符
			 var arr = cookies.split("; ");
			 // alert(arr[1]);
			 for(var i=0;i<arr.length;i++){
				 var key = arr[i].split("=")[0];
				 //alert(key);
				 if(key==keyName){
           val=arr[i].split("=")[1];
					 break;
				 }
				 
			 }
		   return val;
		 }
jQuery.removeCookie=function(keyName){
		    //删除cookie ：keyName
				var d= new Date(0);
				//var val = getCookie(keyName);
				//path=/ ? 
				document.cookie= keyName+"=0;expires="+d;
				//document.cookie= "party=abc;expires="+d;
				//console.log(keyName+ " is already deleted");
		 }