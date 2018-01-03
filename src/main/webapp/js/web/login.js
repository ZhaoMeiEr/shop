var path;
$(function(){
	path=$("#path").val();
	$("#commit").click(function(){
		login();
	});
})

function login(){
//	$.ajax({
//		url:"loginHandle/login",
//		data:{username:$("#username").val(),password:$("#password").val()},
//		type:"post",
//		dataType:"json",
//		success:function(data){
//			if(data.state=="success"){
//				window.location.href=path+"/success/";
//			}
//		},
//		error:function(textStatus){
//			alert("请求失败");
//		}
//	})
	Main.requestAjax("loginHandle/login",{username:$("#username").val(),password:$("#password").val()},function(data){
		if(data.state=="success"){
			window.location.href=path+"/success/";
		}else{
			alert("请求失败");
		}
	})
}