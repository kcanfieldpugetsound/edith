//styling for list
  var itemsTopMargin = 20;
  var itemHeight = 25;
  var itemX = 430;
  var itemSpacer = 5;
  var snapStructure = [];
  var groupToolbox;
  var tabMenu;
  var UNIVERSAL_MAIN = "";
  var tab = "control";
 
  //declaration of variables
  var i;
  var startX = 20;
  var startY = 80;
  var yPosition;
  var layer;

  var tools = [

    {'title': 'method', 'jstext': ''},
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
    {'title': 'method', 'type': 'tab', 'jstext': ''},
    {'title': 'predefined', 'type': 'tab', 'jstext': ''},
    {'title': 'control', 'type': 'tab', 'jstext': ''},
    ];

    var methodBox = [];
    var predefinedBox = [];
    var controlBox = [];
    var tabBox = [];

    methodBox = tools.slice(0,3);
    predefinedBox = tools.slice(3,11);
    controlBox = tools.slice(11,14);
    tabBox = tools.slice(14,17);


  /* Prompts user input of names*/
  function promptUser(ids) {
    /*global prompt*/
    var x;
    if (ids === "method") {
      var mname = prompt("Please enter the name of your method", "test");
      var params = prompt("Please enter the Parameters for your method separated by commas");
      x = "function " + mname + "(" + params + ") {";
      //console.log(x);
      return x;
    }
    if (ids === "variable") {
      var varn = prompt("Please enter the name of your variable", "test");
      x = "var " + varn +  ";";
      //console.log(x);
      return x;
    }
    if (ids === "end") {
      x = "}";
      return x;
    }
    if (ids === "setDelay") {
      var sprite = prompt("Please enter the name of your sprite", "");
      var mills = prompt("Seconds Delayed (in milliseconds)");
      x = "setDelay(" + sprite + ", " + mills + ");";
      //console.log(x);
      return x;
    }
    if (ids === "fmove") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var dist = prompt("Distance");
      var height = prompt("Height");
      var rotateClockwise = prompt("Clockwise? (true or false)");
      var degrees = prompt("Degrees");
      x = "fmove (" + sprite + ", " + dur + ", " + dist + ", " + height + ", " + rotateClockwise + ", " + degrees + ");";
      //console.log(x);
      return x;
    }
    if (ids === "rotate") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var angle = prompt("Angle");
      var height = prompt("Height")
      var clockwise = prompt("Clockwise? (true or false)");
      x = "rotate (" + sprite + ", " + dur + ", " + angle + ", "+height+ ", "+clockwise+");";
      //console.log(x);
      return x;
    }
    if (ids === "jump") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var height = prompt("Height");
      x = "jump ("+sprite+ ", "+dur+ ", "+height+");";
      //console.log(x);
      return x;
    }
    if (ids === "movL") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var distance = prompt("Distance");
      x = "movL ("+sprite+ ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;
    }
    if (ids === "movR") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var distance = prompt("Distance");
      x = "movLR ("+sprite+ ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;

      }
   if (ids === "movU") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var distance = prompt("Distance");
      x = "movU ("+sprite+ ", "+dur+ ", "+distance+");";
      //console.log(x);
      return x;

      }
   if (ids === "movD") {
      var sprite = prompt("Please enter the name of your sprite");
      var dur = prompt("Duration (in milliseconds)");
      var distance = prompt("Distance");
      x = "movD ("+sprite+ ", "+dur+ ", "+distance+");";
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
      width: 600,
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


    function newTab (xpos, ypos, id, type){
      

      var tabMenu = new Kinetic.Group({
        id: id,
        draggable: false,
        listening: true,
        firstTime: true,
        name: "box",
        jsText: ""
      });

        var rect =  new Kinetic.Rect({
        x: xpos,
        y: ypos,
        width: 40,
        height: 10,
        stroke: 'black',
        strokeWidth: 2,
        offset: 10,
        name: 'tab',
        });

        

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

      
      tabMenu.on("click", function () {
        console.log(tabMenu.getId());
        console.log(tab);
        tab = tabMenu.getId();
        tabSwitcher();
        layer.draw();
    });

      tabMenu.add(rect);
      tabMenu.add(simpleText);
      layer.add(tabMenu);
      layer.draw();

      tabMaker();

    }

   

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
      } 
      else {
        groupToolbox.remove();
        layer.draw();
      }

    });
    groupToolbox.add(rect);
    groupToolbox.add(simpleText);
    layer.add(groupToolbox);
    layer.draw();
}


    function tabMaker(){

      var horOffset; 

      var tabNames = ["method", "predefined", "control"];

    for (i = 0; i < tabBox.length; i++) {


      //console.log("going into the loop to make tabs");
      horOffset = (i * 50) + 10;
      newTab(horOffset, 10, tabBox[i].title, tabBox[i].type);
      //console.log(tabBox[i].title);
      }

    }


    function tabSwitcher(){
      if (tab == "method"){
        for (i = 0; i < methodBox.length; i++) {
        newRect(startX, startY, methodBox[i].title, methodBox[i].type);
        startY = startY + 65;
        }
      }
      if (tab == "predefined"){
        for (i = 0; i < predefinedBox.length; i++) {
        newRect(startX, startY, predefinedBox[i].title, predefinedBox[i].type);
        startY = startY + 65;
        }
      }
      if (tab == "control"){
        for (i = 0; i < controlBox.length; i++) {
        newRect(startX, startY, controlBox[i].title, controlBox[i].type);
        startY = startY + 65;
        }
      }
    }
    

 });