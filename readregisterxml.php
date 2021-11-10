<?php
$xml = new DomDocument("1.0","UTF-8");
$xml->formatOutput=true;
$xml->preseveWhiteSpace=false;

// $community=$xml->createElement("community");
// $xml->appendChild($community);
// $user=$xml->createElement("user");
// $community->appendChild($user);

// $uname=$xml->createElement("fullName");
// $user->appendChild($uname);
// $dob=$xml->createElement("date_of_birth");
// $user->appendChild($dob);
// echo "<xmp>".$xml->saveXML()."</xmp>";
//     $xml->save("users.xml");


$xml->load('users.xml');
if(!$xml)
{
    $community=$xml->createElement("community");
    $xml->appendChild($community);
}
else{
    $comunity=$xml->firstChild;
}

if(isset($_POST['btnRegister']))
{

    $user=$xml->createElement("user");
    $comunity->appendChild($user);
    $funame=$_POST['Fullname'];
    $fdob=$_POST['dob'];
    $femail=$_POST['Email'];
    $facctype=$_POST['Account_type'];
    $fpwd=$_POST['password'];
    $fcountry=$_POST['country'];
    $fstate=$_POST['State'];
    $faddress=$_POST['Address'];
    $fpin=$_POST['Pin_Code'];

    $uname=$xml->createElement("fullName",$funame);
    $user->appendChild($uname);
    $dob=$xml->createElement("date_of_birth",$fdob);
    $user->appendChild($dob);
    $email=$xml->createElement("email",$femail);
    $user->appendChild($email);
    $acctype=$xml->createElement("account_type",$facctype);
    $user->appendChild($acctype);
    $pwd=$xml->createElement("password",$fpwd);
    $user->appendChild($pwd);
    $country=$xml->createElement("country",$fcountry);
    $user->appendChild($country);
    $state=$xml->createElement("state",$fstate);
    $user->appendChild($state);
    $address=$xml->createElement("address",$faddress);
    $user->appendChild($address);
    $pin=$xml->createElement("pin_code",$fpin);
    $user->appendChild($pin);

    echo "<xmp>".$xml->saveXML()."</xmp>";
    $xml->save("users.xml");
}

?>