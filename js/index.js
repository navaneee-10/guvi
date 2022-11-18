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
            if(obj1.name!="null"){
                var a =  '<div class="center"> Welcome Back <br>'+obj1.name+'<br><br><br><br> To See ur Profile Details click below <br><br>'
                        +'<button id="log_in_button" onclick="profile()">Profile</button><br><br>'
                        +'<button id="log_in_button" onclick="logout()">Logout</button></div>';
                document.getElementById("main").innerHTML=a;
                
            }			      		
		}
	};
}

function sign_up(){
    window.location.href="./register.html";
}
function log_in(){
    window.location.href="./login.html";
}
function profile(){
    window.location.href="./profile.html";
}
function logout(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "./php/logout.php?", true);
	xmlHttp.send();
	xmlHttp.responseType="text";
	xmlHttp.onreadystatechange = function()
    {
	    if (xmlHttp.readyState==4 && xmlHttp.status ==200 )
        {
            window.location.replace("./index.html");
        }			      		

	}; 
}