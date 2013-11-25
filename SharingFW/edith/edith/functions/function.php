<?php
//This is used to prevent users using SQL injections.
function safe($value){ 
   return mysql_real_escape_string($value); 
} 
?>