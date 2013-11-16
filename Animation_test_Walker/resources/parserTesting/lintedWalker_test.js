/*global oCanvas, Audio, mediaInput1, mediaInput2, mediaInput3, mediaInput4, mediaInput5, mediaInput6, mediaInput7, mediaInput8, mediaInput9, mediaInput10*/
/*jslint maxerr:1000 */
var canvas = oCanvas.create({
  canvas: "#canvas"
});

var image = canvas.display.image({
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 100,
  height: 100,
  origin: { x: "center", y: "center" },
  image: mediaInput1.imageName
});

// add the sprite onto the canvas
canvas.addChild(image);



//The Animation Blocks

function sleep(milliseconds) {
  var start = new Date().getTime();
  while ((new Date().getTime() - start) < milliseconds) {
    // Do nothing
  }
}

function rotate(dur, angle, clockwise) {
  if (!clockwise) {
    angle = -angle;
  }
  image.animate({rotation: image.rotation + angle}, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
}

function jump(dur, height) {
  image.animate({y: image.y - height}, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
  // now we need to go back down...
  image.animate({y: image.y}, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
}

function longJump(dur, height, distance, reverse) {
  var xValue1 = image.x + distance / 2;
  var xValue2 = image.x + distance;
  if (reverse) {
    xValue1 = xValue1 - distance;
    xValue2 = xValue2 - distance * 2;
  }
  image.animate({y: image.y - height, x: xValue1}, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    newQueue: true,
    callback: function () {
      canvas.redraw();
    }
  });
  // now we need to go back down...
  image.animate({y: image.y, x: xValue2}, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    newQueue: true,
    callback: function () {
      canvas.redraw();
    }
  });
}

function movL(dur, distance) {
  image.animate({x: image.x - distance }, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
}
function movR(dur, distance) {
  image.animate({x: image.x + distance}, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
}
function movD(dur, height) {
  image.animate({y: image.y + height }, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
}
function movU(dur, height) {
  image.animate({y: image.y - height }, {
    duration: dur,
    easing: "ease-in-sine", //see http://ocanvas.org/docs/Animation/animate
    callback: function () {
      canvas.redraw();
    }
  });
}



//Here is where we parse the JSON and do the animations
/*
var win;
function playContinious() {

  if (mediaInput1.functionName === "jump") {
    win = new Audio(mediaInput1.soundName);
    win.play();
    jump(mediaInput1.duration, mediaInput1.height);
  }

  //higher jump
  if (mediaInput2.functionName === "jump") {
    win = new Audio(mediaInput2.soundName);
    win.play();
    jump(mediaInput2.duration, mediaInput2.height);
  }
  //move right slowly
  if (mediaInput3.functionName === "movR") {
    movR(mediaInput3.duration, mediaInput3.distance);
  }

  //move left FAST
  if (mediaInput4.functionName === "movL") {
    movL(mediaInput4.duration, mediaInput4.distance);
  }

  //long jump right
  if (mediaInput5.functionName === "longJump") {
    longJump(mediaInput5.duration, mediaInput5.height, mediaInput5.distance, false);
  }
  //move down
  if (mediaInput6.functionName === "movD") {
    movD(mediaInput6.duration, mediaInput6.height);
  }

  //move left
  if (mediaInput7.functionName === "movL") {
    movL(mediaInput7.duration, mediaInput7.distance);
  }

  //move up
  if (mediaInput8.functionName === "movU") {
    movU(mediaInput8.duration, mediaInput8.height);
  }

  //rotate clockwise 360
  if (mediaInput9.functionName === "rotate") {
    rotate(mediaInput9.duration, mediaInput9.angle, mediaInput9.clockwise);
  }

  //rotate COUNTERclockwise 360
  if (mediaInput10.functionName === "rotate") {
    rotate(mediaInput10.duration, mediaInput10.angle, mediaInput10.clockwise);
  }
  */
document.getElementById('1').style.color = "red";
var i = 0;
var win;
function playAnimation() {
  i++;
  //jump
  if (mediaInput1.functionName === "jump" && i === 1) {
    win = new Audio(mediaInput1.soundName);
    win.play();
    jump(mediaInput1.duration, mediaInput1.height);
    document.getElementById('1').style.color = "black";
    document.getElementById('2').style.color = "red";
  }
  //higher jump
  if (mediaInput2.functionName === "jump" && i === 2) {
    win = new Audio(mediaInput2.soundName);
    win.play();
    jump(mediaInput2.duration, mediaInput2.height);
    document.getElementById('2').style.color = "black";
    document.getElementById('3').style.color = "red";
  }
  //move right slowly
  if (mediaInput3.functionName === "movR" && i === 3) {
    movR(mediaInput3.duration, mediaInput3.distance);
    document.getElementById('3').style.color = "black";
    document.getElementById('4').style.color = "red";
  }
  //move left FAST
  if (mediaInput4.functionName === "movL" && i === 4) {
    movL(mediaInput4.duration, mediaInput4.distance);
    document.getElementById('4').style.color = "black";
    document.getElementById('5').style.color = "red";
  }
  //long jump right
  if (mediaInput5.functionName === "longJump" && i === 5) {
    longJump(mediaInput5.duration, mediaInput5.height, mediaInput5.distance, false);
    document.getElementById('5').style.color = "black";
    document.getElementById('6').style.color = "red";
  }
  //move down
  if (mediaInput6.functionName === "movD" && i === 6) {
    movD(mediaInput6.duration, mediaInput6.height);
    document.getElementById('6').style.color = "black";
    document.getElementById('7').style.color = "red";
  }
  //move left
  if (mediaInput7.functionName === "movL" && i === 7) {
    movL(mediaInput7.duration, mediaInput7.distance);
    document.getElementById('7').style.color = "black";
    document.getElementById('8').style.color = "red";
  }
  //move up
  if (mediaInput8.functionName === "movU" && i === 8) {
    movU(mediaInput8.duration, mediaInput8.height);
    document.getElementById('8').style.color = "black";
    document.getElementById('9').style.color = "red";
  }
  //rotate clockwise 360
  if (mediaInput9.functionName === "rotate" && i === 9) {
    rotate(mediaInput9.duration, mediaInput9.angle, mediaInput9.clockwise);
    document.getElementById('9').style.color = "black";
    document.getElementById('10').style.color = "red";
  }
  //rotate COUNTERclockwise 360
  if (mediaInput10.functionName === "rotate" && i === 10) {
    rotate(mediaInput10.duration, mediaInput10.angle, mediaInput10.clockwise);
    document.getElementById('10').style.color = "black";
    document.getElementById('1').style.color = "red";
    i = 0;
  }
}
