<!-- an HTML form for submitting feedback, including fields for name, email,
and message. Write a PHP script to process the form submission using $_POST
and store the feedback in a database. -->
<?php
   $host  = 'localhost';
   $user = 'root';
   $password = '';
   $database = 'feedbackSubmit';
   
   $conn = new mysqli($host, $user, $password, $database);
   
   if ($conn->connect_error) {
       die("Connection failed" . $conn->connect_error);
   }
   
   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
       $name = $_POST['name'];
       $message = $_POST['message'];
       $stmt = $conn->prepare("INSERT INTO feedbackSubmit(name,message) VALUES (?,?)");
 
       $stmt->bind_param("ss", $name, $message);
   
       if ($stmt->execute()) {
           echo "Feedback submitted successfully";
       } else {
           echo "Error : " . $stmt->error;
       }
   
       $stmt->close();
   }
   
   $conn->close();
?>