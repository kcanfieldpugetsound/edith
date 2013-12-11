<?php
	//Open database..
	require_once 'dblogin.php';
	//Protect SQL injections
	require 'function.php';
		//Grab user info from post
    	$username = safe($_POST['userName']);
    	$password = safe($_POST['password']);

		//Check to see if user info is in the database
    	$uName = mysql_query("SELECT * FROM user WHERE UserName ='$username'") or die (mysql_error());
    	$pWord  = mysql_query("SELECT * FROM user WHERE Password = sha1('$password')") or die (mysql_error());
		$num_rows = mysql_num_rows($uName);
		$num_rows2  = mysql_num_rows($pWord);

		//If username is found
		if($num_rows > 0) {
			//If password is found
			if ($num_rows2 > 0) {
				//Log in and set session
				session_start();
        		$_SESSION['userName']=$username;
        		$_SESSION['password']=$password;

       			setcookie("uname", $_SESSION['userName'], time()+60*60*24);
        		setcookie("password", $_SESSION['password'], time()+60*60*24);
        		header("location:/edith/index.html");
			}
			
			//Inform password is wrong and send back to beginning
			else {
				header("location:/edith/loginpage.html");

			}
		}
		//Inform username is wrong and send back to beginning
		else {
			header("location:/edith/loginpage.html");

		} 

?>