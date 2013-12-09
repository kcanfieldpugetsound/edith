
//styling for list
  var itemsTopMargin = 20;
  var itemHeight = 25;
  var itemX = 430;
  var itemSpacer = 5;
  var snapStructure = [];
  var groupToolbox;
  var UNIVERSAL_MAIN = "";
 
  //declaration of variables
  var startX = 20;
  var startY = 30;
  var yPosition;
  var layer;

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
    {'title': 'else', 'type': 'control', 'jstext': ''}
    ];


  /* Prompts user input of names*/
  function promptUser(ids) {
    /*global prompt*/
	var x,
		mname,
		params,
		varn,
		sprite,
		mills,
		dur,
		dist,
		height,
		clockwise,
		degrees,
		angle,
		condition;
    if (ids === "method") {
      mname = prompt("Please enter the name of your method", "test");
      params = prompt("Please enter the Parameters for your method separated by commas");
      x = "function " + mname + "(" + params + ") {";
    }
    if (ids === "variable") {
      varn = prompt("Please enter the name of your variable", "test");
      x = "var " + varn +  ";";
      return x;
    }
    if (ids === "end") {
      x = "}";
      return x;
    }
    if (ids === "setDelay") {
      sprite = prompt("Please enter the name of your sprite", "");
      mills = prompt("Seconds Delayed (in milliseconds)");
      x = "setDelay(" + sprite + ", " + mills + ");";
      return x;
    }
    if (ids === "fmove") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      dist = prompt("Distance");
      height = prompt("Height");
      rotateClockwise = prompt("Clockwise? (true or false)");
      degrees = prompt("Degrees");
      x = "fmove (" + sprite + ", " + dur + ", " + dist + ", " + height + ", " + rotateClockwise + ", " + degrees + ");";
      return x;
    }
    if (ids === "rotate") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      angle = prompt("Angle");
      height = prompt("Height")
      clockwise = prompt("Clockwise? (true or false)");
      x = "rotate (" + sprite + ", " + dur + ", " + angle + ", "+height+ ", "+clockwise+");";
      return x;
    }
    if (ids === "jump") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      height = prompt("Height");
      x = "jump ("+sprite+ ", "+dur+ ", "+height+");";
      return x;
    }
    if (ids === "movL") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      dist = prompt("Distance");
      x = "movL ("+sprite+ ", "+dur+ ", "+dist+");";
      return x;
    }
    if (ids === "movR") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      dist = prompt("Distance");
      x = "movLR ("+sprite+ ", "+dur+ ", "+dist+");";
      return x;
      }
   if (ids === "movU") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      dist = prompt("Distance");
      x = "movU ("+sprite+ ", "+dur+ ", "+dist+");";
      return x;
      }
   if (ids === "movD") {
      sprite = prompt("Please enter the name of your sprite");
      dur = prompt("Duration (in milliseconds)");
      dist = prompt("Distance");
      x = "movD ("+sprite+ ", "+dur+ ", "+dist+");";
      return x;
  	}
    if (ids === "if") {
      condition = prompt("Please enter the condition");
      x = "if(" + condition + "){";
      return x;
    }
    if (ids === "while") {
      condition = prompt("Please enter the condition");
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
			x: 400,
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
      text.setText(promptUser(id));
      height = currentRect.getHeight();
      currentRect.setSize(text.getWidth() + 30, height);
      this.attrs.firstTime = false;
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