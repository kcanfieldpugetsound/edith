<?php
require_once 'dblogin.php';
require_once 'function.php';

$userStatus = false;
  session_start();
  if(isset($_SESSION['userName'])){
    $userStatus=true;
  } 

 $test = $_GET['id'];
$uName = $_SESSION['userName'];


$query = mysql_query("SELECT array FROM objectCreator WHERE userName = '$uName' AND objectName = '$test'");

$result = mysql_fetch_array($query);


echo(json_encode($result));
?>