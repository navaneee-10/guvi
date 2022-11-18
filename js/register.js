
var styleElement = document.createElement("style");

function mail_check()
{   
    var a =document.getElementById('mail').value;
    var b =document.getElementById('password1').value;
    
    var c =document.getElementById('sign_up_button');
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;   
    
    var g = document.getElementById("mail_miss");    
 
   if(a == "" || !regEmail.test(a))
   {
       if(a == "" )
       { 
           g.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please enter your email id ';           
       }
       else 
       {
           if(!regEmail.test(a))
           {
              g.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please a valid email id in format like xyz@abc.co';
           }
       }
       c.disabled=true;
       c.style.cursor="default";
   }  
   else{
        g.innerHTML='';
        c.disabled=false;   
        c.style.cursor="pointer";
   }
 
    
}
function num_check()
{   
    var a =document.getElementById('mail').value;
    var b =document.getElementById('password1').value;
    var d =document.getElementById('password2').value;
    var c =document.getElementById('sign_up_button');
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;
    var f =!(b.match(/[a-z]/g) && b.match(/[A-Z]/g) && b.match(/[0-9]/g) && b.match(/[^a-zA-Z\d]/g) && b.length >= 8 );
    var e=document.getElementById("name").value;
    var h = document.getElementById("num_miss");
    var l =document.getElementById('phone_no').value;
    var m=document.getElementById("dob").value;
 
   if(l== "" || !(regPhone.test(l)))
   {
       if(l == "" )
       { 
           h.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please enter your Phone no. ';           
       }
       else 
       {
           if(!(regPhone.test(l)))
           {
              h.innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please a valid phone number, Should be 10 digits';
           }
       }
   }  
   else{
    h.innerHTML='';
   }
   if(a==""||b==""||d==""||b!=d||!(regEmail.test(a))||!(regPhone.test(l))||f||e==""||m==""||l=="")
    {
        c.disabled=true;
        c.style.cursor="default";   
    }
    else{
        c.disabled=false;   
        c.style.cursor="pointer"; 
       
    }    
}

function name_check()
{   
    var a =document.getElementById('mail').value;
    var l =document.getElementById('phone_no').value;
    var b =document.getElementById('password1').value;
    var d =document.getElementById('password2').value;
    var c =document.getElementById('sign_up_button');
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;
    var f =!(b.match(/[a-z]/g) && b.match(/[A-Z]/g) && b.match(/[0-9]/g) && b.match(/[^a-zA-Z\d]/g) && b.length >= 8 );
    var e=document.getElementById("name").value;
    var l =document.getElementById('phone_no').value;
    var m=document.getElementById("dob").value;

    if(a==""||b==""||d==""||b!=d||!(regEmail.test(a))||!(regPhone.test(l))||f||e==""||m==""||l=="")
    {
       c.disabled=true;
       c.style.cursor="default";
    }
    else{
       c.disabled=false;   
       c.style.cursor="pointer";
    }
  
    if(e=="")
    {
        document.getElementById('name_miss').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please enter your Name ';
    }  
    else{
        document.getElementById('name_miss').innerHTML='';
    }
     
}
function dob_check()
{   
    var a =document.getElementById('mail').value;
    var l =document.getElementById('phone_no').value;
    var b =document.getElementById('password1').value;
    var d =document.getElementById('password2').value;
    var c =document.getElementById('sign_up_button');
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;
    var f =!(b.match(/[a-z]/g) && b.match(/[A-Z]/g) && b.match(/[0-9]/g) && b.match(/[^a-zA-Z\d]/g) && b.length >= 8 );
    var e=document.getElementById("name").value;
    var m=document.getElementById("dob").value;
    var l =document.getElementById('phone_no').value;
    
   
    if(a==""||b==""||d==""||b!=d||!(regEmail.test(a))||!(regPhone.test(l))||f||e==""||m==""||l=="")
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
   var b =document.getElementById('password1').value;
   var d =document.getElementById('password2').value;
   var c =document.getElementById('sign_up_button');
   var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
   var regPhone=/^\d{10}$/;
   var e=document.getElementById("name").value;
   var f =!(b.match(/[a-z]/g) && b.match(/[A-Z]/g) && b.match(/[0-9]/g) && b.match(/[^a-zA-Z\d]/g) && b.length >= 8 );
   var l =document.getElementById('phone_no').value;
   var m=document.getElementById("dob").value;

   if( b==""|| f)
   {
       if(b=="")
           document.getElementById('password_miss').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Please enter your password';
       else
           document.getElementById('password_miss').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> A password is correct if it contains:<ul><li>At least 1 uppercase character.</li><li>At least 1 lowercase character.</li><li>At least 1 digit.</li><li>At least 1 special character.</li><li>Minimum 8 characters.</li></ul>';
   }
   else{
       document.getElementById('password_miss').innerHTML='';
   }

   if(b!=d || d=="")
   {
       if(d=="")
       { 
         document.getElementById('password_mismatch').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Enter the password again ';  
       }
       else if(b!=d)
       {
           document.getElementById('password_mismatch').innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Password mismatch with above entry';
       }
   }
   else{
       document.getElementById('password_mismatch').innerHTML='';
   }

   if(a==""||b==""||d==""||b!=d||!(regEmail.test(a))||!(regPhone.test(l))||f||e==""||m==""||l=="")
   {
       c.disabled=true;
       c.style.cursor="default";
   }
   else{
       c.disabled=false;   
       c.style.cursor="pointer";
   }
}

function log_in(){
   window.location.href="./login.html";
}
function home(){
    window.location.href="./index.html";
}

function showPassword1(x)
{
   if(x.className==="fa-solid fa-eye")
   {
       document.getElementById('password1').type='text';
       document.getElementById('icn1').innerHTML='<i class="fa-solid fa-eye-slash"  onclick="showPassword1(this)"></i>';
       
   }
   else if( x.className==="fa-solid fa-eye-slash"){
       document.getElementById('password1').type='password';
       document.getElementById('icn1').innerHTML='<i class="fa-solid fa-eye"  onclick="showPassword1(this)"></i>';
   }
}

function showPassword2(x)
{
   if(x.className==="fa-solid fa-eye")
   {
       document.getElementById('password2').type='text';
       document.getElementById('icn2').innerHTML='<i class="fa-solid fa-eye-slash"  onclick="showPassword2(this)"></i>';
       
   }
   else if( x.className==="fa-solid fa-eye-slash"){
       document.getElementById('password2').type='password';
       document.getElementById('icn2').innerHTML='<i class="fa-solid fa-eye"  onclick="showPassword2(this)"></i>';
   }
}

function submit()
{
   var a =document.getElementById('mail').value;
   var b =document.getElementById('password1').value;
   var e=document.getElementById("name").value;
   var f=document.getElementById("dob").value;
   var n=document.getElementById("phone_no").value;

   var xmlHttp1 = new XMLHttpRequest();
   var param1 = "email_id="+a+"&password="+b+"&Name="+e+"&dob="+f+"&number="+n;
   
   xmlHttp1.open("GET", "./php/register.php?"+param1, true);
   xmlHttp1.send();
 
   xmlHttp1.onreadystatechange = function(){
       if (xmlHttp1.readyState==4 && xmlHttp1.status ==200 ){           
           var obj = JSON.parse(xmlHttp1.responseText);
           if(obj.match=="true")
           {
                document.getElementById("error_login").innerHTML=obj.message+". Try <a href=\"./login.html\">Login</a>";
           }           
           else
           {
                alert("Account Created successfully");
                window.location.href="./login.html"
           }
             
       }
   };
   
}
