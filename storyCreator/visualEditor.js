 /* Prompts user input of names*/
  function promptUser(ids) {
    /*global prompt*/
    var x;
    if (ids === "method") {
      var mname = prompt("Please enter the name of your method", "test");
      var params = prompt("Please enter the Parameters for your method separated by commas");
      x = "function " + mname + "(" + params + ") {";
      console.log(x);
      return x;
    }
    if (ids === "variable") {
      var varn = prompt("Please enter the name of your variable", "test");
      x = "var " + varn +  ";";
      console.log(x);
      return x;
    }
    if (ids === "end method") {
      x = "}";
      return x;
    }
  }
  var layer;
  $(function () {
    /*global Kinetic*/
    var stage = new Kinetic.Stage({
      container: 'container',
      width: window.innerWidth / 2.4,
      height:window.innerHeight / 1.08
    });
    layer = new Kinetic.Layer();
    stage.add(layer);

    var line = new Kinetic.Line({
      x: (window.innerWidth / 2.4)/3,
      y: 0,
      points: [0, 0, 0, 800],
      stroke: 'red'
    });
    layer.add(line);

    var startX = 20;
    var startY = 30;

    var tools = [{'title': 'method', 'jstext': ''},
        {'title': 'variable', 'jstext': ''},
        {'title': 'end method', 'jstext': '}'}
        ];

    var i;

    function newRect(x, y, id) {
      var group = new Kinetic.Group({
        id: id,
        draggable: true,
        listening: true,
        name: "box"
      });
      var rect = new Kinetic.Rect({
        x: startX,
        y: startY,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 2,
        offset: 10
      });

      var simpleText = new Kinetic.Text({
        x: startX + 10,
        y: startY + 10,
        text: id,
        fontSize: 12,
        fontFamily: 'Calibri',
        stroke: 'black',
        strokeWidth: 1
      });

      //have the rectangles save its orginal XY
      rect.orginalX = x;
      rect.orginalY = y;
      //on dragend, calc the rect has passed the threshold
      group.on("dragend", function () {
        var i;
        //Sets the threshold and rules below.
        var dx = this.getX();
        if (dx + 20 > line.getX()) {
          //BELOW DO WHAT YOU DO WHEN SOMETHING GETS DRAGGED OVER
          var id = this.attrs.id;
          var groupArray = (this.getChildren()).toArray();
          var text = groupArray[1];
          //Only change text, or write to console on first time being dragged over
          if (text.isListening()) {
            text.setText(promptUser(id));
            var currentRect = groupArray[0];
            var height = currentRect.getHeight();
            currentRect.setSize(text.getWidth() + 30, height);
            layer.draw();
            text.setListening(false);
            //In this example, I loop through our list again and see what javascript is associated with our whichever tool was dragged over.
            for (i = 0; i < tools.length; i++) {
              if (id === tools[i].title) {
                if (tools[i].jstext !== '') {
                  console.log(tools[i].jstext);
                }
              }
            }
          }
          // END THAT
        }
      });
      group.add(rect);
      group.add(simpleText);
      layer.add(group);
      layer.draw();

    }

    for (i = 0; i < tools.length; i++) {
      newRect(startX, startY, tools[i].title);
      startY = startY + 65;
    }
  });