		var objectStage = new Kinetic.Stage({
	    container: 'tabs-1',
	    width: 540,
	    height: 300
	    });

	var objectLayer= new Kinetic.Layer();
	var glow = [];
	var curImgs = [];


	  function addImage(src, theX, theY)
	  {
	  		var imgObj = new Image();
			imgObj.onload = function() {
			  var img = new Kinetic.Image({
			    x: theX,
			    y: theY,
			    image: imgObj,
			    name: src, //This is necessary to get name of image (Visual editor)
			    width: 100,
			    height: 100,
			    listening: true,
			    filter: Kinetic.Filters.Brighten,
 				filterBrightness: 0
			  });

			objectLayer.add(img);
		 	objectStage.add(objectLayer);

		 	img.on('click', function() {
	      	if(glow.indexOf(img) >= 0)
	      	{
	      		var x = glow.indexOf(img);
	      		glow.splice(x, 1);
	      		img.setFilterBrightness(0);
	      		objectLayer.batchDraw();
	      	}
	      	else {
	      		glow.push(img);
	      		img.setFilterBrightness(100);
	      		objectLayer.batchDraw();
	      	}
	      });

		 	img.on('dblclick', function() {
		xpos2 = prompt("Please enter desired x-coordinate of object.","");
        while (numberPositiveRegex.test(xpos2) == false){
          alert("Please input numbers only.")
          xpos2 = prompt("Please enter desired x-coordinate of object.","");
        }
        ypos2 = prompt("Please enter desired y-coordinate of object.","");
        while (numberPositiveRegex.test(ypos2) == false){
          alert("Please input numbers only.")
          ypos2 = prompt("Please enter desired y-coordinate of object.","");
        }
        		xpos2 = parseInt(xpos2);
        		ypos2 = parseInt(ypos2);
	      		addSprite(oCanvasElement, img.getName() , img.attrs.width, img.attrs.height, xpos2, ypos2);
	      	});

		};
		imgObj.src = src;
	    //console.log(imgObj.src);
	}

	var imgs = ["mario.jpg", "luigi.jpg", "kitten.png", "mario.jpg", "luigi.jpg", "mario.jpg"];

	function addImageArray(theArray)
	{
		var x = 100;
		var y = 50;
		for(var i = 0; i < theArray.length; i++)
		{
		  addImage(theArray[i], x, y);
		  if(x > 300)
		  {
		  	x = 100;
		  	y += 100;
		  }
		  else
		  {
		  x += 100;
		  }
		}

	}

	function getGlowingObjects()
	{
		return glow;
	}

	addImageArray(imgs);