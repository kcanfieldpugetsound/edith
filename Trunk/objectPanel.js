		var objectStage = new Kinetic.Stage({
	    container: 'tabs-1',
	    width: 540,
	    height: 300
	    });

	var layer2 = new Kinetic.Layer();
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

			layer2.add(img);
		 	objectStage.add(layer2);

		 	img.on('click', function() {
	      	if(glow.indexOf(img) >= 0)
	      	{
	      		var x = glow.indexOf(img);
	      		glow.splice(x, 1);
	      		img.setFilterBrightness(0);
	      		layer2.batchDraw();
	      	}
	      	else {
	      		glow.push(img);
	      		img.setFilterBrightness(100);
	      		layer2.batchDraw();
	      	}
	      });

		};
		imgObj.src = src;
	    //console.log(imgObj.src);
	}

	//var imgs = ["mario.jpg", "luigi.jpg", "kitten.png", "mario.jpg", "luigi.jpg", "mario.jpg"];

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

	//addImageArray(imgs);