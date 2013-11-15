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
		<title>Register</title>		
	</head>
	<body onload= "submitForm()">
		<div class = "contentBox2">
			<div id = "contentHeader">
				<form name = "custInfo" id = "custInfo" method = "post" action = "/edith/functions/valUser.php">
					<h2 style="text-align: center;">sign-up<br/></h2>
					username:<input type = "text" size = "25" name = "userName" id="userName"/>
          			password:<input type = "password" size = "25" name = "password" id="password" value = "password"/><br/> <br/>
         			email:<input type = "text" size = "72" name = "eMail" id="eMail" />(optional) <br/> <br/>
				</form>
				<script type='text/javascript'>document.custInfo.submit();</script>  //autosubmits the form
        	</div>
        </div>
     </body>
</html>