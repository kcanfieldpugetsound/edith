

var i;

function myFunction() {
	for (i = 0; i< points.length; i++){
	console.log(points[i]);
	}
points.sort(function(a,b){return a-b});
var x=document.getElementById("demo");
x.innerHTML=points;
}



function sorter()
{
	var orderPairing = []; // the hash map
	layer.get('.box').each(function(shape){
		orderPairing.push({id:shape.getId(), yPos: shape.getY()}); // pushes both attr. of the things in the box class
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
	console.log("trial over");
	
	}
	
	
	function lookUp(arrayOfY, hash){
	var limit = 0; //goes through each one of the sorted y lengths
	
	while(limit < arrayOfY.length){
		
	for(var i = 0; i< arrayOfY.length; i++){
		
		if (hash[i].yPos === arrayOfY[limit]){
			console.log( i + " thing " + hash[i].id + " y - "+ hash[i].yPos);
			limit++;
		}
	}
	}
	
	
	}
	