<?php
//Still needs work...
require_once 'dblogin.php';
require_once 'function.php';
//check to see if objectCreator name exists first with that userID...


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
    $proID = mysql_query("SELECT objectName FROM objectCreator WHERE userName ='$uname'") or die (mysql_error());
    $num_rows  = mysql_num_rows($proID);
    //If there are multiple projects for that user.
    if($num_rows > 0){
      //delete project if there's one under the same name from current user, then create a new project under that name
      $del =  mysql_query("DELETE FROM objectCreator WHERE ObjectName ='$proName' AND userName = '$uname'") or die (mysql_error());
      //Insert new project code into the database
      $sql = "INSERT INTO objectCreator(objectName, array, userName, dateCreated) VALUES ('$proName', '$proCode', '$uname', NOW())";
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
        $sql = "INSERT INTO objectCreator
      (ObjectName, array, userName, dateCreated) VALUES ('$proName', '$proCode', '$uname', NOW())";
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
