<?php
//This is used to validate the form when a new user creates an account.
  //Login to the database and prevent SQL injections.
  require_once 'dbLogin.php';
  require 'function.php';
  //Grab user info from the form
  $uname = safe($_POST['userName']);
  $password = safe($_POST['password']);
  $email = safe($_POST['eMail']);
  //Initiate values to see if there are duplicates
  $duplicate = mysql_query("SELECT * FROM user WHERE UserName ='$uname'") or die (mysql_error());
  $duplicate2 = mysql_query("SELECT * FROM user WHERE Email ='$email'") or die (mysql_error());
	$num_rows = mysql_num_rows($duplicate);
	$num_rows2  = mysql_num_rows($duplicate2);
		
      //If the user leaves the username empty ask them to create one
      if (empty($uname)){
          //Prints message asking them to create one
          echo "<div style='text-align: center; color: red;'>please enter name</div>";
      }
      //If the user leaves the password empty ask them to create one
      elseif (empty($password)){
        //Prints message asking them to create one
        echo "<div style='text-align: center; color: red;'>please enter password</div>";
      }

      else{
		  //If the username is taken ask them to make another.
		  if ($num_rows > 0) {
        //Prints message telling them its in use
			   echo "<div style='text-align: center; color: red;'>Error! Username taken!</div>";
		  }

		  elseif ($num_rows2 > 0) {
        //Prints message telling them its in use
			   echo "<div style='text-align: center; color: red;'>Error! Email already in use!</div>";
		  }

      //If the info is not in use and correct save it to the database 
		  else {
        //Write the values given into the database
    		$sql = "INSERT INTO user (userName, password, email, regDate) VALUES ('$uname', sha1('$password'), '$email', NOW())";
    		$results = mysql_query($sql);
        
    		if($result){
          	echo "ERROR!";
      		}

      		else {
        		echo "Thanks!";
      		}
  		  }
      }
   ?>