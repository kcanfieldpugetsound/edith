var theObjectName;
var theObjectMethodName;


	function getProject()
	{	
		if (window.XMLHttpRequest)//requesting from IE7, Firefox, Chrome, Opera, Safari
		{
			xmlhttp=new XMLHttpRequest();
		}
		else//requesting from IE6 or IE5
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				theUserName = xmlhttp.responseText;
			}
		}
		
		xmlhttp.open("GET", "display.php?userName=" + userName, true);//request a display of the user files with the userName
		xmlhttp.send();//send the request to server php page
	}
	
	function getObject(objectName)//using current project get the object from the database using the objectName
	{
		if (objectName=="")//if objectName is empty then there is no object assosciated
		{
			theObjectName = "";
			return;
		}
		
		if (window.XMLHttpRequest)//requesting from IE7, Firefox, Chrome, Opera, Safari
		{
			xmlhttp=new XMLHttpRequest();
		}
		else//requesting from IE6 or IE5
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				theObjectName = xmlhttp.responseText;
			}
		}
		
		xmlhttp.open("GET", "load.php?id=" + objectName, true);//request an object of the user files with the objectName
		xmlhttp.send();//send the request to server php page
	}
	
	function getVEMethod(objectMethodName)//using current object get the VE method for that object (as JSON??????)*******************************
	{
		if (objectMethodName=="")//if objectMethodName is empty then there is no method assosciated
		{
			theObjectMethodName = "";
			return;
		}
		
		if (window.XMLHttpRequest)//requesting from IE7, Firefox, Chrome, Opera, Safari
		{
			xmlhttp=new XMLHttpRequest();
		}
		else//requesting from IE6 or IE5
		{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.onreadystatechange = function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				theObjectMethodName = xmlhttp.responseText;
			}
		}
		
		xmlhttp.open("GET", "display.php?objectMehodName=" + objectMethodName, true);//request the updated VE method for the object
		xmlhttp.send();//send the request to server php page
	}
		
	/*
        $.get( "http://localhost/functions/load.php", 'project_kitten' , function( data ) {//A test get request
          alert(data);
        })

        .fail(function() {
                alert('bad request');
        });
		
	*/