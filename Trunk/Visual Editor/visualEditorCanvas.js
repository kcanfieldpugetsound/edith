//styling for list
  var itemsTopMargin = 20;
  var itemHeight = 25;
  var itemX = 430;
  var itemSpacer = 5;
  var snapStructure = [];
  var groupToolbox;
  var UNIVERSAL_MAIN = ""; 
  //declaration of variables
  var i;
  var startX = 20;
  var startY = 30;
  var newX = 300
  var newY = 50 
  var yPosition;
  var layer;
  var varRegex = /^[\w.-]+$/; //allows letters, digits and underscore. (Technically, should add $ as acceptable for JS var name.)
  var methodRegex = /^[\w.-]+$/; 
  var letterRegex = /^[a-zA-Z]+$/;
  var numberRegex = /^\d+$/; //allow only numeric input

  var tools = [{'title': 'method', 'jstext': ''},
    {'title': 'variable', 'jstext': ''},
    {'title': 'end', 'jstext': ''},
    {'title': 'setDelay', 'type': 'predefined', 'jstext': ''},
    {'title': 'rotate', 'type': 'predefined', 'jstext': ''},
    {'title': 'fmove', 'type': 'predefined', 'jstext': ''},
    {'title': 'jump', 'type': 'predefined', 'jstext': ''},
    {'title': 'movR', 'type': 'predefined', 'jstext': ''},
    {'title': 'movL', 'type': 'predefined', 'jstext': ''},
    {'title': 'movU', 'type': 'predefined', 'jstext': ''},
    {'title': 'movD', 'type': 'predefined', 'jstext': ''},
    {'title': 'if', 'type': 'control', 'jstext': ''},
    {'title': 'while', 'type': 'control', 'jstext': ''},
    {'title': 'else', 'type': 'control', 'jstext': ''},
    ];

  /* Prompts user input of names*/
  function promptUser(ids) {
    /*global prompt*/
    var x;
    if (ids === "method") {
      var mname = prompt("Please enter the name of your method", "");
      while ( letterRegex.test(mname) == false){
        alert("Enter a method name (use only letters)")
        mname = prompt("Please enter the name of your method", "");
      }
      var params = prompt("Please enter the Parameters for your method separated by commas");
      x = "function " + mname + "(" + params + ") {";
      //console.log(x);
      return x;
    }

    if (ids === "variable") {
      var varn = prompt("Please enter the name of your variable", "");
      while ( letterRegex.test(varn) == false){
        alert("Use only letters.")
        varn = prompt("Please enter the name of your variable", "");
      }
      x = "var " + varn +  ";";
      //console.log(x);
      return x;
    }

    if (ids === "end") {
      x = "}";
      return x;
    }

    if (ids === "setDelay") {
      var mills = prompt("Seconds Delayed (in milliseconds)");
      while (numberRegex.test(mills) == false){
        alert("Please input numbers only.")
        mills = prompt("Please enter the seconds delayed", "");
        }
      x = "setDelay(" + getGlowingObjects() + ", " + mills + ");";
      //console.log(x);
      return x;
    }

    if (ids === "fmove") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var dist = prompt("Distance");
      while (numberRegex.test(dist) == false){
        alert("Please input numbers only.")
        dist = prompt("Please enter the distance", "");
        }
      var height = prompt("Height");
      while (numberRegex.test(height) == false){
        alert("Please input numbers only.")
        height = prompt("Please enter the height", "");
        }
      var rotateClockwise = prompt("Clockwise? (true or false)");
      var degrees = prompt("Degrees");
      while (numberRegex.test(degrees) == false){
        alert("Please input numbers only.")
        degrees = prompt("Please enter the degrees", "");
        }
      x = "fmove (" + getGlowingObjects() + ", " + dur + ", " + dist + ", " + height + ", " + rotateClockwise + ", " + degrees + ");";
      //console.log(x);
      return x;
    }

    if (ids === "rotate") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var angle = prompt("Angle");
      while (numberRegex.test(angle) == false){
        alert("Please input numbers only.")
        angle = prompt("Please enter the angle", "");
        }
      var height = prompt("Height")
      while (numberRegex.test(height) == false){
        alert("Please input numbers only.")
        height = prompt("Please enter the height", "");
        }
      var clockwise = prompt("Clockwise? (true or false)");
      x = "rotate (" + getGlowingObjects + ", " + dur + ", " + angle + ", "+height+ ", "+clockwise+");";
      //console.log(x);
      return x;
    }

    if (ids === "jump") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var height = prompt("Height");
      while (numberRegex.test(height) == false){
        alert("Please input numbers only.")
        height = prompt("Please enter the height", "");
        }
      x = "jump ("+ getGlowingObjects() + ", "+dur+ ", "+height+");";
      //console.log(x);
      return x;
    }

    if (ids === "movL") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var distance = prompt("Distance");
      while (numberRegex.test(distance) == false){
        alert("Please input numbers only.")
        distance = prompt("Please enter the distance", "");
        }
      x = "movL ("+ getGlowingObjects() + ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;
    }

    if (ids === "movR") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var distance = prompt("Distance");
      while (numberRegex.test(distance) == false){
        alert("Please input numbers only.")
        distance = prompt("Please enter the distance", "");
        }
      x = "movLR ("+ getGlowingObjects() + ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;
      }

   if (ids === "movU") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var distance = prompt("Distance");
      while (numberRegex.test(distance) == false){
        alert("Please input numbers only.")
        distance = prompt("Please enter the distance", "");
        }
      x = "movU ("+ getGlowingObjects() + ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;
      }

   if (ids === "movD") {
      var dur = prompt("Duration (in milliseconds)");
      while (numberRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
        }
      var distance = prompt("Distance");
      while (numberRegex.test(distance) == false){
        alert("Please input numbers only.")
        distance = prompt("Please enter the distance", "");
        }
      x = "movD ("+ getGlowingObjects() + ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;
  	}

    if (ids === "if") {
      var condition = prompt("Please enter the condition");
      x = "if(" + condition + "){";
      return x;
    }

    if (ids === "while") {
      var condition = prompt("Please enter the condition");
      x = "while(" + condition + "){";
      return x;
    }

    if (ids === "else") {
      x = "else{";
      return x;
    }
  }
  
  $(function () {
    /*global Kinetic*/
    var stage = new Kinetic.Stage({
      container: 'container1',
      width: 800,
      height:1000
    });
    layer = new Kinetic.Layer();
    stage.add(layer);

		var line = new Kinetic.Line({
			x: 200,
			y: 0,

			points: [0, 0, 0, 1000],
			stroke: 'red'

		});
		
    layer.add(line);

    function newRect(xpos, ypos, id, type) {
      var groupToolbox = new Kinetic.Group({
        id: id,
        draggable: true,
        listening: true,
        firstTime: true,
        name: "box",
        jsText: ""
      });
      if (type == "predefined") {
      var rect = new Kinetic.Rect({
        x: xpos,
        y: ypos,
        width: 100,
        height: 50,
        fillLinearGradientStartPoint: [-50, -50],
        fillLinearGradientEndPoint: [50, 50],
        fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
        stroke: 'black',
        strokeWidth: 2,
        offset: 10
      });
    }
     else if(type == "control"){
        var rect = new Kinetic.Rect({
        x: xpos,
        y: ypos,
        width: 100,
        height: 50,
        fillLinearGradientStartPoint: [-50, -50],
        fillLinearGradientEndPoint: [50, 50],
        fillLinearGradientColorStops: [0, 'green', 1, 'yellow'],
        stroke: 'black',
        strokeWidth: 2,
        offset: 10
      });

    } 
    else {
      var rect = new Kinetic.Rect({
        x: xpos,
        y: ypos,
        width: 100,
        height: 50,
        fillLinearGradientStartPoint: [-50, -50],
        fillLinearGradientEndPoint: [50, 50],
        fillLinearGradientColorStops: [0, 'pink', 1, 'orange'],
        stroke: 'black',
        strokeWidth: 2,
        offset: 10
      });
    } 

      var simpleText = new Kinetic.Text({
        x: xpos + 10,
        y: ypos + 10,
        text: id,
        kItem: null,
        fontSize: 12,
        fontFamily: 'Calibri',
        stroke: 'black',
        strokeWidth: 1
      });
    
      //on dragend, calc the rect has passed the threshold
    var currentRect;
    var clone;
    groupToolbox.on('dragstart', function () {
      this.moveToTop();
      this.setOpacity(0.50);
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      currentRect = groupArray[0];

  

      clone = newRect(currentRect.getX(), currentRect.getY(), id, type); //create a "clone" of this rectangle

      layer.draw();
    });

    var text;
    var groupArray = [];
    var height;
    var dx;
    
    groupToolbox.on("dblclick", function () {
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      currentRect = groupArray[0];
      id = this.attrs.id;
      this.setName("sortable");
      var jsText = promptUser(id);// prompts the user to get attributes
      this.setAttr('jsText',jsText);// sets the input from above and gives it to the group that is selected
      text.setText(jsText); // sets the text on group
      var height = currentRect.getHeight();
      currentRect.setSize(text.getWidth() + 30, height);
      this.attrs.firstTime = false;
      sorter();
      layer.draw();
    });

    groupToolbox.on("dragend", function () {
      this.setOpacity(1.00);
      layer.draw();
      var i;
      //Sets the threshold and rules below.
      dx = this.getX();
      id = this.attrs.id;
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];

      currentRect = groupArray[0];
      //console.log(this.getY() + currentRect.getY()); // double check


      //BELOW DO WHAT YOU DO WHEN SOMETHING GETS DRAGGED OVER the line
      if (dx + 20 > line.getX()) {
        //Only change text, or write to console on first time being dragged over
        if (this.attrs.firstTime === true) {
          this.setName("sortable");//sets the selected group to be sorted in the sorted function
          var jsText = promptUser(id);// prompts the user to get attributes
          this.setAttr('jsText',jsText);// sets the input from above and gives it to the group that is selected
          text.setText(jsText); // sets the text on group
          
          var height = currentRect.getHeight();
          currentRect.setSize(text.getWidth() + 30, height);
          this.attrs.firstTime = false;
          layer.draw();
        //In this example, I loop through our list again and see what javascript is associated with our whichever tool was dragged over.
          for (i = 0; i < tools.length; i++) {
            if (id === tools[i].title) {
              if (tools[i].jstext !== '') {
                //console.log(tools[i].jstext);
              }
            }
          }
        }
      sorter();
      for (var i; i<sortArray.length; i++) {
          newRect(newX, newY, sortArray[i][1], sortArray[i][0]);
          newY = newY + 65;
      } 
      } else {
        groupToolbox.remove();
        layer.draw();
      }

          //console.log("id: "+id);
          //console.log("clone id: "+clone.getId());
          //console.log("clone X: "+clone.getX()+"       clone Y: "+clone.getY());
    });
    groupToolbox.add(rect);
    groupToolbox.add(simpleText);
    layer.add(groupToolbox);
    layer.draw();
}   

    for (i = 0; i < tools.length; i++) {
      newRect(startX, startY, tools[i].title, tools[i].type);
      startY = startY + 65;
    }

 });

    