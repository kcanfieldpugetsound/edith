<?php
//Not finished...
require_once 'dblogin.php';
require_once 'function.php';

$proID = $_GET['id'];

 $selectCode = "SELECT array FROM objectCreator WHERE objectName = $proID";
 $record = mysql_query($selectCode, $conn);

 echo $record;
?>