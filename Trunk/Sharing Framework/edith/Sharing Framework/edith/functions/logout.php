<?php
    //Delete the session.
	 session_start();

      $userStatus = false;
      if(isset($_SESSION['uname'])){
         $userStatus=true;
      }
    
 
    session_destroy();
    header("location:/edith/loginPage.php");
?> 