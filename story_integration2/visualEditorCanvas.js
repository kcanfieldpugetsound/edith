var groupToolbox;
var UNIVERSAL_MAIN = "";
var startX = 20;
var startY = 30;
var layer;
var text;
var height;
var jsText;
var dx;

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
  /*global prompt, getGlowingObjects*/
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
    condition,
    rotateClockwise;

  if (ids === "method") {
    mname = prompt("Please enter the name of your method", "test");
    params = prompt("Please enter the Parameters for your method separated by commas");
    x = "function " + mname + "(" + params + ") {";
    return x;
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
    mills = prompt("Seconds Delayed (in milliseconds)");
    x = "setDelay(" + getGlowingObjects() + ", " + mills + ");";
    return x;
  }

  if (ids === "fmove") {
    dur = prompt("Duration (in milliseconds)");
    dist = prompt("Distance");
    height = prompt("Height");
    rotateClockwise = prompt("Clockwise? (true or false)");
    degrees = prompt("Degrees");
    x = "fmove (" + getGlowingObjects() + ", " + dur + ", " + dist + ", " + height + ", " + rotateClockwise + ", " + degrees + ");";
    return x;
  }

  if (ids === "rotate") {
    dur = prompt("Duration (in milliseconds)");
    angle = prompt("Angle");
    height = prompt("Height");
    clockwise = prompt("Clockwise? (true or false)");
    x = "rotate (" + getGlowingObjects + ", " + dur + ", " + angle + ", " + height + ", " + clockwise + ");";
    return x;
  }

  if (ids === "jump") {
    dur = prompt("Duration (in milliseconds)");
    height = prompt("Height");
    x = "jump (" + getGlowingObjects() + ", " + dur + ", " + height + ");";
    return x;
  }

  if (ids === "movL") {
    dur = prompt("Duration (in milliseconds)");
    dist = prompt("Distance");
    x = "movL (" + getGlowingObjects() + ", " + dur + ", " + dist + ");";
    return x;
  }

  if (ids === "movR") {
    dur = prompt("Duration (in milliseconds)");
    dist = prompt("Distance");
    x = "movR (" + getGlowingObjects() + ", " + dur + ", " + dist + ");";
    return x;
  }

  if (ids === "movU") {
    dur = prompt("Duration (in milliseconds)");
    dist = prompt("Distance");
    x = "movU (" + getGlowingObjects() + ", " + dur + ", " + dist + ");";
    return x;
  }
  if (ids === "movD") {
    dur = prompt("Duration (in milliseconds)");
    dist = prompt("Distance");
    x = "movD (" + getGlowingObjects() + ", " + dur + ", " + dist + ");";
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
} //end promptUser method

$(function () {
  /*global Kinetic*/
//sets up stage and working layer of kinetic canvas
  var stage = new Kinetic.Stage({
    container: 'container1',
    width: 800,
    height: 1000
  });
  layer = new Kinetic.Layer();
  stage.add(layer);

//creates and draws dividing line btwn tools and working area
  var line = new Kinetic.Line({
    x: 200,
    y: 0,
    points: [0, 0, 0, 1000],
    stroke: 'red'
  });
  layer.add(line);

//creates and draws draggable tools' rectangle and text
//defines drag/drop/double click actions
  function newRect(xpos, ypos, id, type) {
    var groupToolbox = new Kinetic.Group({
      id: id,
      draggable: true,
      listening: true,
      firstTime: true,
      name: "box",
      jsText: ""
    }),
      rect,
      simpleText,
      currentRect,
      clone,
      groupArray;
  //create rect if its behavior is predefined
    if (type === "predefined") {
      rect = new Kinetic.Rect({
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
    } else if (type === "control") { //create rect if its behavior is that of control ("while," "else," "if," etc)
      rect = new Kinetic.Rect({
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
    } else { //default drawing for rect
      rect = new Kinetic.Rect({
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

 //text to display on draggable
    simpleText = new Kinetic.Text({
      x: xpos + 10,
      y: ypos + 10,
      text: id,
      kItem: null,
      fontSize: 12,
      fontFamily: 'Calibri',
      stroke: 'black',
      strokeWidth: 1
    });
    //for any rect, defines action on dragstart
    groupToolbox.on('dragstart', function () {
      this.moveToTop();
      this.setOpacity(0.50);
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      currentRect = groupArray[0];
      clone = newRect(currentRect.getX(), currentRect.getY(), id, type); //create a "clone" of this rectangle
      layer.draw();
    });
    //for any rect, allows users to change variable names on double click
    groupToolbox.on("dblclick", function () {
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      currentRect = groupArray[0];
      id = this.attrs.id;
      text.setText(promptUser(id)); //changes text on draggables to text from user prompt
      height = currentRect.getHeight();
      currentRect.setSize(text.getWidth() + 30, height);
      this.attrs.firstTime = false;
      layer.draw();
    });

    //for any rect, prompts user for draggable attr
    groupToolbox.on("dragend", function () {
      this.setOpacity(1.00);
      layer.draw();
      dx = this.getX();
      id = this.attrs.id;
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      currentRect = groupArray[0];
      //BELOW: When draggable is dragged from tool area into work area
      if (dx + 20 > line.getX()) {
        //Only change text, or write to console on first time being dragged over
        if (this.attrs.firstTime === true) {
          this.setName("sortable");//sets the selected group to be sorted in the sorted function
          jsText = promptUser(id);// prompts the user to get attributes
          this.setAttr('jsText', jsText);// sets the input from above and gives it to the group that is selected
          text.setText(jsText); // sets the text on group
          height = currentRect.getHeight();
          currentRect.setSize(text.getWidth() + 30, height);
          this.attrs.firstTime = false;
          layer.draw();
        }
        /*global sorter*/
        sorter();
      } else {
        groupToolbox.remove();
        layer.draw();
      }
    });
    groupToolbox.add(rect);
    groupToolbox.add(simpleText);
    layer.add(groupToolbox);
    layer.draw();
  }
  //put the rectangle draggables in the tool area
  var i;
  for (i = 0; i < tools.length; i++) {
    newRect(startX, startY, tools[i].title, tools[i].type);
    startY = startY + 65;
  }
});