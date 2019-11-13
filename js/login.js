const login = [
{
	"accout"="tmctmc",
	"password"="tmctmc131299"
},
{
	"accout"="northmen",
	"password"="inthedesert"
}
]
	
	
	
function sendData(){
	var accout=document.getElementById("accout").value
    var password=document.getElementById("password").value
	
	var httpr= new XMLHttpRequest();
	httpr.open("POST","./Ito Junji Web/login.php",true);
	httpr.setRequestHeader("","");
	httpr.onreadystatechange=function(){
		if(httpr.readyState==4 && httpr.status==200){
			document.getElementById("response").innerHTML=httpr.responseText;
		}
	}
	httpr.send("accout"+accout+"&password"+password);
}
/*$(document).ready(function(){
   
    $('#password').change(function(){
        var password = $(this).val();	
        if(!validatePassword(password)) {
			$(".passwordError").html("Password must be at least 6 characters");
		} else {
			$(".passwordError").html("");
		}
    });
});*/


	