//PHP assert addidtions made by Lauren Swanson

//set global variables and test "userstatus"

//Test 1: set "username" = badname
//Test 2: set "password" = badpass

//Global variables make testing different usernames and passwords difficult. Try using local ones so we can test if those work when loggging in. 
//It would also be helpful to make methods in the log-in which take parameters, these would be easier to test
//and those methods could return values, which could also indicate testing success.

//The following assert set-up can be used inside the php code to conduct Test 1 & 2. They are commented out, but they can be implemented
//to ensure databse security and functionality. 


<?php

// Active assert and make it quiet
//assert_options(ASSERT_ACTIVE, 1);
//assert_options(ASSERT_WARNING, 0);
//assert_options(ASSERT_QUIET_EVAL, 1);

//$username = badname;
//$password = badpass;

// Create a handler function
//function my_assert_handler($username, $password)
//{
  //  echo "<hr>Assertion Failed:
   //     Username '$username'<br />
   //     Password '$password'<br />";
//}

// Set up the callback
//assert_options(ASSERT_CALLBACK, 'my_assert_handler');

// Make an assertion that should fail 
//assert('mysql_query("SELECT * FROM user WHERE UserName ='$username'")');
//assert('mysql_query("SELECT * FROM user WHERE Password = sha1('$password')")');



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
        		header("location:/edith/loginPage.php");
			}
			
			//Inform password is wrong and send back to beginning
			else {
				echo "<div>wrong password!</div>";
			}
		}
		//Inform username is wrong and send back to beginning
		else {
			echo "<div>wrong username!</div>";
		} 

?>