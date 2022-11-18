<?php
    session_start();

    if (isset($_SESSION['Name'])) 
    {    
        $mail = $_SESSION['email_id'];

        $servername = "localhost"; 
        $username = "root";
        $password = "8524941551@Jk";
        $dbname = "user_registry";
        
        $conn = new mysqli($servername, $username, $password);

        mysqli_select_db($conn,$dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $stmt = $conn->prepare("select * from  users where email_id= ? ");
        
        $stmt->bind_param('s',$mail);
        
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) 
        {     
            if($row = $result->fetch_assoc()) 
            { 
                
                echo "{\"name\":\"".$_SESSION['Name']."\",\"email_id\": \"". $row["email_id"]."\", \"dob\":\"". $row["DOB"]."\",\"number\":\"". $row["number"]."\"}";
                
            }                
        } 
        else
        {
            echo $mail;
        }

    }
    else
    {
        echo "{\"name\":\"null\"}";
    }

?>