<?php  
	//For cookie session...
	$userStatus = false;
    session_start();
    if(isset($_SESSION['userName'])){
    	$userStatus=true;
    } 
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />		
		<title>project</title>		
	</head>
	<body>
		<div class = "contentBox2">
			<div id = "contentHeader">
				<form name = "codeInfo" id = "codeInfo" method = "post" action = "/edith/functions/save.php">
					username:<input type = "text" size = "25" name = "code" id="code" />
          			password:<input type = "text" size = "25" name = "projectName" id="projectName" /><br/> <br/>
         			<input type="submit" value="Go!">
				</form>
        	</div>
        </div>
   </body>
</html>