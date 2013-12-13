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
		<title>Login</title>		
	</head>
	<body>
		<div class = "contentBox2">
			<div id = "contentHeader">
			<?php 
			if($userStatus){
					echo "logged in!";
					echo "<a href='functions/logout.php'>Logout</a>";
				}
				else{
					echo '
				<form name = "login" id = "login" method = "post" action = "/edith/functions/login.php">
					<h2 style="text-align: center;">login<br/></h2>
					username:<input type = "text" size = "25" name = "userName" id="userName" />
          			password:<input type = "password" size = "25" name = "password" id="password" /><br/> <br/>
         			<input type="submit" value="Go!">
				</form>';
				}
				?>
        	</div>
        </div>
        </body>
        </html>
