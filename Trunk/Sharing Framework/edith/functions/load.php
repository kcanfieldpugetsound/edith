<?php
//Logs onto the database
require_once 'dblogin.php';
//Prevetns SQL injections
require_once 'function.php';

//Gets the login information for the user currently logged in
$userStatus = false;
  session_start();
  if(isset($_SESSION['userName'])){
    $userStatus=true;
  } 

//sets the variable to the id past in from previous page
$test = $_GET['id'];
//Sets the the variable to the name of the user currently logged in
$uName = $_SESSION['userName'];

//Goes through the database to select the code that matches the username and project id
$query = mysql_query("SELECT pCode FROM project WHERE userName = '$uName' AND projectName = '$test'");

//Stores the code into the variable
$result = mysql_fetch_array($query);

//prints it out in json for the caller to parse it.
echo(json_encode($result));

?>