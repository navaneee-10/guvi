
var styleElement = document.createElement("style");
function mail_check()
{
    var a =document.getElementById('mail').value;
    var b =document.getElementById('password').value;
    var c =document.getElementById('log_in_button');

    if(a=="")
    {
        document.getElementById('mail_miss').innerHTML='<br></i> Please enter your registered email address or phone no.';
    }
    else{
        document.getElementById('mail_miss').innerHTML='';
    }
    if(a==""||b=="")
    {
        c.disabled=true;
        c.style.cursor="default";
    }
    else{
        c.disabled=false;   
        c.style.cursor="pointer";        
    }
}
function password_check()
{
    var a =document.getElementById('mail').value;
    var b =document.getElementById('password').value;
    var c =document.getElementById('log_in_button');
    if(b=="")
    {
        document.getElementById('password_miss').innerHTML='<br><i class="fa-solid fa-circle-exclamation"></i> Please enter your password';
    }
    else{
        document.getElementById('password_miss').innerHTML='';
    }
    if(a==""||b=="")
    {
        c.disabled=true;
        c.style.cursor="default";
    }
    else{
        c.disabled=false; 
        c.style.cursor="pointer";  
    }
}

function submit(){
	var a =document.getElementById('mail').value;
    var b =document.getElementById('password').value;
    
    var xmlHttp1 = new XMLHttpRequest();
	var param1 = "mail="+a+"&password="+b;	
	xmlHttp1.open("GET", "./php/login.php?"+param1, true);
	xmlHttp1.send();
	xmlHttp1.responseType="text";
	xmlHttp1.onreadystatechange = function()
    {
	    if (xmlHttp1.readyState==4 && xmlHttp1.status ==200 )
        {
			var obj = JSON.parse(xmlHttp1.responseText);
            console.log(obj.login);
            if(obj.login=="true")
            {
                window.location.href="./index.html";
            }	
            else
            {
                document.getElementById('error_login').innerHTML='The Credentials you entered mismatch our record';
            }		      		
		}
	};
}

function showPassword(x)
{
    if(x.className==="fa-solid fa-eye")
    {
        document.getElementById('password').type='text';
        document.getElementById('icn').innerHTML='<i class="fa-solid fa-eye-slash"  onclick="showPassword(this)"></i>';
        
    }
    else if( x.className==="fa-solid fa-eye-slash"){
        document.getElementById('password').type='password';
        document.getElementById('icn').innerHTML='<i class="fa-solid fa-eye"  onclick="showPassword(this)"></i>';
    }
}

function onld(){
    var xmlHttp2 = new XMLHttpRequest();
		
	xmlHttp2.open("GET", "./php/checkLogin.php?", true);
	xmlHttp2.send();
	xmlHttp2.responseType="text";
	xmlHttp2.onreadystatechange = function()
    {
	    if (xmlHttp2.readyState==4 && xmlHttp2.status ==200 )
        {
			var obj1 = JSON.parse(xmlHttp2.responseText);
            console.log(obj1.login);
            if(obj1.login=="true"){
                window.location.href="./index.html";
            }	
            		      		
		}
	};
}

function sign_up(){
    window.location.href="./register.html";
}
function home(){
    window.location.href="./index.html";
}