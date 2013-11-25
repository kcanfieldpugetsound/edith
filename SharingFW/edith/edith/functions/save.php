<?php
//Still needs work...
require_once 'dblogin.php';
require_once 'function.php';
//check to see if project name exists first with that userID...


//Checks to see if the user is logged in.
$userStatus = false;
  session_start();
  if(isset($_SESSION['userName'])){
    $userStatus=true;
  } 

//If visual editor posts....
  $uname = $_SESSION['userName'];
  $proCode = safe($_POST['ObjectArray']);
  $proName = safe($_POST['ObjectName']);

  //Checks to see if the user is logged in.
  if($userStatus){
    //check to see if there is an existing project
    $proID = mysql_query("SELECT projectName FROM project WHERE userName ='$uname'") or die (mysql_error());
    $num_rows  = mysql_num_rows($proID);
    //If there are multiple projects for that user.
    if($num_rows > 0){
      //delete project if there's one under the same name from current user, then create a new project under that name
      $del =  mysql_query("DELETE FROM project WHERE projectName ='$proName' AND userName = '$uname'") or die (mysql_error());
      //Insert new project code into the database
      $sql = "INSERT INTO project(projectName, pCode, userName, dateCreated) VALUES ('$proName', '$proCode', '$uname', NOW())";
      $results = mysql_query($sql);
      if($results){
            echo "Thanks!";
          }

          else {
            echo "ERROR!";
          }
      }
      //If there is not an existing project create a new entry
      else{
        //Create a new entry in the database
        $sql = "INSERT INTO project(projectName, pCode, userName, dateCreated) VALUES ('$proName', '$proCode', '$uname', NOW())";
        $results = mysql_query($sql);
        if($results){
             echo "Thanks!";
        }

        else {
            echo "ERROR!";
          }
        mysql_close();
    }
  }
  else{
    echo "Please log into save...";
  }
?>
