<?php
$xml = new DomDocument("1.0","UTF-8");
$xml->formatOutput=true;
$xml->preseveWhiteSpace=false;

echo "<h1> here </h1> "

$xml->load('users.xml');
if(!$xml)
{
    echo "data not found";
}
else{
    $user=$xml->firstChild;
}

if(isset($_POST['btnLogin']))
{
    $femail=$_POST['lemail'];
    $fpwd=$_POST['lpassword'];

    $xml2=simplexml_load_file('users.xml');
    foreach($xml2->user as $user){
        if($user->email==$femail){
            if($user->pwd==$fpwd){
                echo "<h1> got it </h1> "
            }
            else{
                echo "<h1> wrong pwd or email </h1> "
            }
        }
    }
}
?>