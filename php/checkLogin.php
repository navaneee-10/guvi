<?php
    session_start();

    if (isset($_SESSION['Name'])) 
    {    
       echo "{\"name\":\"".$_SESSION['Name']."\"}";
    }
    else
    {
        echo "{\"name\":\"null\"}";
    }
?>