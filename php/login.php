<?php

        $servername = "localhost";
        $username = "root";
        $password = "8524941551@Jk";
        $dbname = "user_registry";
        
        $conn = new mysqli($servername, $username, $password);

        mysqli_select_db($conn,$dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $mail = $_GET["mail"];
        $user_password = $_GET["password"];

        $stmt = $conn->prepare("select * from  users where email_id= ? AND password = ?");
        
        $stmt->bind_param('ss',$mail,$user_password);
        
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) 
        {     
            if($row = $result->fetch_assoc()) 
            {
                session_start();     
                $_SESSION['Name']= $row["Name"] ;
                $_SESSION['email_id']= $row["email_id"] ;
                if (isset($_SESSION['Name'])) {
                    echo "{\"login\":\"true\"}";
                }
                else
                {
                    echo "{\"login\":\"false\"}";
                }
            }                      
        } 
        else 
        {
            echo "{\"login\":\"false\" }";
        }
        

?>