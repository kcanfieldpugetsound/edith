  
  var stage = new Kinetic.Stage({
        container: 'story',
        width: 1000,
        height: 1000
      });

      var layer = new Kinetic.Layer();
		
      var rect = new Kinetic.Rect({
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
		draggable: false,
		name: "rect"
      });
	  
	  var method = new Kinetic.Rect({
        x: 100,
        y: 300,
        width: 100,
        height: 100,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 4,
		draggable: false,
		name: "method"
      });
	  
	  var argument = new Kinetic.Rect({
        x: 100,
        y: 500,
        width: 100,
        height: 100,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
		draggable: false,
		name: "argument"
      });
	  
	  
	  //messing around with color boxes
	  var colors = ["green","yellow","orange","blue"];
	  var numberOfTimesClicked = 0;
	  //test on how to give the box information
	  var ids = ["method", "variable", "otherThing", "loops"];
	  
	  
	  rect.on('click', function(){
		
		console.log(numberOfTimesClicked%colors.length);
		
if(numberOfTimesClicked%colors.length == 0){
		numberOfTimesClicked++;}
		
else if (numberOfTimesClicked%colors.length == 1){
		numberOfTimesClicked++;}
		
else if(numberOfTimesClicked%colors.length == 2){
		numberOfTimesClicked++;}
		
else if (numberOfTimesClicked%colors.length == 3){
		numberOfTimesClicked++;};  
		  
		  var cloneRect = rect.clone({
			  x: 220,
			  y: 100, 
			  fill: colors[numberOfTimesClicked%colors.length],
			  draggable: true,
			  id: ids[numberOfTimesClicked%ids.length]
			  });
		layer.add(cloneRect);
		layer.draw();
		console.log(rect.getName());

	  })
	  
	  
	  method.on('click', function(){
	  var cloneMethod = method.clone({
		  x: 220,
		  y: 300,
		  fill: 'black',
		  draggable: true
		  });
		  layer.add(cloneMethod);
		  layer.draw();
		  console.log(method.getName())
	  })
	  
	   
	   argument.on('click', function(){
	  	var clonedArgument = argument.clone({
		  x: 220,
		  y: 500,
		  fill: 'black',
		  draggable: true
		  });
		  layer.add(clonedArgument);
		  layer.draw();
		  console.log(argument.getName())
	  })
	  
	  
	  // keep track of individual clones?
	  // make them stop cloning from original when i click on the clone
	  // snap, ordered boxes
	  




/*		  
rect.on('dragend', function(){
	console.log("yoo, stop dragging!");
	if(this.x < 400 && this.x> 250){
		this.draggable = false;
		
	}
})
		  
		  
		  
	  
		  
		  //this goes in attributes of the rect
		  
		  
		  dragBoundFunc: function(pos) {
          return {
            x: this.getAbsolutePosition().x,
            y: pos.y
          }
        }
		  
		//this fucking makes

	  rect.on('click',function (){
		  console.log("sick job");
		  if(isRed === true){
			  this.setFill('green');
			  layer.draw();
			  isRed = false;}
		  else{
			  this.setFill('red');
			  layer.draw();
			  isRed= true
			  }
		  });
		  */

      
	  
	  // add the shape to the layer
      layer.add(rect);
	  layer.add(method);
	  layer.add(argument);


      // add the layer to the stage
      stage.add(layer);
	  

	  
