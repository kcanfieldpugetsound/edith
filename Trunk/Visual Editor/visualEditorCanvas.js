
var groupToolbox;
var UNIVERSAL_MAIN = "";
//declaration of variables
var startX = 55;
var startY = 90;
var yPosition;
var layer;
var tab = "method";
var stage;
var line;
var text;
var loadedBlock;
var varRegex = /^[\w.-]+$/; //allows letters, digits and underscore. (Technically, should add $ as acceptable for JS var name.)
var methodRegex = /^[\w.-]+$/; 
var letterRegex = /^[a-zA-Z]+$/;
var numberPositiveRegex = /^\d+$/; //allow only positive numeric input
var numberRegex = /^[+-]?[0-9]{1,9}(?:\.[0-9]{1,2})?$/;//allow only numeric input

//Added by Animation team
var addedSprites = new Array();
var arrayOfImagesToAnimate = new Array();
var finalSpriteArray = new Array();
var arrayOfFinalSprites = new Array();
var spriteIndex;
var selectedSprites = new Array();
var counter = 0;
//spritesToAnimate[0] = "hi";

var tools = [{'title': 'method', 'jstext': ''},
  {'title': 'variable', 'jstext': ''},
  {'title': 'end', 'jstext': ''},
  {'title': 'addSprite', 'type': 'predefined', 'jstext': ''},
  {'title': 'wait', 'type': 'predefined', 'jstext': ''},
  {'title': 'rotate', 'type': 'predefined', 'jstext': ''},
  {'title': 'move', 'type': 'predefined', 'jstext': ''},
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
  {'title': 'main', 'type': 'main', 'jstext': ''},
  {'title': 'mainBrack', 'type': 'main', 'jstext': ''}
  ];


  var methodBox = [];
  var predefinedBox = [];
  var controlBox = [];
  var tabBox = [];
  var mainBox = [];
  var json = "";

  methodBox = tools.slice(0,3);
  predefinedBox = tools.slice(3,12);
  controlBox = tools.slice(12,15);
  tabBox = tools.slice(15,18);
  mainBox = tools.slice(18,20);

var newX = 220;
var newY = 70;
function cleanUp(sort) {
  json = JSON.stringify(sort);
}

  function loadBlocks(notarray) {
    layer.get('.sortable').each(function(shape){
        shape.destroy();
    });
    array = JSON.parse(notarray);
    var yPos = 70;
    for(var i = 0; i < array.length; i++) {
      
      loadedBlock = newRect(newX, yPos, array[i][0], "predefined", true, array[i][1]);
      console.log(loadedBlock); 
      loadedBlockArray = (loadedBlock.getChildren()).toArray();
      var loadedText = loadedBlockArray[1];
      var loadedRect = loadedBlockArray[0];
      loadedRect.setSize(loadedText.getWidth() + 30, loadedText.getHeight() + 30);
      yPos = yPos + loadedText.getHeight() + 40;
      loadedBlock.setName("sortable");
      loadedBlock.setAttr('jsText',array[i][1]);
      layer.draw();
    }
    sorter();
  }

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
  	condition,
    canvas,
    width,
    xpos,
    ypos;
  // var ghostElement = deepCopy(oCanvasElement);
  //addSprite(oCanvasElement, "mario.jpg",100,100,100,100);
  function loadUpSpritesToAnimate()
  {
    for(var i = 0; i < getGlowingObjects().length; i++)
    {
        for(var j = 0; j < addedSprites.length; j++)
        {
            if(getGlowingObjects()[i].attrs.name == addedSprites[j]) //
            {
                arrayOfImagesToAnimate.push(addedSprites[j]);
            }
        }
    }
    //okay, now we actually need to get the image refereces......
    for(var i = 0; i < arrayOfImagesToAnimate.length; i++)
    {
            var imagesOnCanvas = oCanvasElement.canvas.children;
            if(contains(imagesOnCanvas, arrayOfImagesToAnimate[i]))
            {
                finalSpriteArray.push(imagesOnCanvas[spriteIndex]);                
            }
    }
    arrayOfImagesToAnimate = [];
  }

  if (ids === "method") {
    mname = prompt("Please enter the name of your method", "");
    if(mname != null && mname != '') {
      while ( letterRegex.test(mname) == false){
        alert("Enter a method name (use only letters)")
        mname = prompt("Please enter the name of your method", "");
      }
      params = prompt("Please enter the Parameters for your method separated by commas");
      x = "function " + mname + "(" + params + ") {";
      //console.log(x);
      return x;
    } else {
      return 0;
    }
  }

  if (ids === "variable") {
    varn = prompt("Please enter the name of your variable", "");
    if(varn != null && varn != ''){
      while ( letterRegex.test(varn) == false){
        alert("Use only letters.")
        varn = prompt("Please enter the name of your variable", "");
      }
      x = "var " + varn +  ";";
      //console.log(x);
      return x;
    } else {
      return 0;
    }
  }

  if (ids === "end") {
    x = "}";
    return x;
  }

  if (ids === "wait") {
    mills = prompt("Seconds Delayed (in milliseconds)");
    if(mills != null && mills != ''){
      while (numberPositiveRegex.test(mills) == false){
        alert("Please input numbers only.")
        mills = prompt("Please enter the seconds delayed", "");
        }
      loadUpSpritesToAnimate();
      arrayOfFinalSprites.push(finalSpriteArray);
      selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
      finalSpriteArray = [];
      x = "wait(" + "selectedSprites["+counter+"]" + ", " + mills + ");";
      counter++;
      //console.log(x);
      return x;
   } else {
    return 0;
   }
  }

  if (ids === "move") {
    dur = prompt("Duration (in milliseconds)");
    if(dur != null && dur != ''){
      while (numberPositiveRegex.test(dur) == false){
        alert("Please input numbers only.")
        dur = prompt("Please enter the duration", "");
      }
    } else {
      return 0;
    }
    dist = prompt("Distance");
    if(dist != null && dist != ''){
      while (numberRegex.test(dist) == false){
        alert("Please input numbers only.")
        dist = prompt("Please enter the distance", "");
      }
    } else {
      return 0;
    }
    height = prompt("Height");
    if(height != null && height != '') {
      while (numberRegex.test(height) == false){
        alert("Please input numbers only.")
        height = prompt("Please enter the height", "");
      }
    } else {
      return 0;
    }
    clockwise = prompt("Clockwise? (true or false)");
    if(clockwise === null || clockwise === '') {
      return 0;
    }
    degrees = prompt("Degrees");
    if(degrees != null && degrees != '') {
      while (numberRegex.test(degrees) == false){
        alert("Please input numbers only.")
        degrees = prompt("Please enter the degrees", "");
      }
      loadUpSpritesToAnimate();
      arrayOfFinalSprites.push(finalSpriteArray);
      finalSpriteArray = [];
      selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
      x = "move (" + "selectedSprites["+counter+"]" + ", " + dur + ", " + dist + ", " + height + ", " + clockwise + ", " + degrees + ");";
      //console.log(x);
      counter++;
      finalSpriteArray = [];
      return x;
    } else {
      return 0;
    }
  }

  if (ids === "rotate") {
    dur = prompt("Duration (in milliseconds)");
    while (numberPositiveRegex.test(dur) == false){
      alert("Please input numbers only.")
      dur = prompt("Please enter the duration", "");
      }
    angle = prompt("Angle");
    while (numberRegex.test(angle) == false){
      alert("Please input numbers only.")
      angle = prompt("Please enter the angle", "");
      }
    clockwise = prompt("Clockwise? (true or false)");

    loadUpSpritesToAnimate();
    arrayOfFinalSprites.push(finalSpriteArray);
    finalSpriteArray = [];
    selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
    x = "rotate (" + "selectedSprites["+counter+"]" + ", " + dur + ", " + angle + ", "+clockwise+");";
    counter++;
    return x;
  }

  if (ids === "jump") {
    dur = prompt("Duration (in milliseconds)");
    while (numberPositiveRegex.test(dur) == false){
      alert("Please input numbers only.")
      dur = prompt("Please enter the duration", "");
      }
    height = prompt("Height");
    while (numberRegex.test(height) == false){
      alert("Please input numbers only.")
      height = prompt("Please enter the height", "");
      }
            loadUpSpritesToAnimate();
    arrayOfFinalSprites.push(finalSpriteArray);
    finalSpriteArray = [];
    selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
    x = "jump ("+ "selectedSprites["+counter+"]" + ", "+dur+ ", "+height+");";
    //console.log(x);
    counter++;
    return x;
  }

  if (ids === "movL") {
    dur = prompt("Duration (in milliseconds)");
    while (numberPositiveRegex.test(dur) == false){
      alert("Please input numbers only.")
      dur = prompt("Please enter the duration", "");
      }
    dist = prompt("Distance");
    while (numberRegex.test(dist) == false){
      alert("Please input numbers only.")
      distance = prompt("Please enter the distance", "");
      }
            loadUpSpritesToAnimate();
    arrayOfFinalSprites.push(finalSpriteArray);
    finalSpriteArray = [];
    selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
    x = "movL ("+ "selectedSprites["+counter+"]" + ", "+dur+ ", "+dist+");";
    //console.log(x);
    counter++;
    return x;
  }

  if (ids === "movR") {
    dur = prompt("Duration (in milliseconds)");
    while (numberPositiveRegex.test(dur) == false){
      alert("Please input numbers only.")
      dur = prompt("Please enter the duration", "");
      }
    dist = prompt("Distance");
    while (numberRegex.test(dist) == false){
      alert("Please input numbers only.")
      distance = prompt("Please enter the distance", "");
      }
            loadUpSpritesToAnimate();
    arrayOfFinalSprites.push(finalSpriteArray);
    finalSpriteArray = [];
    selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
    x = "movR ("+ "selectedSprites["+counter+"]" + ", "+dur+ ", "+dist+");";
    //console.log(x);
    counter++;
    return x;
    }

 if (ids === "movU") {
    dur = prompt("Duration (in milliseconds)");
    while (numberPositiveRegex.test(dur) == false){
      alert("Please input numbers only.")
      dur = prompt("Please enter the duration", "");
      }
    dist = prompt("Distance");
    while (numberRegex.test(dist) == false){
      alert("Please input numbers only.")
      distance = prompt("Please enter the distance", "");
      }
            loadUpSpritesToAnimate();
    arrayOfFinalSprites.push(finalSpriteArray);
    finalSpriteArray = [];
    selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
    x = "movU ("+ "selectedSprites["+counter+"]" + ", "+dur+ ", "+dist+");";
    //console.log(x);
    counter++;
    return x;
    }

 if (ids === "movD") {
    dur = prompt("Duration (in milliseconds)");
    while (numberPositiveRegex.test(dur) == false){
      alert("Please input numbers only.")
      dur = prompt("Please enter the duration", "");
      }
    dist = prompt("Distance");
    while (numberRegex.test(dist) == false){
      alert("Please input numbers only.")
      distance = prompt("Please enter the distance", "");
      }
            loadUpSpritesToAnimate();
    arrayOfFinalSprites.push(finalSpriteArray);
    finalSpriteArray = [];
    selectedSprites[counter] = arrayOfFinalSprites[arrayOfFinalSprites.length-1];
    x = "movD ("+ "selectedSprites["+counter+"]" + ", "+dur+ ", "+dist+");";
    //console.log(x);
    counter++;
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

  if (ids === "addSprite") {
    x = "";
    for (var i = 0; i < getGlowingObjects().length; i ++) {
      xpos = prompt("Please enter desired x-coordinate of object.","");
      while (numberPositiveRegex.test(xpos) == false || xpos > mainCanvas.width){
        alert("Please input numbers only.")
        xpos = prompt("Please enter desired x-coordinate of object.","");
      }
      ypos = prompt("Please enter desired y-coordinate of object.","");
      while (numberPositiveRegex.test(ypos) == false || ypos > mainCanvas.height){
        alert("Please input numbers only.")
        ypos = prompt("Please enter desired y-coordinate of object.","");
      }
      width = getGlowingObjects()[i].attrs.width;
      height = getGlowingObjects()[i].attrs.height;
      x = x + "addSprite (oCanvasElement," + "'" + getGlowingObjects()[i].attrs.name + "', " + width + ", " + height + ", " + xpos + ", " + ypos + ");\n";
      addedSprites.push(getGlowingObjects()[i].attrs.name);
      //addSprite(oCanvasElement, getGlowingObjects()[i].attrs.name, width, height, xpos, ypos);
    }     
    return x;
  }
}

  /*
  An Array.contains() method
  */
  function contains(array, E)
  {
      for(var i = 0; i < array.length; i++)
      {
         if(array[i].image == E)
         {
          spriteIndex = i;
            return true;
         }
      }
      return false;
  }

  function newRect(xpos, ypos, id, type, unclone, subtext) {
      var groupToolbox = new Kinetic.Group({
        id: id,
        draggable: true,
        listening: true,
        firstTime: true,
        noclone: unclone,
        name: "box",
        jsText: ""
    }),
    rect,
    simpleText,
    currentRect,
    clone,
    groupArray;
    
    //create rect if its behavior is predefined
      if (type == "predefined") {
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
    }
    //create rect if its behavior is that of control ("while," "else," "if," etc)
     else if(type == "control"){
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

    } 
 //default drawing for rect
    else {
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
        text: subtext,
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
      currentRect = groupArray[0];
      if (this.attrs.noclone === false) {
        clone = newRect(currentRect.getX(), currentRect.getY(), id, type, false, id); //create a "clone" of this rectangle
      }
      layer.draw();
    });

  //for any rect, allows users to change variable names on double click
    groupToolbox.on("dblclick", function () {
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      console.log(groupArray[1]);
      currentRect = groupArray[0];
      id = this.attrs.id;
      console.log(id);
       //changes text on draggables to text from user prompt
      var jsText = promptUser(id);// prompts the user to get attributes
          this.setAttr('jsText',jsText);// sets the input from above and gives it to the group that is selected
          text.setText(jsText); // sets the text on group
          var height = currentRect.getHeight();
          currentRect.setSize(text.getWidth() + 30, text.getHeight() + 30);
          this.attrs.firstTime = false;
          layer.draw();
      sorter();
      layer.draw();
    });

  //for any rect, prompts user for draggable attr
    groupToolbox.on("dragend", function () {
      this.setOpacity(1.00);
      layer.draw();
      dx = this.getAbsolutePosition().x;

      id = this.attrs.id;
      groupArray = (this.getChildren()).toArray();
      text = groupArray[1];
      currentRect = groupArray[0];
      //console.log(this.getY() + currentRect.getY()); // double check
    //BELOW: When draggable is dragged from tool area into work area
      if (dx + 50 > line.getAbsolutePosition().x) {
        //Only change text, or write to console on first time being dragged over
        if (this.attrs.firstTime === true) {
          var jsText = promptUser(id);
          //sets the selected group to be sorted in the sorted function
          // prompts the user to get attributes
          if(jsText === 0){
            groupToolbox.remove();
            layer.draw();
          } else {
            this.setName("sortable");
            this.setAttr('jsText',jsText);// sets the input from above and gives it to the group that is selected
            text.setText(jsText); // sets the text on group
            var height = currentRect.getHeight();
            currentRect.setSize(text.getWidth() + 30, text.getHeight() + 30);
            this.attrs.firstTime = false;
            layer.draw();
          }
        }
      sorter();

      } else {
        if(this.attrs.noclone === true) {
          if(this.getX() < -20) {
            groupToolbox.remove();
            sorter();
          }
        } else if (dx + 50 < line.getX()){
          groupToolbox.remove();
        }
        layer.draw();
      }
    });
    groupToolbox.add(rect);
    groupToolbox.add(simpleText);
    layer.add(groupToolbox);
    layer.draw();
    return groupToolbox;
}


  $(function () {
    /*global Kinetic*/
	//sets up stage and working layer of kinetic canvas
    stage = new Kinetic.Stage({
      container: 'container1',
      width: 550,
      height:1000
    });
    layer = new Kinetic.Layer();
    stage.add(layer);

	//creates and draws dividing line btwn tools and working area
		line = new Kinetic.Line({
			x: 200,
			y: 0,
			points: [0, 0, 0, 1000],
			stroke: 'red'
		});
    layer.add(line);
    tabSwitcher();

    
    function newTab (xpos, ypos, id, type){
      var tabMenu = new Kinetic.Group({
        id: id,
        draggable: false,
        listening: true,
        firstTime: true,
        name: "tabby",
        jsText: ""
      });

        var rect =  new Kinetic.Rect({
        x: xpos,
        y: ypos,
        width: 50,
        height: 30,
        stroke: 'black',
        fillLinearGradientStartPoint: [0, 0],
        fillLinearGradientEndPoint: [80, 80],
        fillLinearGradientColorStops: [0, 'cyan', 1, 'blue'],
        strokeWidth: 2,
        offset: 10,
        name: 'tab',
        });

        

        var simpleText = new Kinetic.Text({
        x: xpos,
        y: ypos,
        text: id,
        kItem: null,
        fontSize: 8,
        fontFamily: 'Calibri',
        stroke: 'black',
        strokeWidth: 1
      });

      
      tabMenu.on("click", function () {

        //console.log("remove");
        layer.get('.box').each(function(shape){
        shape.destroy();
        });

        //console.log(tabMenu.getId());
        //console.log(tab);


        tab = tabMenu.getId();
        tabSwitcher();
        layer.draw();
    });

      tabMenu.add(rect);
      tabMenu.add(simpleText);
      layer.add(tabMenu);
      layer.draw();
      

    }

    tabMaker();

	//creates and draws draggable tools' rectangle and text
	//defines drag/drop/double click actions
    


    function tabMaker(){
      var horOffset; 
      for (i = 0; i < tabBox.length; i++) {
        horOffset = (i * 55) + 40;
        newTab(horOffset, 10, tabBox[i].title, tabBox[i].type);
      }
    }


    function tabSwitcher(){
        startX = 55;
        startY = 90;

      if (tab === "method"){
        for (i = 0; i < methodBox.length; i++) {
        newRect(startX, startY, methodBox[i].title, methodBox[i].type, false, methodBox[i].title);
        startY = startY + 65;
        }
      }
      if (tab == "predefined"){
        for (i = 0; i < predefinedBox.length; i++) {
        newRect(startX, startY, predefinedBox[i].title, predefinedBox[i].type, false, predefinedBox[i].title);
        startY = startY + 65;
        }
      }
      if (tab == "control"){
        for (i = 0; i < controlBox.length; i++) {
        newRect(startX, startY, controlBox[i].title, controlBox[i].type, false, controlBox[i].title);
        startY = startY + 65;
        }
      }
    }

    methodBlock = newRect(250, 70, "method", "", true, "function main() {");
    methodBlockArr = (methodBlock.getChildren()).toArray();
    var loadedText = methodBlockArr[1];
    var loadedRect = methodBlockArr[0];
    loadedRect.setSize(loadedText.getWidth() + 30, loadedText.getHeight() + 30);
    methodBlock.setName("sortable");
    methodBlock.setAttr('jsText', "function main() {");
    layer.draw();

    endBlock = newRect(250, 300, "end", "", true, "}");
    endBlockArr = (methodBlock.getChildren()).toArray();
    var loadedText = endBlockArr[1];
    var loadedRect = endBlockArr[0];
    loadedRect.setSize(loadedText.getWidth() + 30, loadedText.getHeight() + 30);
    endBlock.setName("sortable");
    endBlock.setAttr('jsText', "}");
    layer.draw();

    sorter();
	//put the rectangle draggables in the tool area
    /*for (i = 0; i < tools.length; i++) {
      newRect(startX, startY, tools[i].title, tools[i].type);
      startY = startY + 65;
    }
    */
 });