<?php
$xml = new DomDocument("1.0","UTF-8");
$xml->formatOutput=true;
$xml->preseveWhiteSpace=false;

$xml->simplexml_load_file('welcomedata.xml');
$fmain=$welcome->maintext;
$fdiscord=$welcome->discord;

?>