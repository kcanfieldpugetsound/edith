	mainCanvas.width = (window.innerWidth / 1.8);
	mainCanvas.height = (window.innerHeight / 1.8);
	objectCanvas.width = (window.innerWidth / 1.825);
	objectCanvas.height = (window.innerHeight / 2.7);
	VECanvas.width = (window.innerWidth / 2.4);
	VECanvas.height = (window.innerHeight/1.06);


	var oCanvasElement = wrapHTMLCanvasToOcanvas(document.getElementById("mainCanvas"), '#FFFFFF');  //get the OCanvas so we can animate
	//addSprite(oCanvasElement, "mario.jpg",100,100,100,100);

	
	window.onresize = function(event) {
    	mainCanvas.width = (window.innerWidth / 1.8);
		mainCanvas.height = (window.innerHeight / 1.8);
		objectCanvas.width = (window.innerWidth / 1.825);
		objectCanvas.height = (window.innerHeight / 2.7);
		VECanvas.width = (window.innerWidth / 2.4);
		VECanvas.height = (window.innerHeight/1.06);

		oCanvasElement = wrapHTMLCanvasToOcanvas(document.getElementById("mainCanvas"), '#FFFFFF');  //get the OCanvas so we can animate
		//addSprite(oCanvasElement, "mario.jpg",100,100,100,100);
	}

	function getCanvas()
	{
		return oCanvasElement;
	}
	
	/**
	Used to call the object creation pop-up window.
	**/
	function popitupObj(url)
	{
		newwindow=window.open(url, "object_creator/ObjectCreation.html", "status = 1, scrollbars =1, height = 600, width = 900");
		if(window.focus){
			newwindow.focus()
		}
		return false;
	}
	
	/**
	Used to call the help pop-up window.
	**/
	function popitupHelp(url)
	{
		newwindow = window.open(url, "height = 500, width = 500");
		if(window.focus){
			newwindow.focus()
		}
		return false;
	}

	
	var projectCode = [];	
	var objectXPOS = 0;//start the image out at the beginning of the object panel
	var objectYPOS = 0;
	firstLoad = true;
	/**
	/Load the pCode (THE ACTUAL DATA THAT WE WANT THAT IS A JSON) and then parse the information in order to manipulate the object images
	/
	**/
	function loadProject() {
		/**
		Visual editor's load function to be integrated into sharing.
		**/

			//loadBlocks(json); 
	
		var objectName = prompt("Please enter the name of your project:");
		
		
		$.getJSON("functions/ObjectLoad.php", {id:objectName}, function(data) {
		
			var unstring = JSON.parse(data.array);
			
				objectXPOS = objectXPOS + 105; //every time we load another object we want to place it to the right of the last object
					if(objectXPOS > 550){ //if we overflow to the right set the position back to the left and make it go down to the next row
						objectXPOS = 0;
						objectYPOS = objectYPOS + 105;
					}
					for( var j=0; j<unstring.length; j++){
						addImage(unstring[j][0], objectXPOS, objectYPOS);
					}
		});
	}
	/**
	/Save the information for save.php to put to the server's database
	/"code:" This needs to be the updated JSON that we are using for everything
	**/
	function save(){
	/**
		Visual editor's save function to be integrated into sharing.
	**/
	if(sorter()) {
		cleanUp(sortArray);
	}
	var projectId = prompt("Please enter the name of the project you are saving to:");
	
	$.ajax({
                                type: "POST",
                                data: {
                                    code: json,
									projectName: projectId
                                },
                                url: "functions/save.php",
								success: function() {
                                    alert("Exported successfully");
                                }
                            });
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
