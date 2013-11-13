<?php
//This script will load all the user files onto the page

//Login into the database
require_once 'dblogin.php';
require_once 'function.php';

//Find userID to look for projects in project table
$uName = $_POST[userName];
$uID = "SELECT userID FROM user WHERE userName = $uName";

//Select all projects that have that userID.
$selectName = "SELECT projectName FROM project WHERE userID = $uID";
$records = mysql_query($selectName, $conn);

//Select project code with that projectID
$selectID = "SELECT ProjectID FROM project WHERE projectName = $selectName";//Test to see if this works...
$idRecords = mysql_query($selectID, $conn);

//Create a table to display them nicely
echo "<table border = '1' cellpadding = 20 bordercolor = white align = center><tr>";
//The loop to print them out
while ($theRecord = mysql_fetch_row($records) and ($theIDRecord = mysql_fetch_row($idRecords))
{
	echo "<tr>";
	//Go through each project name
    for ($i = 0; $i < count($theRecord); $i++)
    {
    	//Go through each projectID
    	for ($j = 0; $j < count($theIDRecord); $j++)
        {
    		//Print out name of projecht in a link and have the link be the ID of the project to load.
        	echo "<td> <a href= 'load.php?action=add&id=$theIDRecord[j]'>" . $theRecord[$i] . "</a> </td>";
        }
    }
    echo "</tr>" ;
 }
 echo "</table>";
          	

?>