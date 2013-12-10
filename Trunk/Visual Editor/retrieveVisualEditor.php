<?php

require_once 'dblogin.php';
require_once 'function.php';

$uName = $_GET['userName'];
$projectID = $_GET['projectId'];

$query = "SELECT pcode fROM project WHERE userName = '$uName' AND projectName = '$projectID'";

$result = mysql_query($query);


echo $result;


?>