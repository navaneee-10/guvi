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

        $mail = $_GET["email_id"];
        $user_password = $_GET["password"];
        $number = $_GET["number"];
        $name = $_GET["Name"];
        $dob = $_GET["dob"];

        $stmt = $conn->prepare("select * from  users where email_id = ? ");
        
        $stmt->bind_param('s',$mail);
        
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) 
        { 
            echo "{\"match\":\"true\",\"message\":\"Email already Exist\"}";           
        }
        else 
        {
            $stmt1 = $conn->prepare("select * from  users where number = ? ");        
            $stmt1->bind_param('s',$number);            
            $stmt1->execute();
            $result1 = $stmt1->get_result();

            if ($result1->num_rows > 0)             
            { 
                echo "{\"match\":\"true\",\"message\":\"Phone Number already Exist\"}";           
            }
            else
            {
                $stmt2 = $conn->prepare("INSERT INTO users (email_id, password , Name, number , DOB) VALUES (?, ?, ? , ? ,?)");
                $stmt2->bind_param("sssss",$mail, $user_password, $name, $number, $dob );
                $stmt2->execute();

                echo "{\"match\":\"false\" ,\"message\":\"success\"}";
            }
            
            
        }
        

?>