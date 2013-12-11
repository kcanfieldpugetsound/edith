		var stage = new Kinetic.Stage({
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
			    width: 100,
			    height: 100,
			    listening: true,
			    filter: Kinetic.Filters.Brighten,
 				filterBrightness: 0
			  });

			layer2.add(img);
		 	stage.add(layer2);

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
	    console.log(imgObj.src);
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
	addImage("data:image/png;base64,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Ago9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgAABhW4HCBAgQIBAgIBCDwjRCAQIECBAQKHbAQIECBAgECCg0ANCNAIBAgQIEFDodoAAAQIECAQIKPSAEI1AgAABAgQUuh0gQIAAAQIBAgo9IEQjECBAgACB/wNy5IEzMrDQxQAAAABJRU5ErkJggg==", 300, 150);