<?php
header('Access-Control-Allow-Origin: *');
require_once 'dblogin.php';
require_once 'function.php';

$uName = $_GET['userName'];
$projectID = $_GET['projectId'];

$query = mysql_query("SELECT pCode FROM project WHERE userName = '$uName' AND projectName = '$projectID'");

$result = mysql_fetch_row($query);

echo($result['pCode']);

//echo json_encode($result['pCode']);


?>