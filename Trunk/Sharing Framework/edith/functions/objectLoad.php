<?php
//make sure the user is logged in
require_once 'dblogin.php';
require_once 'function.php';
$userStatus = false;
  session_start();
  if(isset($_SESSION['userName'])){ //start the cookie session to remember user
    $userStatus=true;
  } 

$test = $_GET['id']; //object id
$uName = $_SESSION['userName']; //look through correct user's objects
$query = mysql_query("SELECT array FROM objectCreator WHERE userName = '$uName' AND objectName = '$test'"); //get a specific object from this user
$result = mysql_fetch_array($query); //store the result in a temp variable
echo(json_encode($result)); //send as a json object to be used in visual editor
?>