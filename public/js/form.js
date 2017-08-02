//获取4位验证码的函数
var myForm = document.forms["loginForm"];
var numGet=document.getElementById('getNum');
var _password =document.getElementById('password');
var code;
//_password.value=1223;
numGet.onclick=function(){
	code=yanzheng();
	swal({
		title: "区分大小写验证码",
		text:'手机验证码为：'+code,
		type: "success",
		confirmButtonText: "确定"
	});
//	_password.value=yanzheng();
}
function checkForm() {
	//获取form对象
	//获取4个要填入的表单对象
	var user = myForm.user;
	var userValue=user.value;
	if(userValue== '') {
		swal({
			title: "Error!",
			text: "手机号码不能为空",
			type: "error",
			confirmButtonText: "确定"
		});
		return false;
	}
	if(!(/^1[34578]\d{9}$/.test(userValue))){ 
        swal({
			title: "Error!",
			text: "请输入手机号码格式",
			type: "error",
			confirmButtonText: "确定"
		});  
        return false; 
    } 
	if(_password.value == '') {
		swal({
			title: "Error!",
			text: "验证码不能为空",
			type: "error",
			confirmButtonText: "确定"
		});
		return false;
	}else if(_password.value!=code){
		swal({
			title: "Error!",
			text: "请输入正确的验证码",
			type: "error",
			confirmButtonText: "确定"
		});
		return false;
	}
}
function yanzheng(){
	var i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var result="";
	for(var j=0;j<4;j++){
		result+=i[parseInt(Math.random()*i.length)];
	}			
	return result;	
}