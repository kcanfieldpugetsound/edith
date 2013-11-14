var pathx = 0;
var pathy = 0;
var color = "black";
var on = 0;
var width = 1;
var can = document.getElementById("canvas");
var cancx = can.getContext("2d");
function captureMouseup(evt)
{
	var x = Math.abs(pathx-evt.clientX);
	var y = Math.abs(pathy-evt.clientY);
	cancx.fillRect(pathx,pathy,x,y);
	cancx.stroke();
}
function pathStart(evt)
{
	pathx = evt.clientX;
	pathy = evt.clientY;
}
function line(evt)
{

}
function continuous(evt)
{
	on =1;
	pathx=clientX;
	pathy=clientY;
	cancx.beginPath(evt.clientX,evt.clientY);
	cancx.lineWidth=width;
	cancx.strokeStyle=color;
	cancx.moveTo(pathx,pathy);
}
function move(evt)
{
	if(on>0)
	{
	var x = evt.clientX;
	var y = evt.clientY;
	cancx.fillRect(x-30,y-30,50,50);
	cancx.stroke();
	}
}
function off(evt)
{
	on = 0;
	cancx.closePath();
	cancx.beginPath();
}
function cont(evt)
{
	if(on>0)
	{	
	cancx.lineTo(evt.clientX-10,evt.clientY-35);
	cancx.stroke();
	}
}