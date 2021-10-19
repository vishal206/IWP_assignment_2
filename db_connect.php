<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname="iwpassignment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// echo "<h2>Connected successfully<h2>";

//inserting data fom the form
if(isset($_POST["btnRegister"]))
{
$name=$_POST["Fullname"] ?? "";
$dob=$_POST["dob"] ?? "";
$email=$_POST["Email"] ?? "";
$pwd=$_POST["password"] ?? "";
$country=$_POST["country"] ?? "";
$state=$_POST["State"] ?? "";
$address=$_POST["Address"] ?? "";
$pin=$_POST["Pin_Code"] ?? "";
$acctype=$_POST["Account_type"] ?? "";
$notification=$_POST["notification"];
$notify="";
foreach($notification as $noti){
  $notify.=$noti;
}


$sql="INSERT INTO userinfo (username,dob,email,acctype,password,country,state,address,pincode,notification)
VALUES ('$name','$dob','$email','$acctype','$pwd','$country','$state','$address','$pin','$notify')";

if($conn->query($sql)===TRUE){
  echo "New record created successfully";
}else{
  echo "Error:" .$sql."<br>".$conn->error;
}
}

if(isset($_POST["btnLogin"])){
  $email=$_POST["lemail"];
  $pwd=$_POST["lpassword"];

  echo "its login :".$email." ".$pwd;
}

?>