<?php
//Still needs work...
//Figure out projectID issue...
require_once 'dblogin.php';
require_once 'function.php';
//check to see if project name exists first with that userID...
$proCode = safe($_POST['code']);
$proName = safe($_POST['projectName'];


echo $proCode;
echo $proName;
mysql_close();
?>
