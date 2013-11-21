<?php
//Still needs work...
//Figure out projectID issue...
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
  $proCode = safe($_POST['code']);
  $proName = safe($_POST['projectName']);
  //Checks to see if the user is logged in.
  if($userStatus){
    echo "works";
    //check to see if there is an existing project
    $uID = mysql_query("SELECT userID FROM user WHERE userName ='$uname'") or die (mysql_error());
    $proID = mysql_query("SELECT projectID FROM project WHERE userID ='$uID'") or die (mysql_error());
    $num_rows  = mysql_num_rows($proID);
    if($num_rows > 0){
      echo "works2";
      $proName2 =  mysql_query("SELECT projectName FROM project WHERE projectName ='$proName'") or die (mysql_error());
      $proID2   = mysql_query("SELECT projectID FROM project WHERE projectName ='$proName'") or die (mysql_error());
      $sql = "INSERT INTO projectCode (pCode) VALUES ('$proCode')
      ON DUPLICATE KEY UPDATE pCode=VALUES('$proCode')";
      $results = mysql_query($sql);
      if($result){
            echo "Thanks!";
          }

          else {
            echo "ERROR!";
          }
        }
        else{
          $sql = "INSERT INTO projectCode (pCode) VALUES ('$proCode')";
          $sql2 = "INSERT INTO projec (projectName, userID, dateCreated) VALUES ('$proName', '$uID', NOW())";
          $results = mysql_query($sql);
           $results2 = mysql_query($sql2);
        
        if($results){
            if($results2){
            echo "Thanks!";
            }
            else{
              echo "ERORR!";
            }
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


//Check to see if there is a project for that user with that name
//If true overwrite it
//If false create new space in database
?>
