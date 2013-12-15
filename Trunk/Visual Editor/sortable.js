

var i;
var sortArray = {};
function myFunction() {
	for (i = 0; i< points.length; i++){
	console.log(points[i]);
	}
points.sort(function(a,b){return a-b});
var x=document.getElementById("demo");
x.innerHTML=points;
}


var orderedString;
function sorter()
{
	sortArray = [];
	orderedString = "";
	var orderPairing = []; // the hash map
	layer.get('.sortable').each(function(shape){
		var rectGhost = (shape.getChildren()).toArray();
        var rect = rectGhost[0];
        //console.log(rect.getY());
        console.log(shape);
		orderPairing.push({id:shape.getId(), yPos: shape.getY() + rect.getY(), jsText: shape.getAttr('jsText')}); // pushes both attr. of the things in the box class
		});
	
	//console.log("length of array " + orderPairing.length);// how many things are in the array
	
	var yPoints = []; // this is where i want to put the points of y
	var orderedId = []; // where the ids will be put once we know what order to put them
	
	for(var i = 0; i< orderPairing.length; i++){
	yPoints[i] = orderPairing[i].yPos;	//dump the attr from the hash map into an array to be sorted
	//console.log("id - " + orderPairing[i].id + " y - "+ orderPairing[i].yPos); // prints out both.
	}
	
	//console.log("trying to order them");
	for(var i = 0; i< yPoints.length; i++){
		yPoints.sort(function(a,b){return a-b}); //sorts it
		//console.log(yPoints[i]);
		}
		
		
	lookUp(yPoints, orderPairing);
	console.log(orderedString);
	//console.log("trial over");
	return true;	
}
	
	
	function lookUp(arrayOfY, hash){
	UNIVERSAL_MAIN = "";	

	var limit = 0; //goes through each one of the sorted y lengths
	
	while(limit < arrayOfY.length){
	for(var i = 0; i< arrayOfY.length; i++){
		
		if (hash[i].yPos === arrayOfY[limit]){
			//console.log(orderedString);
			sortArray[i] = [hash[i].id, hash[i].jsText];
			orderedString = orderedString + hash[i].jsText;
			
			UNIVERSAL_MAIN = orderedString;
			//console.log( i + " thing " + hash[i].jsText + " y - "+ hash[i].yPos);
			limit++;
		}
	}
	}
	
	
	}
	