<?php
//This script will load all the user files onto the page

require_once 'dblogin.php';
require_once 'function.php';

//Checks to see if the user is logged in.
$userStatus = false;
  session_start();
  if(isset($_SESSION['userName'])){
    $userStatus=true;
  } 


//Select all projects that have that userID.
$uname = $_SESSION['userName'];
//$uID = mysql_query("SELECT userName FROM project WHERE userName ='$uname'") or die (mysql_error());
$selectName = mysql_query("SELECT projectName FROM project WHERE userName = '$uname'")  or die (mysql_error());

//Create a table to display them nicely
echo "<table border = '1' cellpadding = 15 bordercolor = white align = center><tr>";
//The loop to print them out
//while($theRecord = mysql_fetch_row($selectName)){


while($theRecord = mysql_fetch_array($selectName)){
	echo "<tr>";
	//Go through each project name
   for($i = 0; $i < count($theRecord); $i++){
    	//Go through each projectID
        	echo "<td> <a href= 'load.php?action=add&id=$theRecord[$i]'>".$theRecord[$i]."</a> </td>";
        }
         echo "</tr>" ;
 }
 echo "</table>";
          	

?>