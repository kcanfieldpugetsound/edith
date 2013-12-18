<?php
    //Delete the session.
	 session_start();

      $userStatus = false;
      if(isset($_SESSION['uname'])){
         $userStatus=true;
      }
    
    //Destroys the current session for the user logged in
    session_destroy();
    header("location:/edith/loginPage.php");
?> 