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
	
	var projectCode = [];	
	/**
	/Load the pCode (THE ACTUAL DATA THAT WE WANT THAT IS A JSON) and then parse the information in order to manipulate the object images
	/
	**/
	function loadProject() {
		/**
		Visual editor's load function to be integrated into sharing.
		**/
		loadBlocks(json); 
		var objectName = prompt("Please enter the name of your project:");
		
		$.getJSON("functions/load.php", {id:objectName}, function(data) {
			var unstring = JSON.parse(data.pCode);
			//console.log("After Parsing with database data -------------"+unstring);
			addImage(unstring[0][0], 300, 150);		
			
			//for(var j = 0; j<data.length; j++){//go through the list of 
			//	addImage(unstring[0][0], 300, 150);		 //get the value out of the two dimensional array at the right spot (the value is the key of the array)
			//}
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
				url: 'Sharing Framework/edith/functions/save.php',
				type: 'POST',
				data: {code: json, projectName: projectId}, //update what the project code (The json that we want to save) and name are
				dataType: JSON,
				success: function(){
						console.log("Succsessful post!");
				},
				error: function(){
						console.log("Failed post!");
				}
		});
	}