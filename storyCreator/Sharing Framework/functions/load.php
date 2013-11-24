<?php
//Not finished...
require_once 'dblogin.php';
require_once 'function.php';

$proID = $_GET['id'];

 $selectCode = "SELECT code FROM projectCode WHERE projectID = $proID";
 $record = mysql_query($selectCode, $conn);

 echo $record;
?>