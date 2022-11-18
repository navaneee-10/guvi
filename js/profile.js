function onld(){
    var xmlHttp2 = new XMLHttpRequest();
		
	xmlHttp2.open("GET", "./php/profile.php?", true);
	xmlHttp2.send();
	xmlHttp2.responseType="text";
	xmlHttp2.onreadystatechange = function()
    {
	    if (xmlHttp2.readyState==4 && xmlHttp2.status ==200 )
        {
			var obj1 = JSON.parse(xmlHttp2.responseText);
            console.log(obj1.login);
            if(obj1.name!="null"){
                var a =  '<div class="center"> Hello '+obj1.name+'<br><br>'
                        +' Email Id :'+obj1.email_id+' <br><br>'
                        +'Date Of Birth :'+obj1.dob+'<br><br>'
                        +'Contact Number :'+obj1.number+'<br><br>'
                        +'<button id="log_in_button" onclick="home()">Home</button> &nbsp'
                        +'<button id="log_in_button" onclick="logout()">Logout</button></div>';
                document.getElementById("main").innerHTML=a;                
            }			      		
            else{
                window.location.href="./index.html";
            }
		}
	};
}

function home(){
    window.location.href="./index.html";
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