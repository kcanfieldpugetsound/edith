<?php

		// set up the connection to the server
		$conn = mysql_connect('localhost', 'root', "root")
			or die ("Could not connect to server." . mysql_error());
			echo "Connection successful...<br />";
		mysql_select_db('edith', $conn)
			or die ("Cannot open database." . mysql_error());
			echo "Database open...<br />";

		// Create a new table
		// because this is a demo to be run many times, delete any old copies
		$myQuery = "DROP TABLE IF EXISTS user;";
		mysql_query($myQuery, $conn);
		echo "Creating table 'user'...<br />";



		// Create the table
		$myQuery = "CREATE TABLE user (userID INT AUTO_INCREMENT,
										userName VARCHAR(20),
										password      VARCHAR(50),
										email      VARCHAR(100),
										regDate    DATE,
										PRIMARY KEY(userID)
											)AUTO_INCREMENT = 1";
											
		mysql_query($myQuery, $conn)
			or die("Failed to create table " . mysql_error());
			echo "Table created...<br />";

		$myQuery2 = "DROP TABLE IF EXISTS project;";
		mysql_query($myQuery2, $conn);
		echo "Creating table 'project'...<br />";

		// Create the table
		$myQuery2 = "CREATE TABLE project (projectID  INT AUTO_INCREMENT,
											projectName VARCHAR(20),
											userID  INT,
											dateCreated  DATE,
											PRIMARY KEY(projectID)
												)";   
		mysql_query($myQuery2, $conn)
		or die("Failed to create table " . mysql_error());
		echo "Table created...<br />";

		$myQuery3 = "DROP TABLE IF EXISTS projectCode;";
		mysql_query($myQuery3, $conn);
		echo "Creating table 'projectCode'...<br />";

		// Create the table
		$myQuery3 = "CREATE TABLE projectCode (projectID  INT AUTO_INCREMENT,
												code LONGTEXT,
												PRIMARY KEY(projectID)
													)";   
		
		mysql_query($myQuery3, $conn)
		or die("Failed to create table " . mysql_error());
		echo "Table created...<br />"; 
		
		$myQuery4 = "DROP TABLE IF EXISTS shareProject;";
		mysql_query($myQuery4, $conn);
		echo "Creating table 'shareProject'...<br />";

		// Create the table
		$myQuery4 = "CREATE TABLE shareProject (projectID  VARCHAR(15),
												shareID	  VARCHAR(15),
												PRIMARY KEY(projectID)
													)";   
		
		mysql_query($myQuery4, $conn)
		or die("Failed to create table " . mysql_error());
		echo "Table created...<br />"; 
		
		

		mysql_close($conn);     // close the connection
?>
