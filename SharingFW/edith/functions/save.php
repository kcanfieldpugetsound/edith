<?php
//Still needs work...
//Figure out projectID issue...
require_once 'dblogin.php';
require_once 'function.php';
//check to see if project name exists first with that userID...
$proCode = safe($_POST['code']);
$proName = safe($_POST['projectName']);

//Check to see if there is a project for that user with that name
//If true overwrite it
//If false create new space in database

$sql = "INSERT INTO projectCode (pCode) VALUES ('$proCode')";
$results = mysql_query($sql);
        
    		if($result){
          	echo "ERROR!";
      		}

      	else {
        		echo "Thanks!";
      		}
mysql_close();
?>
