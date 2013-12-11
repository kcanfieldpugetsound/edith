<?php
//This is used to login to the database in each function. It saves the info in the file rather than writing each time you need to access the database.
//database login.
	$db_hostname = "localhost";
	$db_database = "edith";
	$db_username = "root";
	$db_password = "root";

	//Connect to server.
	$conn = mysql_connect($db_hostname, $db_username, $db_password)
    	or die("Unable to connect to MySQL: " . mysql_error());

    //Select the database.
	mysql_select_db($db_database)
    	or die("Unable to select database: " . mysql_error());
?>